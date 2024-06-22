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
        Schema::create('prescripteurs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->unique();
            $table->enum('type_utilisateur', ['client', 'donneur_dordre'])->default('client');
            $table->string('denomination_sociale');
            $table->enum('civilite', ['Mr', 'Mme', 'Maitre']);
            $table->string('nom');
            $table->string('prenom1');
            $table->string('prenom2')->nullable();
            $table->string('prenom3')->nullable();
            $table->enum('fonction', ['avocat', 'function2', 'function3']);
            $table->string('adresse');
            $table->string('telephone', 20);
            $table->string('fix',20);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prescripteurs');
    }
};
