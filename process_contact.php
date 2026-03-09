<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Destination 
    $to = "john.z@fssolar.com.my";
    
    // 2. Sanitize Inputs
    $name    = strip_tags(trim($_POST["user_name"]));
    $email   = filter_var(trim($_POST["user_email"]), FILTER_SANITIZE_EMAIL);
    // NEW: Capture the contact number
    $contact = strip_tags(trim($_POST["user_contact"])); 
    $project = strip_tags($_POST["project_type"]);
    $message = strip_tags(trim($_POST["user_message"]));

    // 3. Email Headers & Content
    $subject = "New Solar Inquiry: $project from $name";
    
    $email_content = "Name/Company: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Contact No: $contact\n"; 
    $email_content .= "Project Type: $project\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: info@fssolar.com.my\r\n"; 
    $headers .= "Reply-To: $email\r\n";

    // 4. Send the Email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect back to contact page with success flag
        header("Location: contact.html?status=success");
    } else {
        header("Location: contact.html?status=error");
    }
} else {
    // Redirect if accessed directly without submitting
    header("Location: contact.html");
}
?>