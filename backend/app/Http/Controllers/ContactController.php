<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:50',
            'lastName' => 'required|string|max:50',
            'email' => 'required|email|max:150',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:2000',
        ]);

        Mail::to('info@comeagaintoursandtravels.com')->send(new ContactFormMail($validated));

        return response()->json([
            'message' => 'Message sent successfully.'
        ]);
    }
}
