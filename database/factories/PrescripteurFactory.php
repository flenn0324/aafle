<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Prescripteur>
 */
class PrescripteurFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory()->unique()->create(),
            'type_utilisateur' => $this->faker->randomElement(['client', 'donneur_dordre']),
            'denomination_sociale' => $this->faker->unique()->sentence(),
            'civilite' => $this->faker->randomElement(['Mr', 'Mme', 'Maitre']),
            'nom' => $this->faker->unique()->sentence(),
            'prenom1' => $this->faker->sentence(),
            'prenom2' => $this->faker->sentence(),
            'prenom3' => $this->faker->sentence(),
            'fonction' => $this->faker->randomElement(['avocat', 'function2', 'function3']),
            'adresse' => $this->faker->address,
            'telephone' => $this->faker->randomNumber(10),
            'fix' => $this->faker->randomNumber(10),
        ];
    }
}
