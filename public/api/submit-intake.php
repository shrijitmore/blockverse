<?php
const TO_EMAIL   = 'support@blockversetechnologies.ai';
const FROM_EMAIL = 'no-reply@blockversetechnologies.ai';

// CORS — allow the Vercel front-end to call this endpoint
$allowed = [
    'https://blockverse-kappa.vercel.app',
    'https://blockversetechnologies.ai',
    'https://www.blockversetechnologies.ai',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = [];
}

$name  = trim($data['name']  ?? '');
$email = trim($data['email'] ?? '');
$page  = trim($data['page']  ?? 'Blockverse');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing or invalid name/email']);
    exit;
}

function clean_header_value(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

function encode_header_word(string $value): string
{
    return preg_match('/[^\x20-\x7E]/', $value)
        ? mb_encode_mimeheader($value, 'UTF-8', 'B', "\r\n")
        : $value;
}

$safeName  = clean_header_value($name);
$safeEmail = clean_header_value($email);

$rows = '';
foreach ($data as $key => $value) {
    if (in_array($key, ['name', 'email', 'page'], true)) continue;
    $label = htmlspecialchars((string) $key,   ENT_QUOTES, 'UTF-8');
    $val   = htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    $rows .= "<tr><td style=\"padding:6px 12px;color:#888;\">{$label}</td><td style=\"padding:6px 12px;\">{$val}</td></tr>";
}

$safePage     = htmlspecialchars($page,  ENT_QUOTES, 'UTF-8');
$safeNameHtml = htmlspecialchars($name,  ENT_QUOTES, 'UTF-8');
$safeMailHtml = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

$subject = encode_header_word("New intake - {$safePage} - {$safeName}");
$body    = "
    <h2>{$safePage} submission</h2>
    <p><b>Name:</b> {$safeNameHtml}<br><b>Email:</b> {$safeMailHtml}</p>
    <table>{$rows}</table>
";

$headers   = [];
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
