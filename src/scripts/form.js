$("#name").blur(function(){

	var inputField = $('#name');
	var alert = $('#name-input-alert');
	var invalid = (inputField.val().indexOf(' ') < 0 &&  inputField.val() !== '');
	var empty =(inputField.val() == '');

	if(empty){
		alert.hide();
	}
	if(invalid){
		inputField.attr('aria-invalid', 'true');
		alert.show();
	} else {
		inputField.attr('aria-invalid', 'false');
		alert.hide();
	}

});

$("#email").blur(function(){

	var inputField = $('#email');
	var alert = $('#email-input-alert');
	var invalid = (inputField.val().indexOf('@') < 0 &&  inputField.val() !== '');
	var empty =(inputField.val() == '');

	if(empty){
		alert.hide();
	}
	if(invalid){
		inputField.attr('aria-invalid', 'true');
		alert.show();
	} else {
		inputField.attr('aria-invalid', 'false');
		alert.hide();
	}

});
