<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demandeformalite extends Model
{
    use HasFactory;

    protected $guarded = [];



    public function societe()
    {
        return $this->belongsTo(Societe::class);
    }

    public function formalite()
    {
        return $this->belongsTo(Formalite::class);
    }

    public function rdv()
    {
        return $this->hasOne(Rdv::class);
    }
}
