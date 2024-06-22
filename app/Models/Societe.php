<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Societe extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function prescripteur()
    {
        return $this->belongsTo(Prescripteur::class);
    }

    public function etablisements()
    {
        return $this->hasMany(Etablisement::class);
    }

    public function dirigeants()
    {
        return $this->hasMany(Dirigeant::class);
    }

    public function demandesformalites()
    {
        return $this->hasMany(DemandeFormalite::class);
    }
}
