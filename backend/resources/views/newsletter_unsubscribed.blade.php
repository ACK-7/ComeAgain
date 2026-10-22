<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unsubscribed &bull; Come Again Tours & Travels</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #080d07;
            color: #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .card {
            background-color: #11190e;
            border: 1px solid #233719;
            border-radius: 20px;
            max-width: 500px;
            width: 100%;
            padding: 40px 30px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .icon {
            font-size: 44px;
            margin-bottom: 16px;
        }
        h1 {
            color: #ffffff;
            font-size: 22px;
            margin: 0 0 12px 0;
            font-weight: 700;
        }
        p {
            color: #94a3b8;
            font-size: 14px;
            line-height: 1.6;
            margin: 0 0 24px 0;
        }
        .btn {
            display: inline-block;
            background-color: #65a30d;
            color: #0c1208;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.2s;
        }
        .btn:hover {
            background-color: #84cc16;
        }
        .btn-outline {
            background-color: transparent;
            color: #a3e635;
            border: 1px solid #36572a;
            margin-left: 10px;
        }
        .btn-outline:hover {
            background-color: #1f3319;
        }
        .footer {
            margin-top: 30px;
            border-top: 1px solid #1c2b16;
            padding-top: 20px;
            font-size: 11px;
            color: #556950;
        }
    </style>
</head>
<body>
    <div class="card">
        @if ($success)
            <div class="icon">🌿</div>
            <h1>You have been unsubscribed</h1>
            <p>
                We have updated our records. You will no longer receive the <strong>Come Again Safari Journal</strong> newsletter at <strong>{{ $email }}</strong>.
            </p>
            <p style="font-size: 12px; color: #64748b;">
                Unsubscribed by mistake? You can re-subscribe anytime to continue receiving gorilla trekking and safari updates.
            </p>
            <div style="margin-top: 24px;">
                <a href="{{ $resubscribeUrl }}" class="btn">Re-subscribe</a>
                <a href="https://comeagaintoursandtravels.com" class="btn btn-outline">Visit Website</a>
            </div>
        @else
            <div class="icon">⚠️</div>
            <h1>Invalid or Expired Link</h1>
            <p>{{ $message ?? 'The unsubscribe link provided is invalid or has expired.' }}</p>
            <a href="https://comeagaintoursandtravels.com" class="btn">Return to Homepage</a>
        @endif

        <div class="footer">
            Come Again Tours and Travels &bull; Uganda, East Africa
        </div>
    </div>
</body>
</html>
