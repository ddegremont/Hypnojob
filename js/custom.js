jQuery.noConflict();

jQuery(document).ready(function(){


	width = jQuery('.logo').children('img').width();
	var left = screen.width;
	left = (left/2)-(width/2);
	jQuery('.logo').children('img').css('left', left);





}); 