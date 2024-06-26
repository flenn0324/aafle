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
        Schema::create('societes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prescripteur_id');
            $table->string('siren');
            $table->string('greffe');
            $table->string('forme_sociale');
            $table->string('denomination');
            $table->string('objet_sociale');
            $table->string('adresse');
            $table->date('date');
            $table->integer('duree');
            $table->string('capital_social');
            $table->string('exercice_social');
            $table->string('sigle');
            $table->foreign('prescripteur_id')->references('id')->on('prescripteurs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('societes');
    }
};
