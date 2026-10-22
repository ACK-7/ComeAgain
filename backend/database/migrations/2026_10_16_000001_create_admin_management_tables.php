<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->nullable();
        });
        Schema::create('admin_tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('token_hash', 64)->unique();
            $table->timestamp('expires_at')->index();
        });
        Schema::create('managed_content', function (Blueprint $table) {
            $table->id();
            $table->string('kind', 20);
            $table->string('key', 191);
            $table->json('data');
            $table->timestamps();
            $table->unique(['kind', 'key']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('managed_content');
        Schema::dropIfExists('admin_tokens');
        Schema::table('users', fn (Blueprint $table) => $table->dropColumn('role'));
    }
};
