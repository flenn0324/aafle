<?php

namespace App\Http\Requests\DemandesFormalitesRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDemandeFormaliteRequest extends FormRequest
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
            'type' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string'],
            'societe_id' => ['required', 'exists:societes,id'],
            'formalite_id' => ['required', 'exists:formalites,id']
        ];
    }
}
