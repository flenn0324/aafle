<?php

namespace App\Http\Requests\EtablisementsRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEtablisementRequest extends FormRequest
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
            'modele' => ['required','string','max:255'],
            'activite' => ['required','string','max:255'],
            'societe_id' => ['required', 'exists:societes,id'],
        ];
    }
}
