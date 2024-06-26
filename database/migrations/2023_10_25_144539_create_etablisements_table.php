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
        Schema::create('etablisements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('societe_id')->unique();
            $table->string('modele');
            $table->string('activite');
            $table->date('date_debut');
            $table->string('adresse');
            $table->string('nom_commercial');
            $table->string('enseigne');
            $table->foreign('societe_id')->references('id')->on('societes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etablisements');
    }
};
