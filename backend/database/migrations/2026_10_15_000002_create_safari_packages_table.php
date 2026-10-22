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
        Schema::create('safari_packages', function (Blueprint $table) {
            $table->string('id', 64)->primary();
            $table->string('slug', 191)->unique();
            $table->string('title');
            $table->string('category', 100)->index();
            $table->unsignedInteger('duration_days')->default(1);
            $table->unsignedInteger('duration_nights')->default(0);
            $table->string('price', 50)->default('Contact for quote');
            $table->decimal('price_usd', 10, 2)->default(0.00);
            $table->unsignedBigInteger('price_ugx')->nullable();
            $table->string('per', 50)->default('1 person');
            $table->json('wildlife')->nullable();
            $table->json('highlights')->nullable();
            $table->text('image')->nullable();
            $table->boolean('featured')->default(false)->index();
            $table->string('status', 30)->default('published')->index();
            $table->json('details')->nullable();
            $table->integer('sort_order')->default(0)->index();
            $table->timestamps();

            // Composite indexes for rapid filtering
            $table->index(['category', 'status']);
            $table->index(['featured', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('safari_packages');
    }
};
