<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') | Advir</title>

    <!-- Favicon -->
    <!-- <link rel="shortcut png" href="/images/favicon.png"> -->
    <link rel="icon" type="image/png" sizes="16x16" href="/images/advir-icon.png">
    <!-- Web Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic"
          rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:700,400,300" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet" type="text/css">

    <!-- Bootstrap core CSS -->
    <!-- <link href="/bootstrap/css/bootstrap.css" rel="stylesheet"> -->
    <link href="/dash_assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

    <!-- Font Awesome CSS -->
    <link href="/dash_assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

    <!-- Fontello CSS -->
    <link href="/fonts/fontello/css/fontello.css" rel="stylesheet">
    <link href="/dash_assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css"/>
    <link href="/dash_assets/global/css/plugins.min.css" rel="stylesheet" type="text/css"/>
    <!-- END THEME GLOBAL STYLES -->
    <link href="/dash_assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>


    <!-- Plugins -->
    <link href="/plugins/magnific-popup/magnific-popup.css" rel="stylesheet">
    <link href="/plugins/rs-plugin/css/settings.css" rel="stylesheet">
    <link href="/css/animations.css" rel="stylesheet">
    <link href="/plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="/plugins/owl-carousel/owl.transitions.css" rel="stylesheet">
    <link href="/plugins/hover/hover-min.css" rel="stylesheet">
    <link href="/plugins/morphext/morphext.css" rel="stylesheet">

    <link href="/dash_assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css"/>
    <link href="/dash_assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css"/>

    <!-- Bootstrap datepicker plugin -->
    <link rel="stylesheet" href="/plugins/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" href="/plugins/bootstrap-select/bootstrap-select.css"/>


    <script type="text/javascript" src="/plugins/jquery.js"></script>
    <script type="text/javascript" src="/plugins/bootstrap-select/bootstrap-select.js"></script>

    <!-- the project core CSS file -->
    <link href="/css/style_temp.css" rel="stylesheet">


    <!-- Color Scheme (In order to change the color scheme, replace the blue.css with the color scheme that you prefer)-->

    <!-- <link href="/css/skins/vivid_red.css" rel="stylesheet"> -->
    <link href="/css/skins/light_blue.css" rel="stylesheet">
    <!-- <link href="/css/skins/cool_green.css" rel="stylesheet"> -->

    <!-- Custom css -->
    <link href="/css/custom.css" rel="stylesheet">

    <!-- JavaScript files placed at the end of the document so the pages load faster -->
    <!-- Jquery and Bootstap core js files -->
    <script type="text/javascript" src="/plugins/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery-ui.js"></script>
    <script type="text/javascript" src="/bootstrap/js/bootstrap.min.js"></script>

    @stack('asset')

</head>

<!-- body classes -->
<body class="no-trans front-page transparent-header-on page-loader-4">
<!-- scrollToTop -->
<div class="scrollToTop circle"><i class="icon-up-open-big"></i></div>

