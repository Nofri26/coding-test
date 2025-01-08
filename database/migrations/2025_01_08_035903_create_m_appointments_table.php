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
        Schema::create('m_appointments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->foreignUuid('creator_id');
            $table->dateTime('start');
            $table->dateTime('end');
            $table->timestamps();

        });

        Schema::create('user_appointments', function (Blueprint $table) {
           $table->foreignUuid('appointment_id');
           $table->foreignUuid('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('m_appointments');
        Schema::dropifExists('user_appointments');
    }
};
