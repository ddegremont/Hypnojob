jQuery.noConflict();

jQuery(document).ready(function(){
//FONCTION RELATIVE AU MENU
	//on cache le menu au bout de 5 seconde depuis l'arrivé sur le site si la personne n'est pas déjà passée dessus
	setTimeout(function(){
		
			jQuery('#menu').animate({"left": '-200px'}, 500);
		
	}, 5000);	

	jQuery('#menu').mouseenter(function(){
		jQuery('#menu').stop();
		jQuery('#menu').animate({"left": 0}, 500);

	});

	jQuery('#menu').mouseleave(function(){
		jQuery('#menu').stop();
		jQuery('#menu').animate({"left": '-200px'}, 500);

	});

	//lorsque l'on passe sur un élément du menu
	jQuery('.sous_menu').mouseenter(function(){
		var id = this.id;
		jQuery(this).children('img').attr('src','images/elements/menu/'+id+'/hover.png');

	});

	jQuery('.sous_menu').mouseleave(function(){
		var id = this.id;
		jQuery(this).children('img').attr('src','images/elements/menu/'+id+'/normal.png');

	});

});

