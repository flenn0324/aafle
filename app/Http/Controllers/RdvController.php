<?php

namespace App\Http\Controllers;

use App\Http\Requests\RdvRequests\StoreRdvRequest;
use App\Http\Resources\RdvResource;
use App\Models\DemandeFormalite;
use App\Models\Prescripteur;
use App\Models\Rdv;
use App\Models\Societe;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class RdvController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role==='admin') {
            return RdvResource::collection(Rdv::all());
        } else {
           /* $userId = auth()->user()->id;

       $rdvs = Rdv::select('rdv.*')
               ->join('demandeformalites', 'rdv.demandeformalite_id', '=', 'demandeformalites.id')
               ->join('societes', 'demandeformalites.societe_id', '=', 'societes.id')
               ->join('prescripteurs', 'societes.prescripteur_id', '=', 'prescripteurs.id')
               ->where('prescripteurs.user_id', $userId)
               ->get();*/
            $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
            $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
            $demandeIds = DemandeFormalite::whereIn('societe_id',$societeIds)->pluck('id')->toArray();
            return RdvResource::collection(Rdv::whereIn('demandeformalite_id', $demandeIds)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRdvRequest $request)
    {
        if(Gate::denies('create', Rdv::class))
        {
            return $this->error('','You are not authorized to create this rdv',403);
        }

        $request->validated($request->all());

        $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id'); 
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
        $demandeIds = DemandeFormalite::whereIn('societe_id',$societeIds)->pluck('id')->toArray();
        if (in_array($request->demandeformalite_id, $demandeIds))
        {
            $rdv=Rdv::create([
                'demandeformalite_id' => $request->demandeformalite_id,
                'type' => $request->type,
                'messagerdv' => $request->messagerdv,
            ]);
            return new RdvResource($rdv);
        }
        else{
            return $this->error('','You are not authorized to create rdv, demande formalite existe pas ou vous avez pas encore de societe',403);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Rdv $rdv)
    {
        if (Gate::denies('view', $rdv)) {
            return $this->error('','You are not authorized to see',403);
        }
        return new RdvResource($rdv);
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rdv $rdv)
    {
        if(Gate::denies('update', $rdv))
        {
            return $this->error('','You are not authorized to update this rdv, its not urs !',403);
        }

        $rdv->update($request->all());

        return new RdvResource($rdv);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rdv $rdv)
    {
        if(Gate::denies('delete', $rdv))
        {
            return $this->error('','You are not authorized to delete this rdv, its not urs !',403);
        }

        $rdv->delete();

        return response(null,204);
    }
}
