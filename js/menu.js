// jQuery.noConflict();

jQuery(document).ready(function(){
	var t_menu = "150px";
//FONCTION RELATIVE AU MENU
	//on cache le menu au bout de 5 seconde depuis l'arrivé sur le site si la personne n'est pas déjà passée dessus
	setTimeout(function(){
		
			jQuery('#menu').animate({"left": '-'+t_menu}, 500);
		
	}, 5000);	

	jQuery('#menu').mouseenter(function(){
		jQuery('#menu').stop();
		jQuery('#menu').animate({"left": 0}, 500);

	});

	jQuery('#menu').mouseleave(function(){
		jQuery('#menu').stop();
		jQuery('#menu').animate({"left": '-'+t_menu}, 500);

	});

	//lorsque l'on passe sur un élément du menu
	jQuery('.sous_menu').mouseenter(function(){
		var id = this.id;

	    var image = jQuery('#'+id).children('a').children('img.img_normal');
	   	image.fadeOut('fast');
	});

	jQuery('.sous_menu').mouseleave(function(){
		var id = this.id;

		var image = jQuery('#'+id).children('a').children('img.img_normal');
	   	image.fadeIn('fast');
	});

});

