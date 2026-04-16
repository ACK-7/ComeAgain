<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Inquiry</title>
</head>
<body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f4; margin: 0; padding: 40px 0; color: #333;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #0c1106; padding: 30px 40px; text-align: center; border-bottom: 4px solid #c6e300;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">Come Again Tours & Travels</h1>
            <p style="color: #c6e300; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">New Contact Form Submission</p>
        </div>

        <!-- Body -->
        <div style="padding: 40px;">
            <p style="font-size: 16px; margin-bottom: 30px; color: #555;">You have received a new inquiry from the website. Here are the details:</p>
            
            <div style="background-color: #f9fbf9; border: 1px solid #e0e8e0; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e0e8e0; color: #888; width: 120px;"><strong>Name</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e0e8e0; color: #111; font-weight: 500;">{{ $data['firstName'] }} {{ $data['lastName'] }}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e0e8e0; color: #888;"><strong>Email Address</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #e0e8e0; color: #111; font-weight: 500;"><a href="mailto:{{ $data['email'] }}" style="color: #3f612d; text-decoration: none;">{{ $data['email'] }}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; color: #888;"><strong>Phone Number</strong></td>
                        <td style="padding: 10px 0; color: #111; font-weight: 500;">{{ $data['phone'] ?? 'Not provided' }}</td>
                    </tr>
                </table>
            </div>

            <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Message Content</h3>
            <div style="background-color: #ffffff; border-left: 4px solid #c6e300; padding: 15px 20px; color: #444; font-size: 15px; line-height: 1.6; font-style: italic;">
                "{{ $data['message'] }}"
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
                <a href="mailto:{{ $data['email'] }}" style="display: inline-block; background-color: #0c1106; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 4px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Reply to Customer</a>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f4f7f4; padding: 20px; text-align: center; border-top: 1px solid #e0e8e0;">
            <p style="margin: 0; color: #999; font-size: 12px;">This email was automatically generated from the Come Again Tours & Travels website contact form.</p>
        </div>
        
    </div>

</body>
</html>
