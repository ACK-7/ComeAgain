<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class StaffController extends Controller
{
    public function index()
    {
        return response()->json(['success' => true, 'data' => User::whereNotNull('role')->get(['id', 'name', 'email', 'role'])]);
    }

    public function save(Request $request, ?int $id = null)
    {
        if (is_string($request->input('email'))) $request->merge(['email' => strtolower(trim($request->input('email')))]);
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($id)],
            'role' => 'required|in:super_admin,safari_consultant,content_editor',
            'password' => ($id ? 'nullable' : 'required').'|string|min:12|max:1024',
        ]);
        $user = DB::transaction(function () use ($id, $data) {
            $admins = User::where('role', 'super_admin')->lockForUpdate()->get();
            $user = $id ? User::findOrFail($id) : new User;
            abort_if($user->role === 'super_admin' && $data['role'] !== 'super_admin' && $admins->count() <= 1, 422, 'Keep at least one super administrator.');
            $user->name = $data['name']; $user->email = strtolower($data['email']); $user->role = $data['role'];
            if (!empty($data['password'])) $user->password = Hash::make($data['password']);
            $user->save();
            DB::table('admin_tokens')->where('user_id', $user->id)->delete();
            return $user;
        });
        return response()->json(['success' => true, 'data' => $user->only('id', 'name', 'email', 'role')]);
    }

    public function destroy(Request $request, int $id)
    {
        abort_if((int) $request->user()->id === $id, 422, 'You cannot remove your own access.');
        DB::transaction(function () use ($id) {
            $admins = User::where('role', 'super_admin')->lockForUpdate()->get();
            $user = User::findOrFail($id);
            abort_if($user->role === 'super_admin' && $admins->count() <= 1, 422, 'Keep at least one super administrator.');
            // Retain the user record for future audit references, but revoke all access.
            $user->role = null; $user->save();
            DB::table('admin_tokens')->where('user_id', $id)->delete();
        });
        return response()->json(['success' => true]);
    }
}
