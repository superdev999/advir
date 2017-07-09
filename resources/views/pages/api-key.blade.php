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
                        API Key
                    </h2>
                    <small>Your unique API key to access Advir.</small>
                </div>
                <div id="hbreadcrumb" class="pull-left" style="margin-top:0px;">
                    <ol class="hbreadcrumb breadcrumb">
                        <li><a href="{{url('/dashboard')}}">Dashboard</a></li>
                        <li class="active">
                            <span>API Key</span>
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
                    <div class="panel-heading">
                        API Key
                    </div>
                    <div class="panel-body">
                        <form action="" id="apiForm1" name="apiForm" method="post">
                            <div class="tab-content">
                                <div id="step1" class="p-m tab-pane active">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="row">
                                                <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                                                <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div"></div><div class="form-group col-lg-12 ">
                                                    {{--<input type="button" class="btn btn-success" id="apiBtn" onClick="api_validate();" value="Generate API Key">--}}
                                                    <div id="loader1" align="center" class="btn-block"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <p style="display:block;">
                                This is your unique API Key. You (or your developers) will need this to access your Advir account programmatically and push or pull information to and from your account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection