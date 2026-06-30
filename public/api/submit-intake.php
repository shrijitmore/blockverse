<?php
// Contact form handler for Hostinger shared/cloud hosting.
// Uses PHP's built-in mail() — no SMTP credentials or external libraries
// needed, since Hostinger's mail server already handles outbound delivery
// for this domain.

// Where intake notifications get sent. Change this to the inbox you want
// "Book a Call" submissions to land in.
const TO_EMAIL = 'support@blockversetechnologies.ai';

// Must be an address on your own domain, or some mail servers will spam-
// filter or reject the message (SPF/DMARC mismatch).
const FROM_EMAIL = 'no-reply@blockversetechnologies.ai';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    $data = [];
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$page = trim($data['page'] ?? 'Blockverse');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing or invalid name/email']);
    exit;
}

// Strip line breaks from anything that ends up in a mail header, so a
// crafted submission can't inject extra headers (header injection).
function clean_header_value(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

// mail() doesn't MIME-encode headers itself, so a non-ASCII name (accents,
// emoji, etc.) would otherwise go out raw and risk being mangled in transit.
function encode_header_word(string $value): string
{
    return preg_match('/[^\x20-\x7E]/', $value)
        ? mb_encode_mimeheader($value, 'UTF-8', 'B', "\r\n")
        : $value;
}

$safeName = clean_header_value($name);
$safeEmail = clean_header_value($email);

$rows = '';
foreach ($data as $key => $value) {
    if (in_array($key, ['name', 'email', 'page'], true)) {
        continue;
    }
    $label = htmlspecialchars((string) $key, ENT_QUOTES, 'UTF-8');
    $val = htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    $rows .= "<tr><td style=\"padding:6px 12px;color:#888;\">{$label}</td><td style=\"padding:6px 12px;\">{$val}</td></tr>";
}

$safePage = htmlspecialchars($page, ENT_QUOTES, 'UTF-8');
$safeNameHtml = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmailHtml = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

$subject = encode_header_word("New intake - {$safePage} - {$safeName}");
$body = "
    <h2>{$safePage} submission</h2>
    <p><b>Name:</b> {$safeNameHtml}<br><b>Email:</b> {$safeEmailHtml}</p>
    <table>{$rows}</table>
";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Blockverse Website <' . FROM_EMAIL . '>';
$headers[] = 'Reply-To: ' . encode_header_word($safeName) . ' <' . $safeEmail . '>';

$sent = mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send']);
}
