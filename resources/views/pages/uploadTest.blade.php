<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advir Admin</title>
    <!--link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"-->
    {{--<link rel="stylesheet" href="/static/css/jquery.mobile-1.4.5.min.css" />--}}
    <link href="/dash_assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    {{--<script src="/static/js/jquery-1.11.1.min.js"></script>--}}
    {{--<script src="/static/js/jquery.mobile-1.4.5.min.js"></script>--}}
    <script type="text/javascript" src="/plugins/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery-ui.js"></script>
    <script type="text/javascript" src="/bootstrap/js/bootstrap.min.js"></script>
    <!--script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script -->
    <script>
        $( document ).on( "pagecreate", function() {
            window.userName = $('.welcomeTxt .userName').html();
            window.sitePrefix = "https://rtbexpress.herokuapp.com";
            //window.sitePrefix = "http://localhost:8080";
            window.staticPath = "/static";
            window.uploadPath = "/static/uploads"+"/guest"+"/";
            window.mediaURL = sitePrefix + "/api/Unity/advir_media";
            window.conURL = sitePrefix + "/api/Unity/advir_isActive";

            $( "#testpage" ).removeClass( "ui-page-theme-a" ).addClass( "ui-page-theme-b" );

            $( "#theme-selector input" ).on( "change", function( event ) {
                var themeClass = $( "#theme-selector input:checked" ).attr( "id" );

                $( "#testpage" ).removeClass( "ui-page-theme-a ui-page-theme-b" ).addClass( "ui-page-theme-" + themeClass );
                $(".header .logo > img").attr("src","/static/img/advir-"+$( "#theme-selector input:checked" ).attr( "id" )+".png");
                $( "#ui-body-test" ).removeClass( "ui-body-a ui-body-b" ).addClass( "ui-body-" + themeClass );
                $( "#ui-bar-test, #ui-bar-form" ).removeClass( "ui-bar-a ui-bar-b" ).addClass( "ui-bar-" + themeClass );
                $( ".ui-collapsible-content" ).removeClass( "ui-body-a ui-body-b" ).addClass( "ui-body-" + themeClass );
                $( ".theme" ).text( themeClass );
            });
            $( "#opt-shadow input" ).on( "change", function( event ) {
                if ( $( "#on" ).prop( "checked" ) ) {
                    $( "#testpage" ).removeClass( "noshadow" );
                } else if ( $( "#off" ).prop( "checked" ) ) {
                    $( "#testpage" ).addClass( "noshadow" );
                }
            });
            $( "#opt-navbars input" ).on( "change", function( event ) {
                if ( $( "#show" ).prop( "checked" ) ) {
                    $( "#testpage .ui-navbar" ).show();
                    $( "#testpage .ui-footer h4" ).hide();
                } else if ( $( "#hide" ).prop( "checked" ) ) {
                    $( "#testpage .ui-navbar" ).hide();
                    $( "#testpage .ui-footer h4" ).show();
                }
            });
            $('select.objName').on('change',function(e){
                $this = $(this);
                ($this.find('option[data-objectName="'+$this.val()+'"]').attr('data-isActive')=="true")?
                    $('#flip-2').val("on").closest('.ui-flipswitch').addClass('ui-flipswitch-active'):
                    $('#flip-2').val("off").closest('.ui-flipswitch').removeClass('ui-flipswitch-active');
            });
            $(".controls button.applyBtn, .confirmApply .applyOrNot .applyContentConfirm").on("click",function(e){
                e.preventDefault();
                $this = $(e.target);
                var isApplyBtn = $this.is('.applyBtn')?true:false;
                var isContentConfirmBtn = $this.is('.applyContentConfirm')?true:false;
                var contentSetURL = '';
                if(isApplyBtn){
                    $('.activeApplyStatus').show().html("Applying...");
                    var name = $($('select.objName')[0]).val(),
                        isActiveStr = 'true',
                        action = $($('[name="action"]')[0]).val();

                    if($("#flip-2").val()=="on")
                    {
                        $('select.objName option[data-objectName="'+ name +'"]').attr('data-isActive','true');
                        isActiveStr="true";
                    }
                    else
                    {
                        $('select.objName option[data-objectName="'+ name +'"]').attr('data-isActive','false');
                        isActiveStr="false";
                    }
                }
                else if(isContentConfirmBtn){

                }


                var jsonData = {};
                if(isApplyBtn)
                {
                    jsonData = {
                        "userName": userName,
                        "objectName": name,
                        "isActive": isActiveStr,
                        "action":  action,
                        "url": $('img[data-for="'+ name +'"]').attr("src")

                    };
                    ajaxURL = conURL;
                }
                else if(isContentConfirmBtn)
                {
                    //TODO  FETCH ACTUAL ISACTIVE STATE, DONT DEFAULT TO TRUE
                    jsonData = {

                        "userName": userName,
                        "objectName" : $($('.object[data-selected="selected"]')[0]).attr('data-name'),
                        "isActive": "true",
                        "action":  "SET",
                        "url" : sitePrefix+uploadPath+$('.confirmApply').attr('data-activeImgURL')
                    };
                    if($('body').hasClass('guest_scene_1'))
                        jsonData.guest = "guest";
                    else if($('body').hasClass('guest_scene_2'))
                        jsonData.guest = "guest2";

                    ajaxURL = mediaURL;
                }
                var xhr = $.ajax({
                    url:ajaxURL,
                    type:"POST",
                    dataType: "json",
                    data:jsonData
                })
                    .done(function(data,status){
                        console.log('data: ' + data);
                        console.log('status: ' + status);
                        $('.activeApplyStatus').html("Change Applied");
                        if(isApplyBtn)
                            setTimeout(function(){$('.activeApplyStatus').fadeOut(500);},3000);
                        else if(isContentConfirmBtn)
                        {
                            var appliedImgURL = sitePrefix+uploadPath+$('.confirmApply').attr('data-activeImgURL');
                            $('.object[data-selected="selected"]').find('.objectImg').attr('src',appliedImgURL);
                            $('.confirmApply, .available').fadeOut(300);
                        }
                    })
                    .fail(function(data,status,err){
                        console.log('data: ' + data);
                        console.log('status: ' + status);
                        console.log('error: ' + err);
                        if(isApplyBtn)
                            $('.activeApplyStatus').html("Change Failed To Apply");
                        else if(isContentConfirmBtn)
                        {
                            console.log('Apply Failed');
                        }
                    })
                    .always(function(data,status,err){
                        console.log('promise resolved');
                        console.log('data : ' + data);
                        console.log('status:' + status);
                        console.log('error:' + err);
                    });
                //if()
            });
            //$('.uploadForm').on('submit',;
            // init switch indicator
            ($('select.objName').find('option[data-objectName="'+$('select.objName').val()+'"]').attr('data-isActive')=="true")?
                $('#flip-2').val("on").closest('.ui-flipswitch').addClass('ui-flipswitch-active'):
                $('#flip-2').val("off").closest('.ui-flipswitch').removeClass('ui-flipswitch-active');
        });
    </script>
