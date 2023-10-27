<?php

namespace App\Http\Controllers;

use App\Http\Requests\Prescripteurs\StorePrescripteurRequest;
use App\Http\Requests\Prescripteurs\UpdatePrescripteurRequest;
use App\Http\Resources\PrescripteurResource;
use App\Models\Prescripteur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use App\Traits\HttpResponses;

class PrescripteursController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role==='admin') {
            return PrescripteurResource::collection(Prescripteur::all());
        } else {
            return PrescripteurResource::collection(Prescripteur::where('user_id', auth()->id)->get());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    /*public function create()
    {
        //
    }*/

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePrescripteurRequest $request)
    {
        if (Gate::denies('create', Prescripteur::class)) {
            return $this->error('','You are not authorized to create a new prescripteur, already have one',403);
        }

        $request->validated($request->all());

        $Prescripteur=Prescripteur::create([
            'user_id' => Auth::user()->id,
            'nom' => $request->nom,
            'prenom' => $request->prenom,
        ]);

        return new PrescripteurResource($Prescripteur);
    }

    /**
     * Display the specified resource.
     */
    public function show(Prescripteur $prescripteur)
    {
        if (Gate::denies('view', $prescripteur)) {
            return $this->error('','You are not authorized to see this prescripteur',403);
        }
        return new PrescripteurResource($prescripteur);
    }

    /**
     * Show the form for editing the specified resource.
     */
    /*public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePrescripteurRequest $request, Prescripteur $prescripteur)
    {
        if(Gate::denies('update', $prescripteur))
        {
            return $this->error('','You are not authorized to update this prescripteur',403);
        }

        $prescripteur->update($request->all());

        return new PrescripteurResource($prescripteur);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prescripteur $prescripteur)
    {
        if(Gate::denies('delete', $prescripteur))
        {
            return $this->error('','You are not authorized to delete this prescripteur',403);
        }

        $prescripteur->delete();

        return response(null,204);
    }
}
