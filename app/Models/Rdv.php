<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rdv extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function demandeformalite()
    {
        return $this->belongsTo(Demandeformalite::class);
    }
}