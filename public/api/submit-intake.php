<?php
// Credentials are read from server environment variables — never hardcoded here.
// Set them in Hostinger hPanel → Hosting → Advanced → PHP Configuration:
//   SMTP_USER  =  support@blockverseacademy.com
//   SMTP_PASS  =  <your 16-char Google App Password, no spaces>
//   SMTP_TO    =  support@blockverseacademy.com   (where notifications land)
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;

header('Content-Type: application/json');

$smtpUser = getenv('SMTP_USER') ?: '';
$smtpPass = getenv('SMTP_PASS') ?: '';
$toEmail  = getenv('SMTP_TO')   ?: $smtpUser;

if ($smtpUser === '' || $smtpPass === '') {
    http_response_code(503);
    echo json_encode(['error' => 'Mail not configured']);
    exit;
}

// CORS — allow the Vercel preview and the production domain.
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
if (!is_array($data)) $data = [];

$name  = trim($data['name']  ?? '');
$email = trim($data['email'] ?? '');
$page  = trim($data['page']  ?? 'Blockverse');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing or invalid name/email']);
    exit;
}

function clean_header(string $v): string {
    return str_replace(["\r", "\n"], '', $v);
}

$safeName  = clean_header($name);
$safeEmail = clean_header($email);

$rows = '';
foreach ($data as $key => $value) {
    if (in_array($key, ['name', 'email', 'page'], true)) continue;
    $label = htmlspecialchars((string) $key,   ENT_QUOTES, 'UTF-8');
    $val   = htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    $rows .= "<tr><td style='padding:6px 12px;color:#888;'>{$label}</td>"
           . "<td style='padding:6px 12px;'>{$val}</td></tr>";
}

$safePage   = htmlspecialchars($page,  ENT_QUOTES, 'UTF-8');
$safeNameH  = htmlspecialchars($name,  ENT_QUOTES, 'UTF-8');
$safeEmailH = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$subject    = "New intake - {$safePage} - {$safeName}";
$html       = "<h2>{$safePage} submission</h2>"
            . "<p><b>Name:</b> {$safeNameH}<br><b>Email:</b> {$safeEmailH}</p>"
            . "<table>{$rows}</table>";

// ── Minimal Gmail SMTP client (STARTTLS on port 587) ─────────────────────────

function smtp_read($sock): string {
    $buf = '';
    while (($line = fgets($sock, 1024)) !== false) {
        $buf .= $line;
        // Multiline responses use "NNN-text"; the final line uses "NNN text".
        if (strlen($line) >= 4 && $line[3] === ' ') break;
        if (strlen($line) < 4) break;
    }
    return $buf;
}

function smtp_write($sock, string $cmd): string {
    fwrite($sock, $cmd . "\r\n");
    return smtp_read($sock);
}

function smtp_code(string $r): int {
    return (int) substr($r, 0, 3);
}

function gmail_send(
    string $smtpUser,
    string $smtpPass,
    string $to,
    string $subject,
    string $body,
    string $replyEmail,
    string $replyName
): bool {
    $sock = @fsockopen('tcp://' . SMTP_HOST, SMTP_PORT, $errno, $errstr, 15);
    if (!$sock) return false;
    stream_set_timeout($sock, 15);

    smtp_read($sock); // discard server banner

    smtp_write($sock, 'EHLO mail.blockversetechnologies.ai');

    $r = smtp_write($sock, 'STARTTLS');
    if (smtp_code($r) !== 220) { fclose($sock); return false; }

    // Upgrade the plain TCP connection to TLS before sending credentials.
    if (!stream_socket_enable_crypto($sock, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        fclose($sock);
        return false;
    }

    smtp_write($sock, 'EHLO mail.blockversetechnologies.ai'); // re-introduce after TLS

    smtp_write($sock, 'AUTH LOGIN');
    smtp_write($sock, base64_encode($smtpUser));
    $r = smtp_write($sock, base64_encode($smtpPass));
    if (smtp_code($r) !== 235) { fclose($sock); return false; } // 235 = authenticated

    smtp_write($sock, 'MAIL FROM:<' . $smtpUser . '>');
    smtp_write($sock, 'RCPT TO:<' . $to . '>');
    smtp_write($sock, 'DATA'); // server replies 354, then we send headers + body

    $safeReply = str_replace(['"', "\r", "\n"], '', $replyName);
    $msg = "From: Blockverse Website <{$smtpUser}>\r\n"
         . "To: <{$to}>\r\n"
         . "Subject: {$subject}\r\n"
         . "Reply-To: \"{$safeReply}\" <{$replyEmail}>\r\n"
         . "MIME-Version: 1.0\r\n"
         . "Content-Type: text/html; charset=UTF-8\r\n"
         . "\r\n"
         . $body;

    fwrite($sock, $msg . "\r\n.\r\n"); // \r\n.\r\n terminates the DATA command
    smtp_read($sock);                  // read 250 OK
    smtp_write($sock, 'QUIT');
    fclose($sock);

    return true;
}

// ─────────────────────────────────────────────────────────────────────────────

$sent = gmail_send($smtpUser, $smtpPass, $toEmail, $subject, $html, $safeEmail, $safeName);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send']);
}
