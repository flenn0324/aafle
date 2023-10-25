<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DemandeFormaliteResource extends JsonResource
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
                'type' => $this->type,
                'message' => $this->message,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'relationships' => [
                'id_societe' => $this->societe->id,
                'societe_siren' => $this->societe->siren,
                'societe_greffe' => $this->societe->greffe,
                'id_formalite' => $this->formalite->id,
                'formalite_titre' => $this->formalite->titre,
                'formalite_description' => $this->formalite->description,
            ]
        ];
    }
}
