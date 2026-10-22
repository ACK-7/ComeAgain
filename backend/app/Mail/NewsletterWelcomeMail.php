<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewsletterWelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    public string $email;
    public string $unsubscribeUrl;

    /**
     * Create a new message instance.
     */
    public function __construct(string $email, string $unsubscribeUrl)
    {
        $this->email = $email;
        $this->unsubscribeUrl = $unsubscribeUrl;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '🌍 Welcome to the Come Again Safari Journal!',
        );
    }

    /**
     * Get the message headers for native Gmail/Apple Mail One-Click Unsubscribe (RFC 8058).
     */
    public function headers(): \Illuminate\Mail\Mailables\Headers
    {
        return new \Illuminate\Mail\Mailables\Headers(
            text: [
                'List-Unsubscribe' => '<' . $this->unsubscribeUrl . '>',
                'List-Unsubscribe-Post' => 'List-Unsubscribe=One-Click',
            ],
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.newsletter_welcome',
            with: [
                'email' => $this->email,
                'unsubscribeUrl' => $this->unsubscribeUrl,
            ],
        );
    }
}
