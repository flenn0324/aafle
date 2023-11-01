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
        Schema::create('rdvs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('demandeformalite_id');
            $table->date('date')->nullable();
            $table->time('heure')->nullable();
            $table->string('objet')->nullable();
            $table->string('message')->nullable();
            $table->string('duree_rdv')->nullable();
            $table->foreign('demandeformalite_id')->references('id')->on('demandeformalites')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rdvs');
    }
};
