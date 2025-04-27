<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #007bff;
            color: #ffffff;
            border-radius: 5px 5px 0 0;
        }

        .content {
            margin: 20px 0;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <h1>Test Email</h1>
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>This is a test email to verify the email template functionality.</p>
            <p>Thank you!</p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} VastCloud Dashboard. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
