<?php
require base_path('includes/variables.php');
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Page title -->
    <title>Advir, LLC | Thank you for your registration</title>
    <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="/fonts/font-glyphicon/css/glyphicon.css">
    <link rel="stylesheet" href="/css/metisMenu.css">
    <link rel="stylesheet" href="/css/animate.css">
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/glyphicons.less">
    <link rel="stylesheet" href="/css/bootstrap-datepicker3.min.css">
    <link rel="stylesheet" href="/css/summernote.css">
    <link rel="stylesheet" href="/css/summernote-bs3.css">
    <link rel="stylesheet" href="/fonts/fooTable/footable.core.min.css">
    <link rel="stylesheet" href="/css/sweet-alert.css">
    <!-- App styles -->
    <link rel="stylesheet" href="/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css">
    <link rel="stylesheet" href="/fonts/pe-icon-7-stroke/css/helper.css">
    <link rel="stylesheet" href="/css/custom.css">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/advir-icon.png">
</head>
<body bgcolor="#f7f9fa">
<section class="main-container" style="overflow: auto;">

    <div class="container">
        <div class="row">
            <div style="max-width:800px; margin:20% auto; background-color: #edefed; padding: 30px; margin-top: 10%;">
                <p style="text-align:center;"><h1 style="margin-bottom: 5%;">Thank you for your registration.</h1></p>
                <p><h4>An activation email is sent to <b style="color: #1347e0"><?php echo $useremail ?></b></h4></p>
                <p><h4>Upon your confirmation, your account will be activated.&nbsp;</h4></p>
                <p><h4>ADVIR</h4></p>
                <a href="{{url('/auth/login')}}" class="btn btn-primary">Go Back</a>
            </div>
        </div>
    </div>
</section>

<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<!-- Vendor scripts -->
<script src="/js/jquery-2.1.1.js"></script>
<script src="/js/jquery-ui.js"></script>
<script src="/js/jquery.form.js"></script>
<script src="/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/plugins/metisMenu/metisMenu.min.js"></script>
<script src="/js/jquery.flot.js"></script>
<script src="/js/jquery.flot.resize.js"></script>
<script src="/js/icheck.min.js"></script>
<script src="/js/sparkline-index.js"></script>
<script src="/js/summernote.min.js"></script>
<script src="/js/sweet-alert.min.js"></script>
<script src="/js/toastr.min.js"></script>
<script src="/js/footable.all.min.js"></script>
<!-- App scripts -->
<script src="/js/homer.js"></script>
<script src="/js/myscript.js"></script>
<script src="js/tooltip.js"></script>
<script src="/js/bootstrap-datepicker.min.js"></script>
</body>
</html>