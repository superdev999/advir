// JavaScript Document
function show_tooltip_password(id){
	if(id=="c_password"){
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="password"){
		$('#password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}
}

function show_tooltip_archive(id){
	if(id=="archive"){
		$('#archive').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#archive').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_verify(id){

	if(id=="fname"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="lname"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('show');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_name"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_website"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_address"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_city"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('show');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="country"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_zip"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('show');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="state"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('show');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_phone"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="role"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('show');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="behalf"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="email_volume"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('show');			
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
		
	}else if(id=="industry"){
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');					
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');							
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#industry').tooltip({trigger: 'hover'}).tooltip('show');			
	}
}

function show_tooltip_fund(id){
	if(id=="card_name"){
		$('#card_name').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#card_no').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#cvc').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#month').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#year').tooltip({trigger: 'hover'}).tooltip('hide');			
	}else if(id=="card_no"){
		$('#card_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#card_no').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#cvc').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#month').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#year').tooltip({trigger: 'hover'}).tooltip('hide');			
	}else if(id=="cvc"){
		$('#card_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#card_no').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#cvc').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#month').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#year').tooltip({trigger: 'hover'}).tooltip('hide');			
	}else if(id=="month"){
		$('#card_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#card_no').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#cvc').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#month').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#year').tooltip({trigger: 'hover'}).tooltip('hide');			
	}else if(id=="year"){
		$('#card_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#card_no').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#cvc').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#month').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#year').tooltip({trigger: 'hover'}).tooltip('show');			
	}
}

function show_tooltip_smtp(id){
	if(id=="smtp_username"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_password"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_host"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_port"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_smtp(id){
	if(id=="smtp_username"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_password"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_host"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_port"){
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_login(id){
	if(id=="username"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="password"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_forgotpassword(id){
	
	if(id=="email"){
		$('#email').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="capt"){
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#capt').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_register(id){
	if(id=="username"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="password"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="c_password"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="fname"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('show');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="lname"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="email"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="c_email"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="capt"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="phone"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#c_email').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#capt').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#phone').tooltip({trigger: 'hover'}).tooltip('show');
	}
}

function show_tooltip_subuser(id){
	if(id=="username"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="email"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="password"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="c_password"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_country(id){
	if(id=="country_name"){
		$('#country_name').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#country_name').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_roles(id){
	if(id=="role_name"){
		$('#role_name').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#role_name').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_monthly(id){
	if(id=="month_name"){
		$('#month_name').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#month_name').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_industry(id){
	if(id=="industry_name"){
		$('#industry_name').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#industry_name').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_senderemail(id){
	if(id=="sender_email"){
		$('#sender_email').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#sender_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="sender_name"){
		$('#sender_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#sender_name').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_username"){
		$('#sender_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#sender_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_password"){
		$('#sender_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#sender_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_host"){
		$('#sender_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#sender_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="smtp_port"){
		$('#sender_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#sender_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_host').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#smtp_port').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_email_template(id){
	if(id=="email_title"){
		$('#email_title').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#email_subject').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="password"){
		$('#email_subject').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
	}
}

function show_tooltip_strip_setting(id){
	if(id=="test_secret_key"){
		$('#test_secret_key').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#test_publishable_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#live_secret_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#live_publishable_key').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="test_publishable_key"){
		$('#test_secret_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#test_publishable_key').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#live_secret_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#live_publishable_key').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="live_secret_key"){
		$('#test_secret_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#test_publishable_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#live_secret_key').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#live_publishable_key').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="live_publishable_key"){
		$('#test_secret_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#test_publishable_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#live_secret_key').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#live_publishable_key').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_packages(id){
	if(id=="pac_name"){

		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');		

	}else if(id=="pac_des"){
		
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');		
		
	}else if(id=="pac_price"){
		
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');		
		
	}else if(id=="credits"){
		
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');		
		
	}else if(id=="bonus_email"){
		
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');
		
	}else if(id=="analytics"){
		
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');
		
	}else if(id=="delivery_support"){
	
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('hide');	
		
	}else if(id=="ips"){
		
		$('#pac_name').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_des').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#pac_price').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#bonus_email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#analytics').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#delivery_support').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ips').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_minimum_credits(id){
	if(id=="minimum_credits"){
		$('#minimum_credits').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#minimum_credits').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_ga(id){
	if(id=="ga_ui_username"){

		$('#ga_ui_username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#ga_ui_password').tooltip({trigger: 'hover'}).tooltip('hide');	

	}else if(id=="ga_ui_password"){
		
		$('#ga_ui_username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#ga_ui_password').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_mainclasses(id){
	if(id=="mail_class_title"){

		$('#mail_class_title').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#mail_class_type').tooltip({trigger: 'hover'}).tooltip('hide');	

	}else if(id=="mail_class_type"){
		
		$('#mail_class_title').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#mail_class_type').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_adduser(id){
	if(id=="username"){

		$('#username').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="email"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="password"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');

	}else if(id=="c_password"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('show');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
		
	}else if(id=="fname"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="lname"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_name"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_website"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('show');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_address"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('show');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_city"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="country"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_zip"){
		
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="state"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="company_phone"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('show');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="role"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('show');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="behalf"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('show');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}
	else if(id=="email_volume"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('show');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('hide');
	}else if(id=="industry"){
		$('#username').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#email').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#password').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#c_password').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#fname').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#lname').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_name').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_website').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_address').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#company_city').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#country').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#company_zip').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#state').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#company_phone').tooltip({trigger: 'hover'}).tooltip('hide');		
		$('#role').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#behalf').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#email_volume').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#industry').tooltip({trigger: 'hover'}).tooltip('show');
	}
}


function show_tooltip_subuser_settings(id){
	if(id=="default_subuser"){
		$('#default_subuser').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#default_subuser').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_add_credits(id){
	if(id=="credits"){
		$('#credits').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="end_date"){
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('show');	
	}
}

function show_tooltip_upgarde_user(id){
	if(id=="pac_id"){
		$('#pac_id').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');			
	}else if(id=="credits"){
		$('#pac_id').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');	
	}else if(id=="end_date"){
		$('#pac_id').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#credits').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('show');	
	
	}
}

function show_tooltip_edit(id){
	if(id=="body"){
		$('#body').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#body').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_activity(id){
	if(id=="list_email"){
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

					
function show_tooltip_events(id){
	if(id=="list_id"){
		$('#list_id').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#start_date').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#filter').tooltip({trigger: 'hover'}).tooltip('hide');			
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('hide');		
	}else if(id=="start_date"){
		$('#list_id').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#start_date').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');
		$('#filter').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('hide');		
	}else if(id=="end_date"){
		$('#list_id').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#start_date').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('show');
		$('#filter').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('hide');		
	}else if(id=="filter"){
		$('#list_id').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#start_date').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#filter').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('hide');		
	}else if(id=="list_email"){
		$('#list_id').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#start_date').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#end_date').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#filter').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#list_email').tooltip({trigger: 'hover'}).tooltip('show');		
	}
}

function show_tooltip_engagement(id){
	if(id=="date_filter"){
		$('#date_filter').tooltip({trigger: 'hover'}).tooltip('show');	
	}else{
		$('#date_filter').tooltip({trigger: 'hover'}).tooltip('hide');		
	}
}

function show_tooltip_csv(id){
	if(id=="operation"){
		$('#operation').tooltip({trigger: 'hover'}).tooltip('show');	
		$('#duration').tooltip({trigger: 'hover'}).tooltip('hide');	
	
	}else if(id=="duration"){
		$('#operation').tooltip({trigger: 'hover'}).tooltip('hide');	
		$('#duration').tooltip({trigger: 'hover'}).tooltip('show');	
	
	}
}