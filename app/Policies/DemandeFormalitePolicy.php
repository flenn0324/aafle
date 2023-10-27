<?php

namespace App\Policies;

use App\Models\DemandeFormalite;
use App\Models\Prescripteur;
use App\Models\Societe;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Auth\Access\Response;

class DemandeFormalitePolicy
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
    public function view(User $user, DemandeFormalite $demandeFormalite): Response
    {
        $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();

        if (in_array($demandeFormalite->societe_id, $societeIds)) {
            return Response::allow();
        } else {
            return Response::denyWithStatus(404);
        }
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); 
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
        if($societeIds!= null)
        {
            return Response::allow();
        }
        return Response::denyWithStatus(400);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, DemandeFormalite $demandeFormalite): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); 
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
        if(in_array($demandeFormalite->societe_id, $societeIds))
        {
            return Response::allow();
        }
        return Response::denyWithStatus(400);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, DemandeFormalite $demandeFormalite): Response
    {
        $prescripteurId = Prescripteur::where('user_id', $user->id)->value('id'); 
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
        if(in_array($demandeFormalite->societe_id, $societeIds))
        {
            return Response::allow();
        }
        return Response::denyWithStatus(400);
    }

    /**
     * Determine whether the user can restore the model.
     */

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, DemandeFormalite $demandeFormalite): Response
    {
        return $user->isAdmin()
            ? Response::allow()
            : Response::denyWithStatus(404);
    }
}