</head>
<style>
    body, body *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body{
        text-align:center;
        background:#fff;
        color:#000;
        overflow-x:hidden;
    }
    body.drkTheme{
        background:#000;
        color:#aaa;
    }
    img, video, canvas{
        width:100%;
        height:auto;
    }
    .hidden{
        display:none;
    }
    .reallyHidden{
        display:none !important;
    }

    .ui-overlay-a, .ui-page-theme-a, .ui-page-theme-a .ui-panel-wrapper{

    }
    .ui-overlay-b, .ui-page-theme-b, .ui-page-theme-b .ui-panel-wrapper{

    }



    .left-align{
        text-align:left;
    }
    .left-float{
        float:left;
    }
    .clear-both{
        clear:both;
    }
    .logo img{
        width:100%;
        height:auto;
    }
    .header{
        min-height: 68px;
        margin: 1em;
        adding: 0 0 2em;
        border-bottom: solid thin #555;
    }
    .header .logo{
        display:inline-block;
        width:50%;
        max-width:150px;
    }
    .header h1{
        float: right;
        margin: .5em;
    }
    .activateDeactivateHeading {
        font-size: 1.5em;
        border-top: solid thin #555;
        padding: 1em 0;
    }
    fieldset.themeSelectFieldSet {
        max-width: 500px;
    }

    .controls{
        width: 50%;
        display:inline-block;
        vertical-align: top;
    }
    .controls .ui-input-text, .controls .ui-select
    {
        /*width:30%;	*/
        max-width:300px;

    }
    .ui-overlay-a{
        background:transparent;
    }
    .ui-mobile .controls label {
        text-align: left;
    }
    label[for="flip-2"] + *{
        text-align: left;
        float: left;
        font-size: 1.2em;
    }
    .controls button.applyBtn {
        float:left;
        display: block;
        max-width: 120px;
        clear: both;
        margin: 2em 0;
    }
    .ui-loader{
        display:none !important;
        /*        HIDING UI LOADER ERROR MESSAGE FOR NOW */
    }
    div#theme-selector {
        padding: 1em 0;
    }

    div.groupSettings {
        padding: 1em 0;
    }
    form.uploadForm  {
        display: block;
        clear: both;
    }
    #uploadForm .ui-btn {
        max-width: 300px !important;
    }
    .ui-content {
        border-right: solid thin #555;
    }

    .object {
        display: inline-block;
        width: 45%;
        vertical-align: top;
        margin: 2%;
        cursor:pointer;
    }
    .object:hover {
        /*border: solid medium #2ad;*/
    }
    .details {
        width: 44%;
        display: inline-block;
        padding: 0 .5em 2em .5em;
    }
    .available {
        position: absolute;
        top: 2em;
        width: 90%;
        margin: 0 5%;
        box-sizing: border-box;
        background: rgba(0,0,0,.9);
        border-radius: 10px;
        z-index:10;
        display:none;
    }

    .available .object {
        margin: 2%;
        width: 44%;
    }

    .availableHead {
        margin: 1em 0;
    }

    .available .inner {
        padding: 2em;
    }

    .available .availableHead .close {
        position: absolute;
        display: inline-block;
        right: 16px;
        top: 1px;
        font-size: 2em;
        transform: rotate(45deg);
        webkit-transform: rotate(45deg);
        moz-transform: rotate(45deg);
        cursor: pointer;
    }

    .availableHead h2 {
        display: inline-block;
    }

    .details .object .objectName .nameTxt {
        cursor: pointer;
    }
    .confirmApply {
        z-index: 400;
        position: fixed;
        background: rgba(31, 87, 145, 0.9);
        padding: 1em;
        box-sizing: border-box;
        width: 50%;
        margin: 0 25%;
        font-family: verdana;
        font-size: 1.2em;
        color: #fff;
        font-weight: bold;
        top: 3em;
        border-radius: 10px;
        display:none;
    }

    .applyOrNot button {
        background: #6cc0fc;
        border: solid thick #253e50;
        border-radius: 3px;
        padding: .5em;
        color: #000000;
        cursor: pointer;
    }

    .areYouSureTxt {
        margin-bottom: 2em;
    }

    .applyOrNot button:hover {
        background: #49dfd8;
    }
    .uploadHeading {
        clear: both;
        margin-bottom: 2em;
        border-top: solid thin #555;
        padding: 2em 0;
    }
    .detailsHeading {
        font-size: 1.4em;
        margin-bottom: 1.5em;
        margin-right: -0.2em;
        display: inline-block;
        border-bottom: solid thin #666;
        padding: .5em;
        width: 44%;
        cursor:pointer;
    }
    .detailsHeading:nth-child(1) {
        border-right:solid thin #666;
    }
    .detailsHeading:nth-child(2) {
        border-left:solid thin #666;
    }

    .ui-page-theme-a .detailsHeading {
        color: #ccc;
    }
    .ui-page-theme-b .detailsHeading {
        color: #666;
    }

    .ui-page-theme-b .detailsHeading.active {
        color: #fff;
    }

    .ui-page-theme-a .detailsHeading.active {
        color: #000;
    }


    .ui-page-theme-a .detailsHeading:hover,.ui-page-theme-b .detailsHeading:hover {
        color:#2ad;
    }


    .logoutBtn {
        background: #444;
        display: inline-block;
        padding: .5em;
        border-radius: 10px;
        text-shadow: 1px 1px 3px #000;
        float: right;
        cursor: pointer;
    }
    p.headerDesc {
        clear: both;
        margin: 2em;
        display: inline-block;
    }
    .guest p.headerDesc {
        clear: both;
        margin: 2em;
        display: inline-block;
    }

    .guest .detailsDescription {
        text-align: left;
        margin-bottom: 2em;
    }


    .guest .detailsDescription p {
        margin-left: 1em;
        margin-top: 1em;
    }

    .guest img.objectImg {
        max-width: 260px;
        height: auto;
    }
    .guest img.objectImg.hover {
        /*box-shadow:0px 0px 6px -1px #2ad;*/
        box-shadow: 0px 0px 1px 5px #2ad;
    }
    .guest .objectsContainer {
        text-align: left;
    }

    .guest .detailsHeading.active {
        border-left: none;
    }
    .guest .uploadNote {
        margin-top: 2em;
        text-align:left;
    }
    .guest .details {
        margin-top: 3em;
        padding-left: 1em;
        border-left: solid thin #555;
    }

    .guest .uploadHeading {
        border-top: none;
        text-align:left;
    }

    .guest p.headerDesc {
        margin-bottom: 0px;
        /* padding-bottom: 2em; */
        /* border-bottom: solid thin #555; */
    }

    .headerDescCont {
        margin-bottom: 0px;
        padding-bottom: 2em;
        border-bottom: solid thin #555;
        font-size: 1.4em;
    }

    .guest .ui-content {
        border-right: none;
    }

    .guest .controls {
        width: 42%;
    }
    .guest .headerDescCont {
        background: url(/static/img/citySceneScreenshot_DEMOpage.jpg);
        background-size: cover;
        padding-top: 2em;
        border-bottom: 0px;
        padding-bottom: 4em;
    }
    .guest .header {
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 0px;
        padding: 0px !important;
        border-bottom: 0px;
        margin: 1em 2%;
        width: 96%;
    }

    .guest .logoutBtn {position: relative;
        top: -6px;}
    .guest .logo img {
        position: relative;
        height: 38px;
        width: auto;
        top: 13px;
    }
    .uploadNote {
        font-size: .8em;
    }
    .guest .detailsHeading.manageMediaHeading {
        display: none;
    }

    .guest .objectsHeading {
        width: 100%;
    }






    .guest .header-unit {
        /* height: 150px;*/
        /*height: auto;*/
        /*border: 2px solid #000;*/
        border-right: none;
        border-left: none;
        position: relative;
        background: transparent;
        padding: 20px;
        padding-bottom: 0px;
        margin-bottom: 0px;
        /* min-height: 800px; */
    }
    .guest .vOverlay {
        position: relative;
        width: 100%;
        /*  background: #000;*/
        height: 100%;
        overflow: hidden;
        opacity: 0.80;
        background: #0A6186;


        background: rgba(86,178,214,1);
        background: -moz-linear-gradient(top, rgba(86,178,214,1) 0%, rgba(0,0,0,1) 93%, rgba(19,19,19,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(86,178,214,1)), color-stop(93%, rgba(0,0,0,1)), color-stop(100%, rgba(19,19,19,1)));
        background: -webkit-linear-gradient(top, rgba(86,178,214,1) 0%, rgba(0,0,0,1) 93%, rgba(19,19,19,1) 100%);
        background: -o-linear-gradient(top, rgba(86,178,214,1) 0%, rgba(0,0,0,1) 93%, rgba(19,19,19,1) 100%);
        background: -ms-linear-gradient(top, rgba(86,178,214,1) 0%, rgba(0,0,0,1) 93%, rgba(19,19,19,1) 100%);
        background: linear-gradient(to bottom, rgba(86,178,214,1) 0%, rgba(0,0,0,1) 93%, rgba(19,19,19,1) 100%);


    }



    .guest #video-container {
        position: absolute;
    }
    .guest #video-container {
        /*
        top:0%;
        left:0%;
        height:100%;
        width:100%;
        overflow: hidden;
        display:none;
        */
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        display:none;
        z-index: -100;
    }
    .guest video {
        position:absolute;
        z-index:0;
    }
    .guest video.fillWidth {
        /*
        width: auto;
        height: 100%;
        position: fixed;
        z-index: -1;
        */
        position: absolute;
        top: 28%;
        left: 50%;
        width: 120%;
        height: auto;
        min-width: 100%;
        min-height: 100%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: -1;
    }



    .available .object{
        margin:1em 1%;
    }
    .guest .underOverLayer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 200%;
        background: #252525;
        top: 46%;
        z-index: -99;
        overflow-y: hidden;
    }
    .guest .headerDescCont.header-unit {
        min-height: 280px;
    }

    .guest .header {
        background: #252525;
        margin: 0;
        width: 100%;
    }

    @media only screen and (max-width:420px){
        .guest img.objectImg {
            max-width: 100%;
            height: auto;
        }
        .logo{
            width:100%;
        }
        .header h1, .header .welcomeTxt {
            float: right;
            margin: .5em;
            font-size: 6vw;
            max-width: 200px;
        }
        .header .welcomeTxt{
            font-size: 4vw;
        }
        .themeSelectFieldSet{
            float:none;
        }
        .ui-content {
            border-right: none;
            border-bottom: solid thin #555;
        }
        .controls, .guest .controls{
            width:100%;
        }
        .controls .ui-input-text
        {
            width: 80%;
            max-width: none;
            margin-left: 10%;
            margin-right: 10%;
        }
        .ui-mobile .controls label {
            text-align: center;
        }
        .themeSelectFieldSet legend {
            width: 100%;
        }
        label[for="flip-2"] + *{
            text-align: center;
            float: none;
        }
        button.applyBtn {
            float: none !important;
            width: 68%;
            margin: 2em 16% !important;
            max-width: none !important;
            font-size: 1.2em !important
        }
        .details{
            width: 90%;
            margin:0 5%;
        }
        .object{
            width:100%;
        }
        .guest .details {
            border-left: none;
        }
        .guest .detailsDescription{
            border-bottom: solid thin #777;
            padding-bottom: 2em;
        }
        .available {
            margin:0px;
            width:100%;
            border-radius:0px;
            padding:0px;
        }
        .available .inner{
            padding:0px;
        }
    }
    @media only screen and (min-width:320px){
        .guest #video-container {
            display: block;
        }

    }
    @media only screen and (max-width:400px){
        #publishers p {
            /*	font-size: 1.4vw;*/
        }
        .guest .header-unit {background: #0A6186;}

    }
    @media only screen and (max-width:320px){
        .available .object{
            width:100%;
            margin:1em 0px;
        }

    }
