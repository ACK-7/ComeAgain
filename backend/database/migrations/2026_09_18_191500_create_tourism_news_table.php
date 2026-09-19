<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tourism_news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('summary')->nullable();
            $table->longText('content')->nullable();
            $table->string('category')->default('Wildlife'); // Wildlife, Conservation, Aviation, Travel Advisory, Culture
            $table->string('emoji', 10)->default('🌿');
            $table->string('source_name')->default('Uganda Tourism Wire');
            $table->string('source_url', 1000)->nullable();
            $table->string('image_url', 1000)->nullable();
            $table->dateTime('published_at')->index();
            $table->boolean('is_active')->default(true)->index();
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tourism_news');
    }
};
