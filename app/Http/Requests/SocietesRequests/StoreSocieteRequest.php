<?php

namespace App\Http\Requests\SocietesRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSocieteRequest extends FormRequest
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
            'siren' => ['required', 'string', 'max:255'],
            'greffe' => ['required', 'string', 'max:255'],
            'forme_sociale' => ['required', 'string', 'max:255'],
            'adresse' => ['required', 'string', 'max:255'],
            'denomination' => ['required', 'string', 'max:255'],
            'objet_sociale' => ['required', 'string', 'max:255'],
            'date' => ['required'],
            'duree' => ['required', 'integer'],
            'capital_social' => ['required', 'string', 'max:255'],
            'exercice_social' => ['required', 'string', 'max:255'],
            'sigle' => ['required', 'string', 'max:255'],
        ];
    }
}
