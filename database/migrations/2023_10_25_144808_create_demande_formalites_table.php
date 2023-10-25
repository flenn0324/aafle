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
        Schema::create('demande_formalites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('societe_id');
            $table->unsignedBigInteger('formalite_id');
            $table->string('type');
            $table->string('message');
            $table->foreign('societe_id')->references('id')->on('societes')->onDelete('cascade');
            $table->foreign('formalite_id')->references('id')->on('formalites')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_formalites');
    }
};