</style>

<body class="ui-page-theme-b guest guest_scene_1" data-role="page"   id="testpage" class="guestPage">
<div class="header">
    <div class="logo left-float">
        <img src = "/static/img/advir.png"/>
    </div>
    <h1></h1><br><b class="welcomeTxt">Welcome,  <span class="userName"></span></b>
    <div class="logoutBtn">Logout</div>
</div>
<div class="headerDescCont">

    <p class="headerDesc">
        With this demo, you'll be able to see your brand in a VR environment. <br>
        Open our app in your VR headset to get started!
    </p>
</div>
<div class="controls">
    <div class="ui-content" role="main">
        <div class="uploadHeading">1. Choose your scene</div>
        <label for="sceneName">
            Scene
            <select name="sceneName" class="sceneName">
                <option data-sceneName="toon_city">outdoor scene</option>
                <option data-sceneName="living_room">indoor scene</option>
            </select>
        </label>
        <div class="uploadHeading">2. Go ahead and upload a logo of your company</div>
        <form id="uploadForm" class="uploadForm ui-mini" enctype="multipart/form-data" action="/upload" method="post">
            {{ csrf_field() }}
            <input class="" type="file" name="file" multiple="multiple">
            <input class="uploadBtn" type="submit" value="Upload" name="submit">
            <span id="uploadStatus"></span>
        </form>
    </div>
    <div class="uploadNote">
        (The uploaded content will be erased from our server after 5 minutes)
    </div>
