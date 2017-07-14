<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Aws\Laravel\AwsServiceProvider;
use Illuminate\Support\Facades\App;
use Aws\S3\S3Client;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Config;

class AdvirAdminController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pages.advirGuestAdmin');
    }

    public function UploadImages(Request $request) {
        $image = $request->file;
        $imageFileName = $image->getClientOriginalName();
        $s3 = Storage::disk('s3');
        $filepath = 'public/uploads/guest/'.$imageFileName;
        $s3->put($filepath, file_get_contents($image), 'public');
        return json_encode(array(
            'filename' => $imageFileName
        ));
    }
}
