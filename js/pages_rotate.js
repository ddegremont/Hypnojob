jQuery.noConflict();

jQuery(document).ready(function(){

//Fonctions relatives aux rotations de pages
	jQuery('.bp').bind('mousewheel', function(event, delta) {
	// jQuery('.bp').click(function() {
		var id = this.id;
		var id2 = parseInt(id)+1
		var id2 = parseInt(id)-1

		if (delta>0) { // action "up" de la molette

			jQuery('.bp').removeClass('rotate');

			jQuery('#'+id2).animate({'width': '100%'},{ duration: 2000, queue: false });
			jQuery('#'+id2).animate({'height': '100%'},{ duration: 2000, queue: false });
			jQuery('#'+id2).animate({'left': '0%'},{ duration: 2000, queue: false });
			jQuery('#'+id2).animate({'top': '0%'},{ duration: 2000, queue: false });
			jQuery('#'+id2).addClass('rotate');	



		}
		else if(delta<0 & id!='1'){// action "down"
			jQuery('.bp').removeClass('rotate');

			// disparition de la page 
			jQuery(this).animate({'width': '0'},{ duration: 2000, queue: false });
			jQuery(this).animate({'height': '0'},{ duration: 2000, queue: false });
			jQuery(this).animate({'left': '50%'},{ duration: 2000, queue: false });
			jQuery(this).animate({'top': '50%'},{ duration: 2000, queue: false });
			jQuery('#'+id3).animate({'font-size': ' 1em'},{ duration: 2000, queue: false });

			jQuery(this).addClass('rotate');
			
		}
			return false;
	});

}); 