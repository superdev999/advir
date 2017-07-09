// JavaScript Document

if(location.hostname=="58.65.172.229"){
	var servername 		   = 'http://'+location.hostname+':808/greenarrow/public/';

	var JS_SERVER_PATHROOT = servername;
	
	var IMAGE_PATH  	   = 'http://'+location.hostname+':808/greenarrow/public/files/images/';
}else{

	/*
	var servername 		   = 'http://'+location.hostname+'/public/';
	
	var JS_SERVER_PATHROOT = servername;
	
	var IMAGE_PATH  	   = 'http://'+location.hostname+'/public/files/images/';
	*/
	var servername 		   = '/';
	
	var JS_SERVER_PATHROOT = servername;
	
	var IMAGE_PATH  	   = '/files/images/';

	}

//console.log("servername: " + servername + ", JS_SERVER_PATHROOT: " + JS_SERVER_PATHROOT + ", IMAGE_PATH: " + IMAGE_PATH);

	/*
if(location.hostname=="200.200.200.7"){
	var servername 		   = 'http://'+location.hostname+'/greenarrow/public/';

	var JS_SERVER_PATHROOT = servername;
	
	var IMAGE_PATH  	   = 'http://'+location.hostname+'/greenarrow/public/files/images/';
}else{

	var servername 		   = 'http://'+location.hostname+'/public/';
	
	var JS_SERVER_PATHROOT = servername;
	
	var IMAGE_PATH  	   = 'http://'+location.hostname+'/public/files/images/';
	}	*/




function signin(){

	$('#loginForm').unbind('submit');
	var options = {
	target: '', 				// target element(s) to be updated with server response
	beforeSubmit: validate_signinRequest, 	
	success: show_signinfrm_Response, 		
	url: JS_SERVER_PATHROOT+'process/login.php'
	};
	$('#loginForm').submit(function() {
		$(this).ajaxSubmit(options);
		return false;
	});}

function validate_signinRequest(formData, jqForm, options){	
	var queryString = $.param(formData);
	//console.log(formData, jqForm, options);
	document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
	$("#LoginBtn").hide();
	return true; }

function show_signinfrm_Response(responseText, statusText){
	document.getElementById("loader1").innerHTML = '';
	$("#LoginBtn").show();
	//console.log('response: ', responseText);
	//console.log('status: ', statusText);
	//alert("Click ok");
	if(responseText.search('done') != -1)
	{
		//myarray = new Array(); // why this?????
		myarray = responseText.split('-SEPARATOR-');
		window.location.href = myarray[1];
	}
	else
	{	
				$('#error_div').fadeIn("slow");
				$('#error_div').html('');
				$('#error_div').html(responseText);
				$('html, body').animate({scrollTop:100}, 'slow');
	}	}

function refresh_div(){	$.ajax({
		   url: JS_SERVER_PATHROOT+'process/refresh_captacha_process.php', 
		   success: function(result)
		   {
			$("#refresh_div").html(result);
  		   }
		  });	}

function register(){$('#registerForm').unbind('submit');
	var options = {
	target: '', 				// target element(s) to be updated with server response
	beforeSubmit: validate_register_Request, 	
	success: show_register_frm_Response,
	url: JS_SERVER_PATHROOT+'process/register.php'
	};
	$('#registerForm').submit(function() {
		$(this).ajaxSubmit(options);
		return false;
	});}

function validate_register_Request(formData, jqForm, options){
	var queryString = $.param(formData);	
	document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
	$("#RegisterBtn").hide();
	return true;}

function show_register_frm_Response(responseText, statusText){
	
	document.getElementById("loader1").innerHTML = '';
	$("#RegisterBtn").show();
	if(responseText.search('done') != -1)
	{
		myarray = new Array();
		myarray = responseText.split('-SEPARATOR-');
		window.location.href = myarray[1];
	}
	else
	{
		       //alert(responseText);	
				$('#error_div').fadeIn("slow");
				$('#error_div').html('');
				$('#error_div').html(responseText);
				$('html, body').animate({scrollTop:100}, 'slow');
	}}

