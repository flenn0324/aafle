<?php

namespace App\Http\Requests\Prescripteurs;

use Illuminate\Foundation\Http\FormRequest;

class StorePrescripteurRequest extends FormRequest
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
            'nom' => ['required', 'string', 'max:255'],
            'prenom1' => ['required', 'string', 'max:255'],
            'type_utilisateur' => ['required', 'string', 'in:client,donneur_dordre'],
            'denomination_sociale' => ['required', 'string', 'max:255'],
            'civilite' => ['required', 'string', 'in:Mr,Mme,Maitre'],
            'fonction' => ['required', 'string', 'in:avocat,function2,function3'],
            'adresse' => ['required', 'string', 'max:255'],
            'telephone' => ['required', 'numeric'], // Assuming a maximum length of 20
            'fix' => ['required', 'numeric'], // Assuming a maximum length of 20
        ];
    }
}
