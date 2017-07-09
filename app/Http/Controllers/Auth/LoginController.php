<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Socialite;
use App\User;
use Session;
use Validator;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Routing\UrlGenerator;
// use Illuminate\Contracts\Validation\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
//    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email', 'password' => 'required',
        ]);

        if($validator->fails())
        {
            return redirect('/auth/login') 
                ->withErrors($validator)
                ->withInput();
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'verified' => 1], $request->has('remember'))) {
            Session::put('userid', Auth::user()->id);
            Session::put('username', Auth::user()->name);
            Session::put('useremail', Auth::user()->email);
            return redirect()->intended($this->redirectPath());
        } else {
            return redirect()->back()
                ->withInput($request->only('email', 'remember'))
                ->withErrors([
                    'email' => 'The credential does not match our records.',
                ]);
        }
    }

    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

}
