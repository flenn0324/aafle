<?php

namespace App\Http\Controllers;

use App\Http\Requests\SocietesRequests\StoreSocieteRequest;
use App\Http\Resources\SocieteResource;
use App\Models\Prescripteur;
use App\Models\Societe;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class SocieteController extends Controller
{
    use HttpResponses;
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role==='admin') {
            return SocieteResource::collection(Societe::all());
        } else {
            $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id'); // Récupère l'ID du prescripteur lié à l'utilisateur
            return SocieteResource::collection(Societe::where('prescripteur_id', $prescripteurId)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSocieteRequest $request)
    {
        if(Gate::denies('create', Societe::class))
        {
            return $this->error('','You are not authorized to create this societe',403);
        }

        $request->validated($request->all());
        
        $societe = Societe::create([
            'prescripteur_id' => Prescripteur::where('user_id', auth()->user()->id)->value('id'),
            'siren' => $request->siren,
            'greffe' => $request->greffe,
            'adresse' => $request->adresse,
            'forme_sociale' => $request->forme_sociale,
            'denomination' => $request->denomination,
            'objet_sociale' => $request->objet_sociale,
            'date' => $request->date,
            'duree' => $request->duree,
            'capital_social' => $request->capital_social,
            'exercice_social' => $request->exercice_social,
            'sigle' => $request->sigle,
        ]);

        return new SocieteResource($societe);
    }

    /**
     * Display the specified resource.
     */
    public function show(Societe $societe)
    {
        if (Gate::denies('view', $societe)) {
            return $this->error('','You are not authorized to see',403);
        }
        return new SocieteResource($societe);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Societe $societe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Societe $societe)
    {
        if(Gate::denies('update', $societe))
        {
            return $this->error('','You are not authorized to update this',403);
        }

        $societe->update($request->all());

        return new SocieteResource($societe);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Societe $societe)
    {
        if(Gate::denies('delete', $societe))
        {
            return $this->error('','You are not authorized to delete this',403);
        }

        $societe->delete();

        return response(null,204);
    }
}
