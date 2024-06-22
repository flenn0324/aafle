<?php

namespace Database\Factories;

use App\Models\Societe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dirigeant>
 */
class DirigeantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'societe_id' => Societe::all()->random()->id,
            'nom' => $this->faker->name(),
            'prenom' => $this->faker->name(),
        ];
    }
}
