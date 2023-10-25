<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AppelOffresController;
use App\Http\Controllers\DemandeFormaliteController;
use App\Http\Controllers\DirigeantController;
use App\Http\Controllers\EtablisementController;
use App\Http\Controllers\FormaliteController;
use App\Http\Controllers\PrescripteursController;
use App\Http\Controllers\RdvController;
use App\Http\Controllers\SocieteController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//Public routes

Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);

// Protected routes 
Route::group(['middleware'=> ['auth:sanctum']],function() {
    Route::post('/logout',[AuthController::class,'logout']);
    Route::resource('/appeloffres',AppelOffresController::class);
    Route::resource('/prescripteurs',PrescripteursController::class);
    Route::resource('/societes',SocieteController::class);
    Route::resource('/etablisements',EtablisementController::class);
    Route::resource('/dirigeants',DirigeantController::class);
    Route::resource('/formalites',FormaliteController::class);
    Route::resource('/demandeformalites',DemandeFormaliteController::class);
    Route::resource('/rdvs',RdvController::class);
});