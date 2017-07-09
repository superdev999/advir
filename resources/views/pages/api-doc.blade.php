@extends('layouts.temp')

@section('content')
    <div class="normalheader transition animated fadeIn">
        <div class="hpanel">
            <div class="panel-body">
                <a class="small-header-action" href="">
                    <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </a>
                <div>
                    <h2 class="font-light m-b-xs">
                        API Documentation
                    </h2>
                    <small>Please get view the API implementation guide.</small>
                </div>
                <div id="hbreadcrumb" class="pull-left" style="margin-top:0px;">
                    <ol class="hbreadcrumb breadcrumb">
                        <li><a href="{{url('/dashboard')}}">Dashboard</a></li>
                        <li class="active">
                            <span>API Documentation </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-body">
                        <div>
                            <p>Our API has been built to make use of the excellent Swagger API Editor. If you want to utilize the Swagger editor <a href="http://editor.swagger.io/#/" target="_blank" class="alert-danger">http://editor.swagger.io/#/</a> simply download the .yaml file and import it into Swagger in order to proceed.</p>
                            <p>Make sure to use the correct csv format for each type of list i.e., transactional and broadcast. you can download a sample of either in the sample section below.</p>
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i>Download advir_v1_2016_11_17.yaml</a>
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Transactional CSV Sample</a>
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Broadcast CSV Sample</a>
                                <a style="float:right" href="" class="btn btn-success"><i class="fa fa-external-link"></i> API Helper</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="hpanel">
                    <div class="panel-heading">
                        Transactional Messages
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="step1" class="p-m tab-pane active">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <b>Requirement:</b> Upload .gz file for broadcast messages<br><br>
                                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" >
                                                <b>Target URL:</b><br><br>
                                                <b>Method:</b> Post<br><br>
                                                <b>Headers:</b><br>
                                                content-type: application/x-www-form-urlencoded<br>
                                                authorization: YOUR-API-KEY<br>
                                                <b>FormData:</b><br>
                                                type: Text, name: fromName: YOUR-NAME<br>
                                                type: Text, name:fromEmail: YOUR-EMAIL-ADDRESS<br>
                                                type: File, name: file<br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Download Sample Code / Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-heading">
                        Broadcast Messages
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="step1" class="p-m tab-pane active">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <b>Requirement:</b> Upload .gz file for broadcast messages<br><br>
                                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" >
                                                <b>Target URL:</b><br><br>
                                                <b>Method:</b> Post<br><br>
                                                <b>Headers:</b><br>
                                                content-type: application/x-www-form-urlencoded<br>
                                                authorization: YOUR-API-KEY<br>
                                                <b>FormData:</b><br>
                                                type: Text, name: fromName: YOUR-NAME<br>
                                                type: Text, name:fromEmail: YOUR-EMAIL-ADDRESS<br>
                                                type: File, name: file<br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="display:block;">
                            <p><b>Unsubscribe</b> view sample-boadcast.csv.gz from "Download Sample Code / Files"</p>
                            <p> The ##UnsubscribeLink## string is included in the message, followed by the URL that unsubscribe link clicks should be redirected to.</p>
                            <code>&lt;a href="##UnsubscribeLink##http://www.example.com/"&gt;Unsubscribe&lt;/a&gt;
                            </code>
                            <br>  <br>
                            Here’s a text example:<br>  <br>
                            ##UnsubscribeLink##http://www.example.com/
                            <br><br><a href="" class="btn btn-default"><i class="fa fa-download"></i> Download Sample Code / Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-heading">
                        Unsubscribes
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="step1" class="p-m tab-pane active">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" >
                                                <b>Target URL:</b><br><br>
                                                <b>Method:</b> Get<br><br>
                                                <b>Headers:</b><br>
                                                content-type: application/x-www-form-urlencoded<br>
                                                authorization: YOUR-API-KEY<br>
                                                <b>FormData:</b>
                                                type: Date, name: startDate: (yyyy/mm/dd) i.e., (2016/07/17)<br>
                                                type: Date, name: endDate: (yyyy/mm/dd) i.e., (2016/07/18/)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="display:block;">
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Download Sample Code / Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-heading">
                        Bounces
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="step1" class="p-m tab-pane active">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" >
                                                <b>Target URL:</b><br><br>
                                                <b>Method:</b> Get<br><br>
                                                <b>Headers:</b><br>
                                                content-type: application/x-www-form-urlencoded<br>
                                                authorization: YOUR-API-KEY<br>
                                                <b>FormData:</b>
                                                type: Date, name: startDate: (yyyy/mm/dd) i.e., (2016/07/17)<br>
                                                type: Date, name: endDate: (yyyy/mm/dd) i.e., (2016/07/18/)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="display:block;">
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Download Sample Code / Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-heading">
                        Complaints
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="step1" class="p-m tab-pane active">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" >
                                                <b>Target URL:</b><br><br>
                                                <b>Method:</b> Get<br><br>
                                                <b>Headers:</b><br>
                                                content-type: application/x-www-form-urlencoded<br>
                                                authorization: YOUR-API-KEY<br>
                                                <b>FormData:</b>
                                                type: Date, name: startDate: (yyyy/mm/dd) i.e., (2016/07/17)<br>
                                                type: Date, name: endDate: (yyyy/mm/dd) i.e., (2016/07/18/)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="display:block;">
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Download Sample Code / Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-heading">
                        Non engagement
                    </div>
                    <div class="panel-body">
                        <div class="tab-content">
                            <div id="step1" class="p-m tab-pane active">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" >
                                                <b>Target URL:</b><br><br>
                                                <b>Method:</b> Get<br><br>
                                                <b>Headers:</b><br>
                                                content-type: application/x-www-form-urlencoded<br>
                                                authorization: YOUR-API-KEY<br>
                                                <b>FormData:</b>
                                                type: Date, name: startDate: (yyyy/mm/dd) i.e., (2016/07/17)<br>
                                                type: Date, name: endDate: (yyyy/mm/dd) i.e., (2016/07/18/)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="display:block;">
                                <a href="" class="btn btn-default"><i class="fa fa-download"></i> Download Sample Code / Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection