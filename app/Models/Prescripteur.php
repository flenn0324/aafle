<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescripteur extends Model
{
    use HasFactory;

    protected $fillable=[
        'user_id','nom','prenom'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function appeloffres()
    {
        return $this->hasMany(Appeloffre::class);
    }

    public function societes()
    {
        return $this->hasMany(Societe::class);
    }
}
