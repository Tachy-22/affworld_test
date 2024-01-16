"use server";

import { transporter, mailOptions } from "@/configs/mailer/transporter";

const sendMail = async (email: string, resetLink: string) => {
  try {
    const result = await transporter.sendMail({
      ...mailOptions,
      to: email,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Company Name - Password Reset</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            background: #f5f5f5;
            text-align: center;
            font-family: 'Arial', sans-serif;
            color: #333;
        }

        .container {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #2c3e50;
        }

        .message-content {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
            color: #555;
        }

        /* Add the following styles for the link button */
        .button {
            display: inline-block;
            padding: 15px 30px;
            text-decoration: none;
            background-color: #3498db; /* Blue color */
            color: #fff; /* White text color */
            border-radius: 5px; /* Rounded border */
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #2980b9; /* Darker blue on hover */
        }

        .disclaimer {
            font-size: 12px;
            color: #777;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Ansecs - Password Reset</div>
        <div class="message-content">
            <p>Hello user,</p>
            <p>You've requested a password reset for your Asecs account. Click the button below to proceed:</p>
            <div style="text-align: center;">
                <a href= "${resetLink}" class="button">Reset Password</a>
            </div>
        </div>
        <div class="disclaimer">
            <p>If you did not request a password reset or have any concerns, please ignore this message.</p>
        </div>
    </div>
</body>
</html>


`,
      subject: "ANSEC Password Reset",
    });
    console.log({ result });
    return result;
  } catch (err) {
    console.log({ err });
    return err;
  }
};

export default sendMail;
