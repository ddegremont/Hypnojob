// jQuery.noConflict();

//Fonctions relatives aux rotations de pages

	jQuery('.bp').bind('mousewheel', function(e, delta) {
		console.log('coucou home');
	// jQuery('.bp').click(function() {
		var id = this.id;
		// console.log(delta);
		if (delta>0) { // action "up" de la molette
			switch(id){
				case "1":
					jQuery('.bp').removeClass('rotate');
					jQuery('#2').animate({'width': '100%', 'height': '100%', 'left': '0%','top': '0%'},{ duration: 2000});
					jQuery('#2').addClass('rotate');	
				break;
				case "2":
					jQuery('.bp').removeClass('rotate');
					jQuery('#3').animate({'width': '100%', 'height': '100%', 'left': '0%','top': '0%'},{ duration: 2000});
					jQuery('#3').addClass('rotate');	
				break;
				case "3":
					jQuery('.bp').removeClass('rotate');
					jQuery('#4').animate({'width': '100%', 'height': '100%', 'left': '0%','top': '0%'},{ duration: 2000});
					jQuery('#4').addClass('rotate');	
				break;
				// case "4":
					
			}
				return false;
		}
		else if(delta<0){// action "down"
			// jQuery('.bp').stop();
			switch(id){
				case "2":
					jQuery('.bp').removeClass('rotate');
					jQuery(this).animate({'width': '0','height': '0','left': '50%','top': '50%'},{ duration: 2000});
					jQuery('#1').animate({'font-size': ' 1em'},{ duration: 2000, queue: false });
					jQuery(this).addClass('rotate');
				break;
				case "3":
					jQuery('.bp').removeClass('rotate');
					jQuery(this).animate({'width': '0','height': '0','left': '50%','top': '50%'},{ duration: 2000});
					jQuery('#2').animate({'font-size': ' 1em'},{ duration: 2000, queue: false });
					jQuery(this).addClass('rotate');
				brea
				case "4":
					jQuery('.bp').removeClass('rotate');
					jQuery(this).animate({'width': '0','height': '0','left': '50%','top': '50%'},{ duration: 2000});
					jQuery('#3').animate({'font-size': ' 1em'},{ duration: 2000, queue: false });
					jQuery(this).addClass('rotate');	
				break;
				// case "4":
					
					

			}
		return false;
		}
	});

 


