<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminAccess
{
    public function handle(Request $request, Closure $next, string ...$roles)
    {
        $token = $request->bearerToken();
        $record = $token ? DB::table('admin_tokens')->where('token_hash', hash('sha256', $token))
            ->where('expires_at', '>', now())->first() : null;
        $user = $record ? User::find($record->user_id) : null;
        if (!$user || !in_array($user->role, ['super_admin', 'safari_consultant', 'content_editor'], true)) {
            return response()->json(['message' => 'Please sign in to continue.'], 401);
        }
        if ($roles && $user->role !== 'super_admin' && !in_array($user->role, $roles, true)) {
            return response()->json(['message' => 'Your account cannot perform this action.'], 403);
        }
        $request->setUserResolver(fn () => $user);
        $request->attributes->set('admin_token_id', $record->id);
        return $next($request);
    }
}
