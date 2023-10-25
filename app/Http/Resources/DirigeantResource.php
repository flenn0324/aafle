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
