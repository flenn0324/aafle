<?php

namespace App\Policies;

use App\Models\Appeloffre;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class AppeloffrePolicy
{

    public function before(User $user): bool|null
    {
        if ($user->isAdmin()) {
            return true;
        }
 
        return null;
    }
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
    public function view(User $user, Appeloffre $appeloffre): Response
    {
        return $user->id === $appeloffre->user_id 
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
    public function update(User $user, Appeloffre $appeloffre): Response
    {
        return $user->id === $appeloffre->user_id 
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Appeloffre $appeloffre): Response
    {
        return $user->id === $appeloffre->user_id
                ? Response::allow()
                : Response::denyWithStatus(404);
    }


    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Appeloffre $appeloffre): Response
    {
        return $user->isAdmin()
                ? Response::allow()
                : Response::denyWithStatus(404);
    }
}