</div>
<div class="details">
    <div class="detailsDescription">
        3.	These are current adverts in the scene. <br><span style="margin-left:18px">They are mapped to VR objects.</span>
        <br>
        <p>
            1. Select one object below (click on the ad)
            <br>
            2. Select your uploaded image from the library and apply
            <br>
            3. Check the scene in your VR headset
            <br>
            4. Done, you're ready to advertise in VR!
            <br>
        </p>
    </div>
    <div class="detailsHeading objectsHeading  active">Objects</div>
    <div class = "detailsHeading manageMediaHeading">Manage Media</div>

    <div id="detailsContainer" class="detailsContainer">
        <div class="objectsContainer">
        </div>
        <div id="manageContent" class="manageContent">

        </div>
    </div>
</div>
<div class="available">
    <div class="availableHead"><h2>Available Content</h2><div class="close">+</div></div>
    <div class="inner">
    </div>
</div>
<div class="confirmApply">
    <div class="areYouSureTxt"> Are you sure you wish to apply this selection?
    </div>
    <div class="applyOrNot">
        <button class="applyContentCancel">Cancel</button>
        <button class="applyContentConfirm">Apply</button>
    </div>
</div>
<div class="underOverLayer"></div>
</body>

<script>
    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }
    var delete_cookie = function(name, cb) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        if(typeof cb == 'function')
            cb();
    };

    $(document).ready(function() {
        if($('body').hasClass('guest_scene_1'))
        {
            param = "?scene=guest_scene_1";
            $('#uploadForm input[name="scene"]')[0].value = '/guest';
            $('#uploadForm').attr('action','/upload?scene=guest');
        }
        else if($('body').hasClass('guest_scene_2')){
            param = "?scene=guest_scene_2";
            $('#uploadForm input[name="scene"]')[0].value = '/guest2';
            $('#uploadForm').attr('action','/upload?scene=guest2');
        }
        $('#uploadForm').submit(function() {
            $("#uploadStatus").empty().text("File is uploading...");
            var param = "";
            if($('body').hasClass('guest_scene_1'))
            {
                param = "?scene=guest_scene_1";
                $('#uploadForm input[name="scene"]')[0].value = '/guest';
                $('#uploadForm').attr('action','/upload?scene=guest');
            }
            else if($('body').hasClass('guest_scene_2')){
                param = "?scene=guest_scene_2";
                $('#uploadForm input[name="scene"]')[0].value = '/guest2';
                $('#uploadForm').attr('action','/upload?scene=guest2');
            }
            $(this).ajaxSubmit({
                error: function(xhr) {
                    $("#uploadStatus").empty().show().html("<b style='color:#f00; font-size:1.4em'>This demo only accepts jpg, png, tif, gif files at the moment</b>");
                    setTimeout(function(){
                        $("#uploadStatus").fadeOut(1000);
                    },4000);
                },
                success: function(response) {
                    console.log(response)
                    if(!response.error){
                        $("#uploadStatus").empty().show().html("<b style='color:#ace; font-size:1.4em'>"+response+"</b>");
                        setTimeout(function(){
                            $("#uploadStatus").fadeOut(1000);
                        },4000);
                    }
                    else
                    {
                        $("#uploadStatus").empty().show().html("<b style='color:#f00; font-size:1.4em'>This demo only accepts jpg, png, tif, gif files at the moment</b>");
                        setTimeout(function(){
                            $("#uploadStatus").fadeOut(1000);
                        },4000);
                    }
                }
            });
            return false;
        });

        function getAvailableContent(fromLoc, param){
            var xhr = $.ajax({
                url: ("/api/availableContent/" + (((typeof param == "string" && param.length))?("?scene="+param):""))
            })
                .done(function(data, status){
                    if(fromLoc == "objects")
                    {
                        // clear existing elements
                        $('.available .inner').html('');
                        //fill inner with available content
                        for(var a=0;a<data.files.length;a++)
                        {
                            var objImgTmpl = '<div class="object"><img class="objectImg" src="" data-fileName="" alt=""></div>';
                            var imgPath="../../.."+uploadPath+data.files[a];
                            var $objImg = $(objImgTmpl);
                            $objImg.find('img').attr({'src':imgPath, 'data-fileName':data.files[a], 'alt':data.files[a]});
                            $('.available .inner').append($objImg);
                        }
                        setAvailableEventHandler();
                        $('.available').fadeIn(300);
                    }
                    else
                    {
                        $('#manageContent').html('');
                        for(var a=0;a<data.files.length;a++)
                        {
                            var objImgTmpl = '<div class="object"><img class="objectImg" src="" data-fileName="" ></div>';
                            var imgPath="../../.."+uploadPath+data.files[a];
                            var $objImg = $(objImgTmpl);
                            $objImg.find('img').attr({'src':imgPath, 'data-fileName':data.files[a], 'alt':data-files[a]});
                            $('.available .inner').append($objImg);
                        }
                        setAvailableEventHandler();
                        $('#manageContent').fadeIn(300);
                    }
                })
                .fail(function(data,status,err){
                    console.log("status:"+status);
                    console.log("err:"+err);
                })
                .always(function(data,status,err){
                    //console.log("available Content log completed");
                });
        }

        function getAvailableObjects(fromLoc, selectedScene, callback){
            var xhr = $.ajax({
                url:"/api/availableObjects/"
            })
                .done(function(data, status){
                    if(fromLoc == "sceneSelector")
                    {
                        var doneWalk = false;
                        // clear existing elements
                        $('.objectsContainer').animate({'opacity':0},10);

                        window.htmlRows = [];
                        function walk(obj, cb){
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    var val = obj[key];
                                    //console.log("walking through data["+key+"]:");
                                    // Key Handler

                                    if(key == "scenes")
                                    {
                                        //console.log("val:");
                                        //console.log(val);
                                        var scenesObj = obj;
                                        var htmlStr = "";
                                        htmlRows = [];
                                        for(var scenes in val)
                                        {
                                            //console.log("scenes:");
                                            //console.log(scenes);
                                            if(selectedScene == scenes)
                                            {
                                                var sceneObjs = val[scenes];
                                                for(var entries in sceneObjs)
                                                {

                                                    //console.log("data["+key+"]["+scenes+"]:");
                                                    //console.log(sceneObjs[entries]);


                                                    var dbEntry = sceneObjs[entries];
                                                    htmlRows.push('<div class="object" data-name="'+dbEntry.objectName+'"><div class="objectName"><span class="nameTxt">'+dbEntry.objectName+'</span></div><img data-for="'+dbEntry.objectName+'" class="objectImg" src="'+dbEntry.url+'" alt="'+dbEntry.objectName+'"></div>');
                                                    //console.log('added Row');
                                                    //console.log(htmlRows[htmlRows.length-1]);


                                                    //console.log("htmlStr inside walk ="+htmlStr);

                                                }
                                            }
                                        }
                                        doneWalk = true;


                                    }

                                    //console.log(val);
                                    if(!doneWalk)
                                        walk(val);   // for recursion
                                    else
                                    {
                                        if(typeof cb == "function"){
                                            htmlStr += htmlRows.join('\n');
                                            cb(htmlStr);
                                        }
                                    }
                                }
                                else
                                {
                                    //console.log(obj);
                                    //console.log('does not have own property of '+key + ". has value: " + obj[key]);
                                }
                            }
                        }
                        // init JSON recursive walk
                        walk(data, function(htmlStr2){
                            //console.log("htmlStr from callback = "+htmlStr);

                            $('.objectsContainer').html(htmlStr2);
                            // event handler attachment
                            $('#detailsContainer .object, #detailsContainer .object .objectImg').on('mouseover',function (e){
                                var $target;
                                if($(e.target).hasClass('objectImg')){
                                    $target = $(e.target);
                                }
                                else{
                                    $target = $(e.target).find('.objectImg')
                                };

                                $target.addClass('hover');
                            });
                            $('#detailsContainer .object, #detailsContainer .object .objectImg').on('mouseout',function (e){
                                var $target;
                                if($(e.target).hasClass('objectImg')){
                                    $target = $(e.target);
                                }
                                else{
                                    $target = $(e.target).find('.objectImg')
                                };

                                $target.removeClass('hover');
                            });
                            // END event handler attachment
                            $('.objectsContainer').animate({'opacity':1},1000);
                            if(typeof callback == "function")
                                callback();
                        });


                    }
                    else
                    {

                    }


                })
                .fail(function(data,status,err){
                    console.log("status:"+status);
                    console.log("err:"+err);
                })
                .always(function(data,status,err){
                    //console.log("available Objects log completed");
                });


        }
        // initial handlers for dynamic objects ( available content, available objects )
        $('.details .object').on('click',function(e){
            $this = $(e.target).closest('.object');
            $('.details .object').attr('data-selected','');
            $this.attr('data-selected','selected');
            scrollTo(document.body, 0, 600);
            // populate available content
            if($('body').hasClass('guest_scene_1')){	getAvailableContent("objects", "guest_scene_1");}
            else if($('body').hasClass('guest_scene_2')){	getAvailableContent("objects", "guest_scene_2");}
            else{getAvailableContent("objects");}

        });
        $('.available .availableHead .close').on('click',function(){
            $('.available').fadeOut(300);
        });
        $('#detailsContainer .object, #detailsContainer .object .objectImg, .available .object, .available .object .objectImg').on('mouseover',function (e){
            var $target;
            if($(e.target).hasClass('objectImg')){
                $target = $(e.target);
            }
            else{
                $target = $(e.target).find('.objectImg')
            };

            $target.addClass('hover');
        });
        $('#detailsContainer .object, #detailsContainer .object .objectImg .available .object, .available .object .objectImg').on('mouseout',function (e){
            var $target;
            if($(e.target).hasClass('objectImg')){
                $target = $(e.target);
            }
            else{
                $target = $(e.target).find('.objectImg')
            };

            $target.removeClass('hover');
        });
        function setAvailableEventHandler(){
            $('.available .object').on('click',function(e){
                var $this = $(e.target);
                var activeImgURL = $this.closest('img').attr('data-fileName');
                $('.confirmApply').attr('data-activeImgURL',activeImgURL).fadeIn(200);
            });
            $('.available .object .objectImg').on('mouseover',function (e){
                var $target;
                if($(e.target).hasClass('objectImg')){
                    $target = $(e.target);
                }
                else{
                    $target = $(e.target).find('.objectImg')
                };

                $target.addClass('hover');
            });
            $('.available .object .objectImg').on('mouseout',function (e){
                var $target;
                if($(e.target).hasClass('objectImg')){
                    $target = $(e.target);
                }
                else{
                    $target = $(e.target).find('.objectImg')
                };

                $target.removeClass('hover');
            });
        }
        function setObjectsEventHandler(){

            $('.details .object').on('click',function(e){
                $this = $(e.target).closest('.object');
                $('.details .object').attr('data-selected','');
                $this.attr('data-selected','selected');
                scrollTo(document.body, 0, 600);
                // populate available content
                if($('body').hasClass('guest_scene_1')){	getAvailableContent("objects", "guest_scene_1");}
                else if($('body').hasClass('guest_scene_2')){	getAvailableContent("objects", "guest_scene_2");}
                else{getAvailableContent("objects");}
            });
        }
        $('.applyContentCancel').on('click',function(){
            $('.confirmApply').fadeOut(300);
        });

        $('.sceneName').on('change', function(e){
            var $target = $(e.target);
            var sceneName = $('select.sceneName').val();
            if(sceneName == "indoor scene"){
                window.uploadPath = "/static/uploads/guest2/";
                $('body').removeClass('guest_scene_1').addClass('guest_scene_2');
                getAvailableObjects("sceneSelector", "2", function(){setObjectsEventHandler()} );
            }
            else if(sceneName == "outdoor scene"){
                window.uploadPath = "/static/uploads/guest/";
                $('body').removeClass('guest_scene_2').addClass('guest_scene_1');
                getAvailableObjects("sceneSelector", "1", function(){setObjectsEventHandler()});
            }
            else
                alert('Invalid Scene Selected');
        });

        $('.logoutBtn').on('click',function(){
            delete_cookie('connect.sid', function (){
                window.location.href = "/api/logout";
            });

        });
        /*$('.applyContentConfirm').on('click',function(){

         $('.confirmApply, .available').fadeOut(300);
         });
         */
        setAvailableEventHandler();
        $('.underOverLayer').css('height',$(document).height()*.9+'px');
        $(window).on('resize',function(){
            $('.underOverLayer').css('height',$(document).height()*.9+'px');
        });
    });
</script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-94083493-1', 'auto');
    ga('send', 'pageview');

</script>
</html>