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
                        Activity
                    </h2>
                    <small>&nbsp;</small>
                </div>
                <div id="hbreadcrumb" class="pull-left" style="margin-top:0px;">
                    <ol class="hbreadcrumb breadcrumb">
                        <li><a href="{{url('/dashboard')}}">Dashboard</a></li>
                        <li class="active">
                            <span>Activity </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="content animate-panel">
            <div class="row">
                <div class="row">
                    <div class="hpanel">
                        <div class="panel-body m-b-sm">
                            <div class="form-group  container alert col-lg-12  alert-danger" role="alert" id="error_div" style="display:none;"></div>
                            <div class="form-group  container alert col-lg-12  alert-success" role="alert" id="success_div" style="display:none;"></div>

                            <form name="filter_frm" id="filter_frm" action="" method="get">

                                Email address: <input type="text" class="form-control" name="list_email" id="list_email" placeholder="please enter the email address..." value=""  data-toggle="tooltip" data-html="true" data-placement="top"  title="" onMouseOver="show_tooltip_activity('list_email');">
                                <br>
                                <input type="submit" class="btn btn-success" id="FilterBtn" value="Filter">
                                <div id="loader1" align="center" class="btn-block"></div>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td><b>Date</b>
                                        <ul  class="dash_date">
                                        </ul>
                                    </td>
                                    <td ><b>Email Address</b>
                                        <ul  class="activity_sub">
                                        </ul>
                                    </td>
                                    <td class="dashboard_col"><b>Message Type</b>
                                        <ul  class="dash_msg">
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
