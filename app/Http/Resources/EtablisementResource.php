<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EtablisementResource extends JsonResource
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
                'modele' => $this->modele,
                'activite' => $this->activite,
                'date_debut' => $this->date_debut,
                'adresse' => $this->adresse,
                'nom_commercial' => $this->nom_commercial,
                'enseigne' => $this->enseigne,
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
