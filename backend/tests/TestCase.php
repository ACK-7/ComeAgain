<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function authenticateAdmin(string $role = 'super_admin'): \App\Models\User
    {
        $user = \App\Models\User::factory()->create();
        $user->role = $role;
        $user->save();
        $token = bin2hex(random_bytes(32));
        \Illuminate\Support\Facades\DB::table('admin_tokens')->insert([
            'user_id' => $user->id, 'token_hash' => hash('sha256', $token), 'expires_at' => now()->addHour(),
        ]);
        $this->withHeader('Authorization', 'Bearer '.$token);
        return $user;
    }
}
