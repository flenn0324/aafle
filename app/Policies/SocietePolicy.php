<?php

namespace App\Policies;

use App\Models\Prescripteur;
use App\Models\Societe;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SocietePolicy
{
    public function before(User $user): bool|null
    {
        if ($user->isAdmin()) {
            return true;
        }
 
        return null;
    }
    /**
     * Determine whether the prescripteur can view any models.
     */
    public function viewAny(Prescripteur $prescripteur): Response
    {
        return $prescripteur->isAdmin()
            ? Response::allow()
            : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the prescripteur can view the model.
     */
    public function view(Prescripteur $prescripteur, Societe $societe): Response
    {
        return $prescripteur === $societe->prescripteur
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the prescripteur can create models.
     */
    public function create(Prescripteur $prescripteur): bool
    {
        return true;
    }

    /**
     * Determine whether the prescripteur can update the model.
     */
    public function update(Prescripteur $prescripteur, Societe $societe): Response
    {
        return $prescripteur->id === $societe->prescripteur_id 
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the prescripteur can delete the model.
     */
    public function delete(Prescripteur $prescripteur, Societe $societe): Response
    {
        return $prescripteur->id === $societe->prescripteur_id 
                ? Response::allow()
                : Response::denyWithStatus(404);
    }


    /**
     * Determine whether the prescripteur can permanently delete the model.
     */
    public function forceDelete(User $user, Societe $societe): Response
    {
        return $user->isAdmin()
                ? Response::allow()
                : Response::denyWithStatus(404);
    }
}
