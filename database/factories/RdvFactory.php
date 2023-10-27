<?php

namespace Database\Factories;

use App\Models\DemandeFormalite;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rdv>
 */
class RdvFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'demandeformalite_id' => DemandeFormalite::all()->random()->id,
            'type' => $this->faker->sentence(),
            'messagerdv' => $this->faker->sentence(),
        ];
    }
}
