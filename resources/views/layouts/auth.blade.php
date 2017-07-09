<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') | Advir</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet"
          type="text/css"/>
    <link href="/dash_assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="/dash_assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="/dash_assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="/dash_assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
    <link href="/dash_assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="/dash_assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css"/>
    <link href="/dash_assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL PLUGINS -->
    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="/dash_assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css"/>
    <link href="/dash_assets/global/css/plugins.min.css" rel="stylesheet" type="text/css"/>
    <!-- END THEME GLOBAL STYLES -->
    @stack('css')
    <link rel="icon" type="image/png" sizes="16x16" href="/images/advir-icon.png">
</head>

<body class="login"
      style="background: url('/images/signup/back_tile.jpg') repeat 50% 0; background-size: 168px 224px;">
<a href="{{url('/')}}" style="position:absolute;left:20%;top:10px"><< Home</a>
<!-- BEGIN LOGO -->
<div class="logo">
    <a href="{{url('/')}}">
        {{--<img src="/images/advir.png" alt=""/>--}}
    </a>
</div>
<!-- END LOGO -->
<!-- BEGIN LOGIN -->

@yield('content')

<!-- END LOGIN -->
<!-- BEGIN COPYRIGHT -->
<div class="copyright"> 2017 &copy; Advir - Subscription.</div>
<!-- END COPYRIGHT -->
<!--[if lt IE 9]>
<script src="/dash_assets/global/plugins/respond.min.js"></script>
<script src="/dash_assets/global/plugins/excanvas.min.js"></script>
<![endif]-->
<!-- BEGIN CORE PLUGINS -->
<script src="/dash_assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/js.cookie.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"
        type="text/javascript"></script>
<script src="/dash_assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="/dash_assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/jquery-validation/js/additional-methods.min.js"
        type="text/javascript"></script>
<script src="/dash_assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
<script src="/dash_assets/global/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN THEME GLOBAL SCRIPTS -->
<script src="/dash_assets/global/scripts/app.min.js" type="text/javascript"></script>
<!-- END THEME GLOBAL SCRIPTS -->
@stack('script')
<!-- END THEME LAYOUT SCRIPTS -->
<script src="/js/auth/auth.js" type="text/javascript"></script>

</body>
</html>