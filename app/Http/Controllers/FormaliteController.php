<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormalitesRequests\StoreFormaliteRequest;
use App\Http\Resources\FormaliteResource;
use App\Models\Formalite;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class FormaliteController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.s
     */
    public function index()
    {
        if(Gate::denies('viewAny', Formalite::class))
        {
            return $this->error('','You are not authorized to see  formalites, create prescripteur',403);
        }
        return FormaliteResource::collection(Formalite::all());
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFormaliteRequest $request)
    {
        if(Gate::denies('create', Formalite::class))
        {
            return $this->error('','You are not authorized to create a formalite',403);
        }

        $request->validated($request->all());
        
        $formalite=Formalite::create([
            'user_id' => User::where('id', auth()->user()->id)->value('id'),
            'titre' => $request->titre,
            'description' => $request->description,
        ]);

        return new FormaliteResource($formalite);
    }

    /**
     * Display the specified resource.
     */
    public function show(Formalite $formalite)
    {
        if (Gate::denies('view', $formalite)) {
            return $this->error('','You are not authorized to see, create a prescripteur',403);
        }
        return new FormaliteResource($formalite);
    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Formalite $formalite)
    {
        if(Gate::denies('update', $formalite))
        {
            return $this->error('','You are not authorized to update this formalite',403);
        }

        $formalite->update($request->all());

        return new FormaliteResource($formalite);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formalite $formalite)
    {
        if(Gate::denies('delete', $formalite))
        {
            return $this->error('','You are not authorized to delete this formalite',403);
        }

        $formalite->delete();

        return response(null,204);
    }
}
