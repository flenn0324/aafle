<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Prescripteur;

class Appeloffre extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function prescripteur()
    {
        return $this->belongsTo(Prescripteur::class);
    }
}
