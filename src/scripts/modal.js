var alert = $('#alert');
var $overlay = $('#overlay');
var vals = ['true', 'false'];

$("#modal-open-button").click(function(){
	alert.show();
	$overlay.show();
	alert.attr('aria-hidden', 'false');
});

$("#modal-ok-button").click(function(){
	alert.hide();
	alert.attr('aria-hidden', 'true');
	$overlay.hide();
});