var alert = $('#alert');
var vals = ['true', 'false'];

$("#modal-open-button").click(function(){
	alert.show();
    alert.attr('aria-hidden', 'false');
});

$("#modal-close-button").click(function(){
	alert.hide();
    alert.attr('aria-hidden', 'true');
});