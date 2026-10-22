<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate(['email' => 'required|email', 'password' => 'required|string']);
        $email = strtolower(trim($data['email']));
        $key = 'admin-login:'.hash('sha256', $email.'|'.$request->ip());
        if (RateLimiter::tooManyAttempts($key, 5)) {
            return response()->json(['message' => 'Too many attempts. Please try again in a minute.'], 429);
        }
        RateLimiter::hit($key, 60);
        $user = User::where('email', $email)->first();
        if (!$user || !Hash::check($data['password'], $user->password) || !in_array($user->role, ['super_admin', 'safari_consultant', 'content_editor'], true)) {
            throw ValidationException::withMessages(['email' => 'The email or password is incorrect.']);
        }
        RateLimiter::clear($key);
        $token = bin2hex(random_bytes(32));
        DB::table('admin_tokens')->where('expires_at', '<=', now())->delete();
        DB::table('admin_tokens')->insert([
            'user_id' => $user->id, 'token_hash' => hash('sha256', $token), 'expires_at' => now()->addHours(8),
        ]);
        return response()->json(['success' => true, 'data' => ['token' => $token, 'user' => $this->userData($user)]]);
    }

    public function me(Request $request)
    {
        return response()->json(['success' => true, 'data' => $this->userData($request->user())]);
    }

    public function logout(Request $request)
    {
        DB::table('admin_tokens')->where('id', $request->attributes->get('admin_token_id'))->delete();
        return response()->json(['success' => true]);
    }

    private function userData(User $user): array
    {
        return ['id' => (string) $user->id, 'name' => $user->name, 'email' => $user->email, 'role' => $user->role];
    }
}
