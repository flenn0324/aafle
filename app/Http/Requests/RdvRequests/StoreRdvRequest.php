<?php

namespace App\Http\Requests\RdvRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRdvRequest extends FormRequest
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
            'date' => ['nullable','required'],
            'heure' => ['nullable','required'],
            'objet' => ['nullable', 'string'],
            'message' => ['nullable', 'string'],
            'duree_rdv' => ['nullable', 'string'],
            'demandeformalite_id' => ['required', 'exists:demandeformalites,id'],
        ];
    }
}
