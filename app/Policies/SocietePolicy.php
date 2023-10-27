<?php

namespace App\Policies;

use App\Models\Prescripteur;
use App\Models\Societe;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Auth\Access\Response;

class SocietePolicy
{
    use HttpResponses;
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
    public function viewAny(User $user): Response
    {
        return $user->isAdmin()
            ? Response::allow()
            : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the prescripteur can view the model.
     */
    public function view(User $user, Societe $societe): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); // Récupère l'ID du prescripteur lié à l'utilisateur

        return $prescripteurId === $societe->prescripteur->id
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the prescripteur can create models.
     */
    public function create(User $user): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); // Récupère l'ID du prescripteur lié à l'utilisateur
        if($prescripteurId!== null)
        {
            return Response::allow();
        }
        else{
            return Response::denyWithStatus(400);
        }
    }

    /**
     * Determine whether the prescripteur can update the model.
     */
    public function update(User $user, Societe $societe): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); // Récupère l'ID du prescripteur lié à l'utilisateur

        return $prescripteurId === $societe->prescripteur_id 
                ? Response::allow()
                : Response::denyWithStatus(404);
    }

    /**
     * Determine whether the prescripteur can delete the model.
     */
    public function delete(User $user, Societe $societe): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); // Récupère l'ID du prescripteur lié à l'utilisateur

        return $prescripteurId === $societe->prescripteur_id 
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
