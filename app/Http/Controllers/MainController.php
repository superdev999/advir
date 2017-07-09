<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Validator;
use Session;
use Auth;

class MainController extends Controller
{

    public function showLandingPage()
    {
         return view('welcome')->with('page', 'welcome');
    }

    public function showThankPage()
    {
        $useremail = Session::get('useremail');
        return view('pages.thank', ['useremail' => Session::get('useremail')]);
    }
}
