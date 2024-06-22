<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DirigeantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => (string)$this->id,
            'attributes' => [
                'nom' => $this->nom,
                'prenom' => $this->prenom,
                'date_naissance' => $this->date_naissance,
                'adresse' => $this->adresse,
                'nationalite' => $this->nationalite,
                'departement_naissance' => $this->departement_naissance,
                'ville_naissance' => $this->ville_naissance,
                'pays_naissance' => $this->pays_naissance,
                'qualite' => $this->qualite,
                'ancienne_qualite' => $this->ancienne_qualite,
                'date_modification' => $this->date_modification,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'relationships' => [
                'id' => $this->societe->id,
                'societe_siren' => $this->societe->siren,
                'societe_greffe' => $this->societe->greffe,
            ]
        ];
    }
}
