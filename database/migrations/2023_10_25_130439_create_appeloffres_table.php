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
        Schema::create('appeloffres', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prescripteur_id');
            $table->enum('type', ['Annonce', 'Formalite']);
            $table->string('nombre_societes')->nullable();
            $table->enum('localisation', ['ile de france', 'france']);
            $table->string('prestataire_actuel');
            $table->enum('contacter_par', ['email', 'téléphone','courrier']);
            $table->string('cahier_charge');
            $table->string('commentaire');
            $table->foreign('prescripteur_id')->references('id')->on('prescripteurs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appeloffres');
    }
};
