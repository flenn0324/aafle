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
        Schema::create('dirigeants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('societe_id');
            $table->string('nom');
            $table->string('prenom');
            $table->foreign('societe_id')->references('id')->on('societes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dirigeants');
    }
};