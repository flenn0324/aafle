<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppeloffresRequests\StoreAppeloffreRequest;
use App\Http\Requests\AppeloffresRequests\UpdateAppeloffreRequest;
use App\Http\Resources\AppeloffresResource;
use App\Models\Appeloffre;
use App\Models\Prescripteur;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use App\Policies\AppeloffrePolicy;

class AppelOffresController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role === 'admin') {
            return AppeloffresResource::collection(Appeloffre::all());
        } else {
            $prescripteurId = Prescripteur::where('user_id', Auth::user()->id)->value('id');
            return AppeloffresResource::collection(Appeloffre::where('prescripteur_id', $prescripteurId)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    /*public function create()
    {
        //NO NEED SINCE WE WORK WITH API
    }*/

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppeloffreRequest $request)
    {
        $this->authorize('create', Appeloffre::class);

        $request->validated($request->all());

        $Appeloffre = Appeloffre::create([
            'prescripteur_id' => Auth::user()->id,
            'type' => $request->type,
            'nombre_societes' => $request->nombre_societes,
            'localisation' => $request->localisation,
            'prestataire_actuel' => $request->prestataire_actuel,
            'contacter_par' => $request->contacter_par,
            'cahier_charge' => $request->cahier_charge,
            'commentaire' => $request->commentaire,
        ]);

        return new AppeloffresResource($Appeloffre);
    }

    /**
     * Display the specified resource.
     */
    public function show(Appeloffre $Appeloffre)
    {
        if (Gate::denies('view', $Appeloffre)) {
            return $this->error('', 'You are not authorized to see', 403);
        }
        return new AppeloffresResource($Appeloffre);
    }

    /**
     * Show the form for editing the specified resource.
     */
    /*public function edit(string $id)
    {
        //No need since API
    }*/

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppeloffreRequest $request, Appeloffre $Appeloffre)
    {
        if (Gate::denies('update', $Appeloffre)) {
            return $this->error('', 'You are not authorized to update this', 403);
        }

        $Appeloffre->update($request->all());

        return new AppeloffresResource($Appeloffre);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appeloffre $Appeloffre)
    {
        if (Gate::denies('delete', $Appeloffre)) {
            return $this->error('', 'You are not authorized to delete this', 403);
        }

        $Appeloffre->delete();

        return response(null, 204);
    }
}
