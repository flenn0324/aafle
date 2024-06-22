<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Formalite>
 */
class FormaliteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::where('role', 'admin')->inRandomOrder()->first();

        if (!$user) {
            throw new \Exception("No user with the 'admin' role found.");
        }

        return [
            'user_id' => $user->id,
            'titre' => $this->faker->unique()->sentence(),
            'description' => $this->faker->text(),
    ];
    }
}
