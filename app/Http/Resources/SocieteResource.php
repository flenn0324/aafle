<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SocieteResource extends JsonResource
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
                'siren' => $this->siren,
                'greffe' => $this->greffe,
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
