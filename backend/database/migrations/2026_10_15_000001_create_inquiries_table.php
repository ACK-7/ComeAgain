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
        Schema::create('inquiries', function (Blueprint $table) {
            $table->string('id', 64)->primary();
            $table->string('client_name');
            $table->string('email')->index();
            $table->string('phone')->nullable();
            $table->string('country')->nullable();
            $table->string('source')->default('contact_form');
            $table->string('package_interest')->nullable();
            $table->date('travel_date')->nullable();
            $table->integer('duration_days')->nullable();
            $table->integer('travelers_count')->default(1);
            $table->string('estimated_budget')->nullable();
            $table->string('status')->default('new_lead')->index();
            $table->text('message')->nullable();
            $table->json('notes')->nullable();
            $table->string('assigned_to')->nullable();
            $table->timestamps();

            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};
