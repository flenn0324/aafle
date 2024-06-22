<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PrescripteurResource extends JsonResource
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
                'prenom1' => $this->prenom1,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
                'user_id' => $this->user_id,
                'type_utilisateur' => $this->type_utilisateur,
                'denomination_sociale' => $this->denomination_sociale,
                'civilite' => $this->civilite,
                'prenom2' => $this->prenom2,
                'prenom3' => $this->prenom3,
                'fonction' => $this->fonction,
                'adresse' => $this->adresse,
                'telephone' => $this->telephone,
                'fix' => $this->fix,
            ],
            'relationships' => [
                'id' => $this->user->id,
                'user_name' => $this->user->name,
                'user_email' => $this->user->email,
            ]
        ];
    }
}
