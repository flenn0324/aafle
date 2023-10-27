<?php

namespace Database\Factories;

use App\Models\Prescripteur;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Societe>
 */
class SocieteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'prescripteur_id' => Prescripteur::all()->random()->id,
            'siren' => $this->faker->unique()->sentence(),
            'greffe' => $this->faker->text(),
        ];
    }
}
