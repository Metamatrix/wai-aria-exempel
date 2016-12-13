var content = $('.content');
var content1 = $('#content1');
var content2 = $('#content2');
var content3 = $('#content3');
var submenu = $('#subdropdown');

$('#menuitem2').click(function(){

	submenu.toggle();
	content.hide();
	var vals = ['true', 'false'];
	toggleAttr($(submenu), 'aria-hidden', vals);

});

$('#content1-menu').click(function(){

	content1.show();
	content2.hide();
	content3.hide();

});

$('#content2-menu').click(function(){

	content2.show();
	content1.hide();
	content3.hide();

});

$('#content3-menu').click(function(){

	content3.show();
	content2.hide();
	content1.hide();

});


function toggleAttr(el, attribute, vals){

	if ($(el).attr(attribute) ===  vals[0]){
		$(el).attr(attribute, vals[1]);
	} else if ($(el).attr(attribute) === vals[1])

	{
		$(el).attr(attribute, vals[0]);
	}

};