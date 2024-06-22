<?php

namespace App\Policies;

use App\Models\Formalite;
use App\Models\Prescripteur;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FormalitePolicy
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
    public function viewAny(User $user): bool
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id');
        return $prescripteurId !== null;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Formalite $formalite): bool
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id');
        return $prescripteurId !== null;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Formalite $formalite): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Formalite $formalite): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Formalite $formalite): bool
    {
        return false;
    }
}
