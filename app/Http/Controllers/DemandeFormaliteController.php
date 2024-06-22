<?php

namespace App\Http\Controllers;

use App\Http\Requests\DemandesFormalitesRequests\StoreDemandeFormaliteRequest;
use App\Http\Resources\DemandeFormaliteResource;
use App\Models\Demandeformalite;
use App\Models\Formalite;
use App\Models\Prescripteur;
use App\Models\Societe;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class DemandeFormaliteController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role==='admin') {
            return DemandeFormaliteResource::collection(Demandeformalite::all());
        } else {
            $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
            $societeId = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
            return DemandeFormaliteResource::collection(Demandeformalite::whereIn('societe_id', $societeId)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDemandeFormaliteRequest $request)
    {
        if(Gate::denies('create', Demandeformalite::class))
        {
            return $this->error('','You are not authorized to create this demande, u dont have a societe',403);
        }

        $request->validated($request->all());

        $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id'); 
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();

        if (in_array($request->societe_id, $societeIds))
        {
            $demandeformalite=Demandeformalite::create([
                'formalite_id' => $request->formalite_id,
                'societe_id' => $request->societe_id,
                'type' => $request->type,
                'message' => $request->message,
            ]);
            return new DemandeFormaliteResource($demandeformalite);
        }
        else{
            return $this->error('','You are not authorized to create demande formalite, formalite existe pas ou vous avez pas encore de societe',403);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Demandeformalite $demandeFormalite)
    {
        if (Gate::denies('view', $demandeFormalite)) {
            return $this->error('','You are not authorized to see',403);
        }
        
        return new DemandeFormaliteResource($demandeFormalite);
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Demandeformalite $demandeFormalite)
    {
        if(Gate::denies('update', $demandeFormalite))
        {
            return $this->error('','You are not authorized to update this demande, its not urs !',403);
        }

        $demandeFormalite->update($request->all());

        return new DemandeFormaliteResource($demandeFormalite);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demandeformalite $demandeFormalite)
    {
        if(Gate::denies('delete', $demandeFormalite))
        {
            return $this->error('','You are not authorized to delete this demande, its not urs !',403);
        }

        $demandeFormalite->delete();

        return response(null,204);
    }
}
