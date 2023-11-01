<?php

use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('verified', function (){
    return "email verified";
 })->name('verify');
 
 Route::get('averified', function (){
     return "email already verified";
 })->name('already');
 
 Route::get('/password/reset', function (){
    return "password reset form";
 })->name('password.reset');

