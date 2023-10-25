<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RdvResource extends JsonResource
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
                'message_rdv' => $this->messagerdv,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'relationships' => [
                'id' => $this->demandeformalite->id,
                'demandeformalite_type' => $this->demandeformalite->type,
                'demandeformalite_message' => $this->demandeformalite->message,
            ]
        ];
    }
}
