<?php

namespace App\Http\Requests\DirigeantsRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDirigeantRequest extends FormRequest
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
            'nom' => ['required','string','max:255'],
            'prenom' => ['required','string','max:255'],
            'societe_id' => ['required', 'exists:societes,id'],
        ];
    }
}
