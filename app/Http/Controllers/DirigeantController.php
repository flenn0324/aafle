<?php

namespace App\Http\Controllers;

use App\Http\Requests\DirigeantsRequests\StoreDirigeantRequest;
use App\Http\Resources\DirigeantResource;
use App\Models\Dirigeant;
use App\Models\Prescripteur;
use App\Models\Societe;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class DirigeantController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role === 'admin') {
            return DirigeantResource::collection(Dirigeant::all());
        } else {
            $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
            $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
            return DirigeantResource::collection(Dirigeant::whereIn('societe_id', $societeIds)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDirigeantRequest $request)
    {
        if (Gate::denies('create', Dirigeant::class)) {
            return $this->error('', 'You are not authorized to create this Dirigeant', 403);
        }

        $request->validated($request->all());

        $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();

        if (in_array($request->societe_id, $societeIds)) {
            $dirigeant = Dirigeant::create([
                'societe_id' => $request->societe_id,
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'date_naissance' => $request->date_naissance,
                'adresse' => $request->adresse,
                'nationalite' => $request->nationalite,
                'departement_naissance' => $request->departement_naissance,
                'ville_naissance' => $request->ville_naissance,
                'pays_naissance' => $request->pays_naissance,
                'qualite' => $request->qualite,
                'ancienne_qualite' => $request->ancienne_qualite,
                'date_modification' => $request->date_modification,
            ]);
            return new DirigeantResource($dirigeant);
        } else {
            return $this->error('', 'You are not authorized to create an Dirigeant for another societe', 403);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Dirigeant $dirigeant)
    {
        if (Gate::denies('view', $dirigeant)) {
            return $this->error('', 'You are not authorized to see', 403);
        }
        return new DirigeantResource($dirigeant);
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dirigeant $dirigeant)
    {
        if (Gate::denies('update', $dirigeant)) {
            return $this->error('', 'You are not authorized to update this', 403);
        }

        $dirigeant->update($request->all());

        return new DirigeantResource($dirigeant);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dirigeant $dirigeant)
    {
        if (Gate::denies('delete', $dirigeant)) {
            return $this->error('', 'You are not authorized to delete this dirigeant, its not urs !', 403);
        }

        $dirigeant->delete();

        return response(null, 204);
    }
}
