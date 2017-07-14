<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Aws\Laravel\AwsServiceProvider;
use Illuminate\Support\Facades\App;
use Aws\S3\S3Client;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Include functions.php
require base_path('includes/functions.php');
//require base_path('includes/aws-sdk/aws-autoloader.php');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/availableObjects', function (Request $request) {
    $user = $request->user();
    $table = isset($request->userName) ?  $user['name'] : "documents2";
    if($user['name'] != "guest") {
        $resources = DB::table($table)->get();
    } else {
        $resources_1 = DB::table('guest')->get();
        $resources_2 = DB::table('guest2')->get();
        $resources['scene_1'] = $resources_1;
        $resources['scene_2'] = $resources_2;
    }
    return response()->json($resources);
})->middleware('auth:api');

Route::get('/availableContent', function (Request $request) {

    $input = Input::all();
    $scene = $input['scene'];
    $user = $request->user();
    $documentDir = isset($user['name']) ? '/'.$user['name'] : "";

    if($documentDir == "/guest") {
        if($scene == "guest_scene_1") {
            $documentDir = "/guest";
        } else if($scene == "guest_scene_2") {
            $documentDir = "/guest2";
        }
    }
    $fileReadDir = "./public/uploads" . $documentDir;

    $bucket = Config::get('filesystems.disks.s3.bucket');
    $region = Config::get('filesystems.disks.s3.region');

    $files = Storage::disk('s3')->allFiles($fileReadDir);
    $prep = 'https://s3.'.$region.'.amazonaws.com/'.$bucket.'/';
    $index = 0;
    $url = null;
    foreach($files as $object)
    {
        $url[$index++] = $prep.$object;
    }
    return response()->json($url);
})->middleware('auth:api');

Route::post('/Unity/advir_isActive', function (Request $request) {
    $objectName = $request->objectName;
    $action = $request->action;
    $isActive = $request->isActive;
    $userName = $request->userName;
    $url = ($request->url != null) && isset($request->url) ? $request->url : "";
    $sceneName = ($request->sceneName != null) && isset($request->sceneName) ? $request->sceneName : "";
    $guest = ($request->guest != null) && isset($request->guest) ? $request->guest : "";

    $table = isset($request->userName) ?  $request->userName : "documents2";

    if($request->guest == "guest" || $request->guest == "guest2") {
        $table = $request->guest;
        $userName = "guest";
    }
    if($request->userName == "yahoo") {
        $table = "guest2";
        $userName = "guest";
    }
    if($request->sceneName == "Room_01_Mobile") {
        $table = "guest2";
        $userName = "guest";
    }
    if(isset($request->objectName) && isset($request->isActive)) {
        if($request->action == "SET") {
            if($request->url == "FROM_UNITY") {
                $existing_url = isset($request->url) ? $request->url : "https://rtbexpress.herokuapp.com/static/img/advir.png";
                $resources = DB::table($table)
                    ->where('objectName', $request->objectName)
                    ->update(['userName' => $userName, 'objectName' => $objectName, 'action' => $action, 'isActive' => $isActive, 'url' => $existing_url])
                    ->first();
            }
            else {
                $resources = "error";
            }
        }
        else if($request->action == "GET") {
            if($request->userName == "yahoo") {
                $table = "guest2";
                $userName = "guest";
            }
            $resources = DB::table($table)
                ->where([
                    ['userName', '=',$userName],['objectName', '=', $request->objectName]
                ])->first();
        }
        else if($request->action == "CREATE") {
            $resources = DB::table($table)
                ->update(['userName' => $userName, 'objectName' => $objectName, 'action' => $action, 'isActive' => $isActive, 'url' => $url])
                ->where([
                    ['userName', '=',$userName],['objectName', '=', $request->objectName]
                ])->first();
        }
        else if($request->action == "PRINT_ALL") {
            $resources = DB::table($table)
                ->where([
                    ['userName', '=',$userName],['objectName', '=', $request->objectName]
                ])->get();
        }
    }
    return response()->json($resources);
})->middleware('auth:api');

Route::post('/Unity/advir_media', function (Request $request) {
    $objectName = $request->objectName;
    $action = $request->action;
    $isActive = $request->isActive;
    $userName = $request->userName;
    $url = ($request->url != null) && isset($request->url) ? $request->url : "";
    $sceneName = ($request->sceneName != null) && isset($request->sceneName) ? $request->sceneName : "";
    $guest = ($request->guest != null) && isset($request->guest) ? $request->guest : "";

    $table = isset($request->userName) ?  $request->userName : "documents2";

    if($request->guest == "guest" || $request->guest == "guest2") {
        $table = $request->guest;
        $userName = "guest";
    }
    if($request->userName == "yahoo") {
        $table = "guest2";
        $userName = "guest";
    }
    if($request->sceneName == "Room_01_Mobile") {
        $table = "guest2";
        $userName = "guest";
    }
    if(isset($request->objectName) && isset($request->action)) {
        if($request->action == "SET" && $request->url != "FROM_UNITY") {
            $resources = DB::table($table)
                ->where('objectName', $request->objectName)
                ->update(['userName' => $userName, 'objectName' => $objectName, 'action' => $action, 'isActive' => $isActive, 'url' => $url])
                ->first();
        }
        else if($request->action == "CREATE") {
            $resources = DB::table($table)
                ->update(['userName' => $userName, 'objectName' => $objectName, 'action' => $action, 'isActive' => $isActive, 'url' => $url])
                ->where([
                    ['userName', '=',$userName],['objectName', '=', $request->objectName]
                ])->first();
        }
        else if($request->action == "PRINT_ALL") {
            $resources = DB::table($table)
                ->where([
                    ['userName', '=',$userName],['objectName', '=', $request->objectName]
                ])->get();
        }
    }
    //Determin Format from URL

    $resources['format'] = "MP4";
    return response()->json($resources);
})->middleware('auth:api');

// API routes
Route::group(['namespace' => 'Api'], function () {
    // Token not required
    Route::post('/auth/authenticate', 'AuthController@postAuthenticate');
});