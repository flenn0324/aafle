<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppeloffresResource extends JsonResource
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
                'prescripteur_id' => $this->prescripteur_id,
                'type' => $this->type,
                'nombre_societes' => $this->nombre_societes,
                'localisation' => $this->localisation,
                'prestataire_actuel' => $this->prestataire_actuel,
                'contacter_par' => $this->contacter_par,
                'cahier_charge' => $this->cahier_charge,
                'commentaire' => $this->commentaire,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'relationships' => [
                'id' => $this->prescripteur->id,
                'prescripteur_nom' => $this->prescripteur->nom,
                'prescripteur_prenom' => $this->prescripteur->prenom,
            ]
        ];
    }
}
