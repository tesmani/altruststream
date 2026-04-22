<?php
header("Content-Type: text/plain");

// only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "invalid_request";
    exit;
}

// sanitize input
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$plan = $_POST['plan'] ?? '';
$device = $_POST['device'] ?? '';
$price = $_POST['price'] ?? '';
$message = $_POST['message'] ?? '';

$name = htmlspecialchars($name);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$plan = htmlspecialchars($plan);
$device = htmlspecialchars($device);
$price = htmlspecialchars($price);
$message = htmlspecialchars($message);

// receiver
$to = "akinloyebasit6@gmail.com";

// subject
$subject = "New IPTV Order - $plan ($device)";

// FULL CLEAN EMAIL BODY
$body = "
NEW ORDER RECEIVED

Name: $name
Email: $email

PLAN: $plan
DEVICE: $device
PRICE: $price

MESSAGE:
$message

-------------------------
Time: " . date("Y-m-d H:i:s") . "
";

// IMPORTANT HEADERS (THIS FIXES HOSTINGER ISSUE)
$headers = "From: noreply@yourdomain.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// SEND MAIL
$sent = mail($to, $subject, $body, $headers);

// DEBUG RESPONSE (IMPORTANT)
if ($sent) {
    echo "success";
} else {
    echo "failed";
}
?>