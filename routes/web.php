<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/blog', function () {
    return view('blog')->with('page', 'blog');
});

Route::get('/thank', 'MainController@showThankPage');

Route::get('/home', function () {
    return Redirect::to('/dashboard');
});

//-----------  Authentication management -----------------//
Route::group(['prefix' => 'auth'], function () {
    Route::get('login', function () {
        return view('auth/sign')->with('page', 'login');
    });

    Route::get('signup', function () {
        return view('auth/sign')->with('page', 'signup');
    });

    Route::get('reset', function () {
        return view('auth/sign')->with('page', 'reset');
    });

    Route::get('welcome', function () {
        return view('auth/sign')->with('page', 'welcome');
    });

    Route::post('register', 'Auth\RegisterController@register');
    Route::post('login', 'Auth\LoginController@login');
    Route::get('logout', 'Auth\LoginController@logout');
});

Route::group(['middleware' => ['emailverify']], function () {
    Route::get('/', function () {
        return Redirect::to('/dashboard');
    });
    Route::get('/dashboard', 'DashboardController@showDashboardPage');
});

Route::get('/', 'MainController@showLandingPage');


