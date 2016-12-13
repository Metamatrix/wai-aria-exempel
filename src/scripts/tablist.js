$('.tab').click(function(){

	var $this = $(this);
	var $panel = $('.tab-panel');
	var $tabs = $('.tab');

	$tabs.removeClass('selected');
	$this.addClass('selected');

	$tabs.attr('aria-selected', 'false');
	$this.attr('aria-selected', 'true');

	$panel.hide();
	$panel.attr('aria-hidden', 'true');
	$panel.filter('#' + $this.attr('aria-controls')).show().attr('aria-hidden', 'false');

});