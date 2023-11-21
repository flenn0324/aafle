<?php

namespace App\Http\Requests\AppeloffresRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppeloffreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'prescripteur_id' => ['required', 'exists:prescripteurs,id'],
            'type' => ['required', 'in:Annonce,Formalite'],
            'nombre_societes' => ['required'],
            'localisation' => ['required', 'in:ile de france,france'],
            'prestataire_actuel' => ['required', 'string'],
            'contacter_par' => ['required', 'in:email,téléphone,courrier'],
            'cahier_charge' => ['required', 'string'],
            'commentaire' => ['required', 'string'],
        ];
    }
}
