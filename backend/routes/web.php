<?php
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => view('welcome'));

// Public Newsletter Unsubscribe & Resubscribe
Route::get('/unsubscribe', function (\Illuminate\Http\Request $request) {
    $email = $request->query('email');
    $token = $request->query('token');

    if (!$email || !$token || !\App\Services\NewsletterSubscriptionService::verifyToken($email, $token)) {
        return view('newsletter_unsubscribed', [
            'success' => false,
            'message' => 'The unsubscribe link provided is invalid or has expired.',
            'email' => $email,
            'resubscribeUrl' => '#',
        ]);
    }

    \App\Services\NewsletterSubscriptionService::unsubscribe($email);

    return view('newsletter_unsubscribed', [
        'success' => true,
        'email' => $email,
        'resubscribeUrl' => \App\Services\NewsletterSubscriptionService::generateResubscribeUrl($email),
    ]);
});

Route::get('/resubscribe', function (\Illuminate\Http\Request $request) {
    $email = $request->query('email');
    $token = $request->query('token');

    if ($email && $token && \App\Services\NewsletterSubscriptionService::verifyToken($email, $token)) {
        \App\Services\NewsletterSubscriptionService::resubscribe($email);
        return redirect('https://comeagaintoursandtravels.com/?resubscribed=true');
    }

    return redirect('https://comeagaintoursandtravels.com/');
});

