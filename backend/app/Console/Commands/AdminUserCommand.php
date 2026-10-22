<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminUserCommand extends Command
{
    protected $signature = 'admin:user {email} {--role=super_admin}';
    protected $description = 'Create or update a staff account and revoke its existing login tokens';

    public function handle(): int
    {
        $email = strtolower(trim($this->argument('email')));
        $role = $this->option('role');
        $password = $this->secret('New password (at least 12 characters)');
        $validator = Validator::make(compact('email', 'role', 'password'), [
            'email' => 'required|email|max:255', 'role' => 'required|in:super_admin,safari_consultant,content_editor',
            'password' => 'required|string|min:12',
        ]);
        if ($validator->fails()) {
            $this->error($validator->errors()->first());
            return self::FAILURE;
        }
        $user = User::firstOrNew(['email' => $email]);
        $user->name = $user->name ?: ($this->ask('Staff name') ?: $email);
        $user->password = Hash::make($password);
        $user->role = $role;
        $user->save();
        DB::table('admin_tokens')->where('user_id', $user->id)->delete();
        $this->info('Staff account saved; previous sessions revoked.');
        return self::SUCCESS;
    }
}
