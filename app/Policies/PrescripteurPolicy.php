<?php

namespace App\Policies;

use App\Models\Prescripteur;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PrescripteurPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): Response
    {
        return $user->isAdmin()
            ? Response::allow()
            : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Prescripteur $prescripteur): Response
    {
        return $user->id === $prescripteur->user_id 
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Prescripteur $prescripteur): Response
    {
        return $user->id === $prescripteur->user_id 
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Prescripteur $prescripteur): Response
    {
        return  $user->isAdmin()
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the user can restore the model.
     */
    /*public function restore(User $user, Prescripteur $prescripteur): bool
    {
        //
    }*/

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Prescripteur $prescripteur): Response
    {
        return $user->isAdmin()
                ? Response::allow()
                : Response::denyWithStatus(404);
    }
}
