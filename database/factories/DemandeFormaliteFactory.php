<?php

namespace Database\Factories;

use App\Models\Formalite;
use App\Models\Societe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DemandeFormalite>
 */
class DemandeFormaliteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    $societe = Societe::all()->random();
    $formalite = Formalite::all()->random();

    return [
        'societe_id' => $societe->id,
        'formalite_id' => $formalite->id,
        'type' => $this->faker->text(),
        'message' => $this->faker->text(),
    ];
}
}
