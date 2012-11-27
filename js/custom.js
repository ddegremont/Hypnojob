jQuery.noConflict();

jQuery(document).ready(function(){


	width = jQuery('.logo').children('img').width();
	var left = screen.width;
	left = (left/2)-(width/2);
	jQuery('.logo').children('img').css('left', left);
	var maxPage = 7;



/****************************************
*****************************************
		Fonction rotation de page
*****************************************
****************************************/
	
	//Tableau des pages 

	//fonction au scroll
	jQuery('.bp').bind('mousewheel', function(e, delta) {

		//On récupère l'id de la div puis on crée deux autres variables
		//avec n+1 et n-1

		//faire en sorte que l'utilisateur ne puisse pas scroller plusieurs fois...


		var id = this.id;
		var idLess = parseInt(id)-1;
		var idMore = parseInt(id)+1;

			if (delta<0) {

				if((jQuery(this).hasClass('active') && id<maxPage)&& !(jQuery('#'+idLess).hasClass('move'))){
					jQuery(this).stop();
					jQuery('#'+id).addClass('back');
					jQuery('#'+id).addClass('move');

					jQuery('#'+idMore).addClass('active');
					jQuery('#'+idMore).addClass('rotate');
					jQuery('#'+id).removeClass('active');
					setTimeout(function(){

						jQuery('#'+id).removeClass('move');


					},2000)

				}


			}else{
				// action "down" de la molette
				if(id!=1){
					if(jQuery(this).hasClass('active')&& !(jQuery('#'+idMore).hasClass('move'))){

					jQuery(this).stop();

					jQuery('#'+id).removeClass('active');
					jQuery('#'+id).removeClass('rotate');
					jQuery('#'+idLess).addClass('active');
					jQuery('#'+idLess).removeClass('back');

					}

				}
			}


	});


	//function au click sur le menu
	jQuery('.lien_menu').click(function(event){
		// on récupère le nom de la page visée
		event.preventDefault();
		var id = jQuery(this).attr('id');
		var idActive = parseInt(jQuery('.active').attr('id'));
		id = id.substring(5,id.length);
		//on récupère le numéro de la page
		var pages = new Array();		
			pages["home"] = '1';
			pages["presentation"] = '2';
			pages["forfaits"] = '3';
			pages["hypnoses"] = '4';
			pages["maps"] = '5';
			pages["impressions"] = '6';
			pages["contact"] = '7'; 
		var numPage = parseInt(pages[id]);
		

		//si la page séléctionner est différente de 1 et si la page active est différente de 1
		if(numPage!=idActive){
			if(numPage>idActive){
				var nb= (numPage-idActive)+1;
				var t = 1;
				var i= idActive;
				while(nb!=0){
					goNext(i,t);
					i++; t++; nb--;
				}					
			}else{
				var nb= (idActive-numPage);
				var t = 1;
				var i= idActive;
				while(nb!=0){
					goPrev(i,t);
					i--; t++; nb--;
				}	
			}
		}
		return false;
	});

	function goNext(e,t){
		var idMore = parseInt(e)+1;
		var id = parseInt(e);
		var idLess = parseInt(e)-1;
		var time=2000;
			setTimeout(function(){
				if(jQuery('#'+idLess).hasClass('active') ){
					jQuery('#'+idLess).stop();
					jQuery('#'+idLess).addClass('back');
					jQuery('#'+e).addClass('active');
					jQuery('#'+e).addClass('rotate');
					jQuery('#'+idLess).removeClass('active');
				}
			},2000*(t-2));
	}

	function goPrev(e,t){
		var idMore = e+1;
		var id = e;
		var idLess = e-1;
		setTimeout(function(){
				if(id!=1){
					if(jQuery('#'+idLess).hasClass('back')){
					jQuery('#'+e).stop();
					jQuery('#'+idLess).removeClass('back');
					jQuery('#'+e).removeClass('active');
					jQuery('#'+e).removeClass('rotate');
					jQuery('#'+idLess).addClass('active');
					}
				}
		},2000*(t-1));		
	}

}); 