<?php

namespace App\Http\Controllers;

use App\Http\Requests\EtablisementsRequests\StoreEtablisementRequest;
use App\Http\Resources\EtablisementResource;
use App\Models\Etablisement;
use App\Models\Prescripteur;
use App\Models\Societe;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class EtablisementController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role === 'admin') {
            return EtablisementResource::collection(Etablisement::all());
        } else {
            $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
            $societeId = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();
            return EtablisementResource::collection(Etablisement::whereIn('societe_id', $societeId)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEtablisementRequest $request)
    {
        if (Gate::denies('create', Etablisement::class)) {
            return $this->error('', 'You are not authorized to create this etablisement', 403);
        }

        $request->validated($request->all());

        $prescripteurId = Prescripteur::where('user_id', auth()->user()->id)->value('id');
        $societeIds = Societe::where('prescripteur_id', $prescripteurId)->pluck('id')->toArray();

        if (in_array($request->societe_id, $societeIds)) {
            $etablisement = Etablisement::create([
                'societe_id' => $request->societe_id,
                'modele' => $request->modele,
                'activite' => $request->activite,
                'date_debut' => $request->date_debut,
                'adresse' => $request->adresse,
                'nom_commercial' => $request->nom_commercial,
                'enseigne' => $request->enseigne,
            ]);
            return new EtablisementResource($etablisement);
        } else {
            return $this->error('', 'You are not authorized to create an etablisement for another societe', 403);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Etablisement $etablisement)
    {
        if (Gate::denies('view', $etablisement)) {
            return $this->error('', 'You are not authorized to see', 403);
        }
        return new EtablisementResource($etablisement);
    }

    /**
     * Show the form for editing the specified resource.
     */


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Etablisement $etablisement)
    {
        if (Gate::denies('update', $etablisement)) {
            return $this->error('', 'You are not authorized to update this', 403);
        }

        $etablisement->update($request->all());

        return new EtablisementResource($etablisement);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etablisement $etablisement)
    {
        if (Gate::denies('delete', $etablisement)) {
            return $this->error('', 'You are not authorized to delete this etablisement, its not urs !', 403);
        }

        $etablisement->delete();

        return response(null, 204);
    }
}
