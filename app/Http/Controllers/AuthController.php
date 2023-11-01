<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\ForgotPasswordRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\AuthRequests\StoreUserRequest;
use App\Http\Requests\AuthRequests\LoginUserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    use HttpResponses;


    public function login(LoginUserRequest $request)
    {
        $request->validated($request->all());

        if(!Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        {
            return $this->error('','Credentials do not match',401);
        }

        $user = User::where('email',$request->email)->first();

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('Api Token of ' . $user->name)->plainTextToken
        ]);
    }

    public function register(StoreUserRequest $request)
    {
        $request->validated($request->all());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        event(new Registered($user));

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
        ]);
    }

    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();

        return $this->success([
            'message' => 'u have succesfully logout'
        ]);
    }

    /**
     * Send the user a password reset email.
     *
     * @return JsonResponse
     */
    public function forgot(ForgotPasswordRequest $forgotPasswordRequest)
    {
        $forgotPasswordRequest->validated($forgotPasswordRequest->all());

        $response = Password::sendResetLink($forgotPasswordRequest->only('email'));
        switch ($response) {
            case Password::RESET_LINK_SENT:
                return $this->success('', trans($response), 200);
            case Password::INVALID_USER:
                return $this->error('', trans($response), 400);
        }
    }

    /**
     * Send the user a verification email.
     *
     * @return RedirectResponse
     */
    public function verify(Request $request)
    {
        $user = User::find($request->route('id'));

        if ($user->hasVerifiedEmail()) {
            return redirect(route('already'));
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return redirect(route('verify'));
    }

     /**
     * Resend the user a verification email.
     *
     * @return RedirectResponse
     */
    public function resend(Request $request){
        $request->user()->sendEmailVerificationNotification();
        return back()->with('message', 'Verification link sent!');
    }

    /**
     * Send the user a password reset email.
     *
     * @return JsonResponse
     */
    public function reset(ResetPasswordRequest $resetPasswordRequest){
        $credentials = request()->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);

        $status = Password::reset($credentials, function ($user, $password) {
            $user->password = Hash::make($password);
            $user->save();
        });

        if ($status == Password::INVALID_TOKEN) {
            return $this->error('', "Invalid token", 400);
        }

        return $this->success('', "Password has been successfully changed.");
    }

}