function abandon_log(){$.post(
		JS_SERVER_PATHROOT+'process/abandon_log.php',  
		$('#registerForm').serialize(), 
		function(data){
		 
			//alert(data);		 	
		}
	);}

function sender_email_validate(){
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#EmailBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/sender_validation.php',  
		$('#emailForm').serialize(), 
		function(data){
	   $("#EmailBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
	
function email_validate(){
	
		//alert(document.getElementById("summernote").value);
		var content = $('textarea[name="email_body"]').html($('#email_body').code());
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#EmailTemplateBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/email_template_validation.php',  
		$('#emailTemplateForm').serialize(), 
		function(data){
	   $("#EmailTemplateBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function stripe_setting_validate(){
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#StripBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/stripe_setting.php',  
		$('#stripeTemplateForm').serialize(), 
		function(data){
	   $("#StripBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function package_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#package_validate").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/packages_edit.php',  
		$('#PackageForm').serialize(), 
		function(data){
	   $("#package_validate").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function smtp_setting_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#smtpBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/smtp-setting.php',  
		$('#smtpForm').serialize(), 
		function(data){
	   $("#smtpBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}

function country_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#countryBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/country_edit.php',  
		$('#countryForm').serialize(), 
		function(data){
	   $("#countryBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function role_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#roleBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/role_edit.php',  
		$('#roleForm').serialize(), 
		function(data){
	   $("#roleBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function monthly_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#monthlyBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/monthly_edit.php',  
		$('#monthlyForm').serialize(), 
		function(data){
	   $("#monthlyBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}		

function industry_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#industryBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/industry_edit.php',  
		$('#industryForm').serialize(), 
		function(data){
	   $("#industryBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
);}		
		
function personal_validate(){

		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#personalBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/verify_edit.php',  
		$('#personalForm').serialize(), 
		function(data){
	   $("#personalBtn").show();
		document.getElementById("loader1").innerHTML = '';
		
	
		if(data=="done"){
				
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else if(data.search('done') != -1)
		{
			
			myarray = new Array();
			myarray = data.split('-SEPARATOR-');
			window.location.href = myarray[1];

		}else{
	
			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
);}
		
function userStatus(status,id,email){
	$('#status_'+id).hide();
		document.getElementById("loader_"+id).innerHTML  = '<img src='+IMAGE_PATH+'loading.gif>'; 
$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/userstatus.php?id='+id+'&status='+status+'&email='+email,
			async:false,
			success: function(result){
			if (result!=''){  
					setTimeout(function(){
						document.getElementById("loader_"+id).innerHTML  = ''; 
						$('#status_'+id).show();				
						$('#status_'+id).html(result);
						}, 1000
						);	
					}
				} ,
		});}

function userLogin(id,action){

	if(action=="login"){
		$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/user_login.php?id='+id,
			async:false,
			success: function(result){
			if (result!=''){  
					setTimeout(function(){
						window.location = result;
						}, 1000
						);	
					}
				} ,
		});
	}
	else if(action=="sub-user"){
	
		window.location = JS_SERVER_PATHROOT+'subuser_settings.php?id='+id ;
	
	}
	else if(action=="history"){
	
		window.location = JS_SERVER_PATHROOT+'payment_history.php?id='+id ;
	
	}else if(action=="add_credits"){
	
		window.location = JS_SERVER_PATHROOT+'add_credits.php?id='+id ;
	
	}else if(action=="sub-user-view"){

		window.location = JS_SERVER_PATHROOT+'subusers-view.php?id='+id ;
	
	}else if(action=="upgarde_user"){

		window.location = JS_SERVER_PATHROOT+'upgarde_user.php?id='+id ;
	
	}else if(action=="set_verfied"){

		$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/set_verfied.php?id='+id,
			async:false,
			success: function(result){
			
			
			
			if (result!=''){  
			
					setTimeout(function(){
						window.location = result;
						}, 1000
						);	
					}
				} ,
		});

	}
	
	}

function backtoadmin(){

		$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/backtoadmin.php',
			async:false,
			success: function(result){
			if (result!=''){  
			
					setTimeout(function(){
						window.location = result;
						}, 1000
						);	
					}
				} ,
		});}
// Add Credits
function add_credits_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#creditBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/add_credits.php',  
		$('#add_credits_form').serialize(), 
		function(data){
	   $("#creditBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}

function minimum_creates_validate(){
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#MiniBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/minimum_credits.php',  
		$('#MiniForm').serialize(), 
		function(data){
	   $("#MiniBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function change_password_validate(){
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#passwordBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/change_password.php',  
		$('#passwordForm').serialize(), 
		function(data){
	   $("#passwordBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function responder_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#autoBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/autoresponder_edit.php',  
		$('#autoForm').serialize(), 
		function(data){
	   $("#autoBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}

function forgot_password(){
	$('#forgotForm').unbind('submit');
	var options = {
	target: '', 				// target element(s) to be updated with server response
	beforeSubmit: validate_forgot_password_Request, 	
	success: show_forgot_password_frm_Response, 		
	url: JS_SERVER_PATHROOT+'process/forgot_password.php'
	};
	$('#forgotForm').submit(function() {
		$(this).ajaxSubmit(options);
		return false;
	});}

function validate_forgot_password_Request(formData, jqForm, options){
	var queryString = $.param(formData);	
	document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
	$("#forgotBtn").hide();
	return true;}

function show_forgot_password_frm_Response(responseText, statusText){
	
	document.getElementById("loader1").innerHTML = '';
	$("#forgotBtn").show();
	if(responseText.search('done') != -1)
	{
		myarray = new Array();
		myarray = responseText.split('-SEPARATOR-');
		window.location.href = myarray[1];
	}
	else
	{
		       //alert(responseText);	
				$('#error_div').fadeIn("slow");
				$('#error_div').html('');
				$('#error_div').html(responseText);
				$('html, body').animate({scrollTop:100}, 'slow');
	}}		

function reset_password(){
	$('#resetForm').unbind('submit');
	var options = {
	target: '', 				// target element(s) to be updated with server response
	beforeSubmit: validate_reset_password_Request, 	
	success: show_reset_password_frm_Response, 		
	url: JS_SERVER_PATHROOT+'process/reset_password.php'
	};
	$('#resetForm').submit(function() {
		$(this).ajaxSubmit(options);
		return false;
	});}

function validate_reset_password_Request(formData, jqForm, options){
	var queryString = $.param(formData);	
	document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
	$("#resetBtn").hide();
	return true;}

function show_reset_password_frm_Response(responseText, statusText){
	
	document.getElementById("loader1").innerHTML = '';
	$("#resetBtn").show();
	if(responseText.search('done') != -1)
	{
		myarray = new Array();
		myarray = responseText.split('-SEPARATOR-');
		window.location.href = myarray[1];
	}
	else
	{
		       //alert(responseText);	
				$('#error_div').fadeIn("slow");
				$('#error_div').html('');
				$('#error_div').html(responseText);
				$('html, body').animate({scrollTop:100}, 'slow');
	}}		
	
function api_validate(){
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#apiBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/api_key.php',  
		$('#apiForm').serialize(), 
		function(data){
	   $("#apiBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
			
		$('#error_div').hide();
		$('#success_div').fadeIn("slow");
		$('#success_div').html('');
		$('#success_div').html(data);
		$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		$("#apiBtn").hide();
		
		


}
	);}	
		
function ga_ui_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#smtpBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/ga_ui_info.php',  
		$('#smtpForm').serialize(), 
		function(data){
	   $("#smtpBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}

function total_sent(val,listid){
$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/get_stats_message.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totalsent = myarray[1];
			} ,
		});}

function total_open(val,listid){
	if(val==0){	val = 'zero';}
$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/get_stats_opens1.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totalopen = myarray[1];
			current_unopen = document.getElementById("unopen_hidden").value;
			totalunopen = current_unopen - totalopen;
			document.getElementById("unopen_hidden").value	= totalunopen;

} ,
		});
			

}

function total_click(val,listid){
	if(val==0){	val = 'zero';}
$.ajax({
			type: "GET",

			url: JS_SERVER_PATHROOT+'process/get_stats_clicks1.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totalclick = myarray[1];
			
			} ,
		});
}

function mail_class_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#mailClassBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/mail_class_edit.php',  
		$('#mailClassForm').serialize(), 
		function(data){
	   $("#mailClassBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}

function total_deliver(val,listid){
$.ajax({
			type: "GET",
			url: JS_SERVER_PATHROOT+'process/get_stats_deliver.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totaldeliver = myarray[1];
			} ,
		});}

function total_hard_bounce(val,listid){
$.ajax({
			type: "GET",
			url: JS_SERVER_PATHROOT+'process/get_stats_hard.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totalhard = myarray[1];
			} ,
		});}

function total_soft_bounce(val,listid){
$.ajax({
			type: "GET",
			url: JS_SERVER_PATHROOT+'process/get_stats_soft.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totalsoft = myarray[1];
			} ,
		});}

function total_spam(val,listid){
$.ajax({
			type: "GET",
			url: JS_SERVER_PATHROOT+'process/get_stats_spam.php?date='+val+'&listid='+listid,
			async:false,
			success: function(result){
			myarray = result.split('-SEPARATOR-');
			totalspam = myarray[1];
			} ,
		});}

function upgrade_user_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#upgradeUserBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/upgarde_user.php',  
		$('#upgarde_user_form').serialize(), 
		function(data){
	   $("#upgradeUserBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}

function add_user_validate(){
	
		

		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#addUserBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/add_user.php',  
		$('#addUserForm').serialize(), 
		function(data){
	   $("#addUserBtn").show();
		document.getElementById("loader1").innerHTML = '';
		
	
		if(data=="done"){
				
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Added Successfully.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else if(data.search('done') != -1)
		{
			
			myarray = new Array();
			myarray = data.split('-SEPARATOR-');
			window.location.href = myarray[1];

		}else{
	
			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
);}
		
function mysetting_validate(){

		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#mysettingBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/mysettings.php',  
		$('#mysettingForm').serialize(), 
		function(data){
	   $("#mysettingBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
);}

$(function () {
	$('.send_messages').click(function () {

		var sub_id = this.value;

		swal({
					title: "Are you sure?",
					text: "Please click on Yes, Send them now! button",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#62CB31",
					confirmButtonText: "Yes, Send them now!",
					cancelButtonText: "Not Now!",
					closeOnConfirm: false,
					closeOnCancel: false },
				function (isConfirm) {
					if (isConfirm) {

						$.ajax({
						type: "GET",
						url: JS_SERVER_PATHROOT+'process/send_them_now.php?sub_id='+sub_id,
						async:false,
						success: function(result){
						if (result!=''){ setTimeout(function(){}, 1000);}} ,});

					
					swal("Successfull!", "Your messages has been in sending queue now.", "success");
					window.location.reload();
					} else {
						swal("Cancelled", "Your messages are not send (:", "error");
						
					}
				});});
	$('.delete_messages').click(function () {

		var sub_id = this.value;
		
		swal({
					title: "Are you sure?",
					text: "Your will not be able to recover these cancel messages!",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes, delete it!",
					cancelButtonText: "Not Now!",
					closeOnConfirm: false,
					closeOnCancel: false },
				function (isConfirm) {
					if (isConfirm) {

						$.ajax({
						type: "GET",
						url: JS_SERVER_PATHROOT+'process/cancel_messages.php?sub_id='+sub_id,
						async:false,
						success: function(result){
						if (result!=''){ setTimeout(function(){}, 1000);}} ,});

					
					swal("Deleted!", "Your messages has been deleted.", "success");
					window.location.reload();
					} else {
						swal("Cancelled", "Your messages are safe :)", "error");
						
					}
				});});
	$('.delete_subuser').click(function () {

		var id = this.value;
		
		swal({
					title: "Are you sure?",
					text: "Your will not be able to recover this user!",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes, delete it!",
					cancelButtonText: "Not Now!",
					closeOnConfirm: false,
					closeOnCancel: false },
				function (isConfirm) {
					if (isConfirm) {
						
						$.ajax({
						type: "GET",
						url: JS_SERVER_PATHROOT+'process/delete_subuser.php?id='+id,
						async:false,
						success: function(result){
						if (result!=''){ setTimeout(function(){}, 1000);}} ,});

					
					swal("Deleted!", "Your user has been deleted.", "success");
					window.location.href = JS_SERVER_PATHROOT+'subusers.php?set=1';
					} else {
						swal("Cancelled", "Your user is safe :)", "error");
						
					}
				});});});

function graph_showhid(id){

	if(id == "displaying_totals") {

            document.getElementById('displaying_totals').style.display='block'; 
            document.getElementById('displaying_percentage').style.display='none'; 

	}else{
		
            document.getElementById('displaying_totals').style.display='none'; 
            document.getElementById('displaying_percentage').style.display='block'; 

	}
}

function subuser_setting_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#upgradeSubUserSettingBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/subuser_settings.php',  
		$('#subuser_setting_form').serialize(), 
		function(data){
	   $("#upgradeSubUserSettingBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}
		
function add_subuser_validate(){
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#addSubUserBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/add_subuser.php',  
		$('#addSubUserForm').serialize(), 
		function(data){
	   $("#addSubUserBtn").show();
		document.getElementById("loader1").innerHTML = '';
		
	
		if(data=="done"){
				
			/*
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Added Successfully.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			*/
			window.location.href = JS_SERVER_PATHROOT+'subusers.php?set=1';
		
		}else if(data.search('done') != -1)
		{
			
			myarray = new Array();
			myarray = data.split('-SEPARATOR-');
			window.location.href = myarray[1];

		}else{
	
			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
);}		
		
function permission_validate(){

		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#permissionBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/permissions.php',  
		$('#permissionForm').serialize(), 
		function(data){
	   $("#permissionBtn").show();
		document.getElementById("loader1").innerHTML = '';
		
		if(data=="done"){
				
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else if(data.search('done') != -1)
		{
			
			/*myarray = new Array();
			myarray = data.split('-SEPARATOR-');
			window.location.href = myarray[1];*/

		}else{
	
			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
);}

function tooltip_validate(){
	
		document.getElementById("loader1").innerHTML = '<img src='+IMAGE_PATH+'loading.gif>'; 
		$("#ToolTipBtn").hide();
		$.post(
		JS_SERVER_PATHROOT+'process/tooltip_edit.php',  
		$('#ToolTipForm').serialize(), 
		function(data){
	   $("#ToolTipBtn").show();
		document.getElementById("loader1").innerHTML = '';
	  //alert(responseText);	
		if(data=="done"){
			
			$('#error_div').hide();
			$('#success_div').fadeIn("slow");
			$('#success_div').html('');
			$('#success_div').html("Update Successful.");
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
		
		}else{

			$('#success_div').hide();
			$('#error_div').fadeIn("slow");
			$('#error_div').html('');
			$('#error_div').html(data);
			$('html, body').animate({scrollTop:100}, 'slow');	//alert(data);		 	
			
		}
		


}
	);}