<!-- page wrapper start -->
<div class="page-wrapper">
    <!-- header-container start -->
    <div class="header-container">
        <!-- header start -->
        <header class="header  fixed full-width  clearfix transparent-header-on">
            <!-- header-right start -->
            <div class="header-right clearfix">
                <!-- main-navigation start -->
                <div class="main-navigation animated with-dropdown-buttons">
                    <!-- navbar start -->
                    <nav class="navbar navbar-default" role="navigation" style="position:relative">
                        <div class="container-fluid">
                            <!-- Toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse"
                                        data-target="#navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <!-- header-left start -->
                                <div class="header-left clearfix" style="margin-left:50px">
                                    <!-- logo -->
                                    <div id="logo" class="logo">
                                        <a href="{{ url('/') }}"><img id="logo_img" src="/images/advir.png"
                                                                      alt="Send13" style="height: 55px;"></a>
                                    </div>
                                </div>
                                <!-- header-left end -->
                            </div>

                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                                <!-- main-menu -->
                                <ul class="nav navbar-nav navbar-right">
                                    <!-- submenu start -->
                                    @if (Auth::check())
                                        <li class="<?php if ($page == "home") echo 'active'; ?>"><a
                                                    href="{{ url('/dashboard') }}">Home</a>
                                        </li>
                                    @else
                                        <li class="<?php if ($page == "home") echo 'active'; ?>"><a
                                                    href="{{ url('/') }}">Home</a>
                                        </li>
                                    @endif
                                <!-- submenu end -->

                                    <!-- submenu start -->
                                    <li class="<?php if ($page == "blog") echo 'active'; ?>"><a
                                                href="{{ url('/blog') }}">Blog</a></li>
                                    <!-- submenu end -->

                                    <!-- submenu start -->
                                    @if (Auth::guest())
                                        <li>
                                            <a href="{{url('/auth/signup')}}">JoinUs</a>
                                        </li>
                                @endif
                                <!-- submenu end -->

                                    <li>
                                        @if (Auth::check())
                                            <a class="dropdown-toggle" data-toggle="dropdown">
                                                @if(file_exists(session('userImageURL')))
                                                    <img src="/{{ session('userImageURL') }}" class="img-circle"
                                                         style="height: 30px; margin: -5px; display: inline-block;">
                                                @else
                                                    <img src="/images/avatar/avatar.png" class="img-circle"
                                                         style="height: 30px; margin: -5px; display: inline-block;">
                                                @endif
                                                <span>&nbsp;&nbsp;{{ session('username') }}</span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="{{url('/auth/logout')}}" onclick="">
                                                        <i class="fa fa-power-off"></i>
                                                        <span>Logout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        @else
                                            <a href="{{ url('/auth/login')}}" style="line-height: 20px;">
                                                <img src="/images/avatar/avatar.png" class="img-circle"
                                                     style="height: 30px; margin: -5px; display: inline-block;">
                                                <span>&nbsp;&nbsp;Login</span>
                                            </a>
                                        @endif
                                    </li>
                                </ul>
                                <!-- main-menu end -->
                            </div>
                        </div>
                    </nav>
                    <!-- navbar end -->
                </div>
                <!-- main-navigation end -->
            </div>
            <!-- header-right end -->
        </header>
        <!-- header end -->
    </div>
    <!-- header-container end -->


@yield('content')


</div>
<!-- page-wrapper end -->


<!-- Modernizr javascript -->
<script type="text/javascript" src="/plugins/modernizr.js"></script>

<!-- Isotope javascript -->
<script type="text/javascript" src="/plugins/isotope/isotope.pkgd.min.js"></script>

<!-- Magnific Popup javascript -->
<script type="text/javascript" src="/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>

<!-- Appear javascript -->
<script type="text/javascript" src="/plugins/waypoints/jquery.waypoints.min.js"></script>

<!-- Count To javascript -->
<script type="text/javascript" src="/plugins/jquery.countTo.js"></script>

<!-- Parallax javascript -->
<script src="/plugins/jquery.parallax-1.1.3.js"></script>

<!-- Contact form -->
<script src="/plugins/jquery.validate.js"></script>

<!-- Morphext -->
<script type="text/javascript" src="/plugins/morphext/morphext.min.js"></script>

<!-- Background Video -->
<script src="/plugins/vide/jquery.vide.js"></script>

<!-- Owl carousel javascript -->
<script type="text/javascript" src="/plugins/owl-carousel/owl.carousel.js"></script>

<!-- Pace javascript -->
<script type="text/javascript" src="/plugins/pace/pace.min.js"></script>

<!-- SmoothScroll javascript -->
<script type="text/javascript" src="/plugins/jquery.browser.js"></script>
<script type="text/javascript" src="/plugins/SmoothScroll.js"></script>

<script type="text/javascript" src="/plugins/moment/min/moment.min.js"></script>
<script type="text/javascript"
        src="/plugins/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>

<!-- Custom Scripts -->
<script type="text/javascript" src="/js/custom.js"></script>


</body>
</html>
