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

Route::get('verify/{id}/{hash}', [AuthController::class, 'verify'])->middleware(['signed', 'throttle:6,1'])->name('verification.verify');
// Resend link to verify email
Route::post('verify/resend', [AuthController::class, 'resend'])->middleware(['auth:api', 'throttle:6,1'])->name('verification.send');
// Forgot Password
Route::post('/password/forgot', [AuthController::class, 'forgot']);
// Reset Password
Route::post('/password/reset', [AuthController::class, 'reset']);

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