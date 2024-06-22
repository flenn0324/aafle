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
            $table->date('date_naissance');
            $table->string('adresse');
            $table->string('nationalite');
            $table->string('departement_naissance');
            $table->string('ville_naissance');
            $table->string('pays_naissance');
            $table->string('qualite');
            $table->string('ancienne_qualite');
            $table->date('date_modification');
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
