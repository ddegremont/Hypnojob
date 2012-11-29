<div id="conteneur">
	<div id="fb-root"></div>
</div>
	
	<script src="https://connect.facebook.net/en_US/all.js" type="text/javascript"></script>
	<script type="text/javascript">
	    jQuery(document).ready(function () {

	        FB.init({ 
	            appId: '306781619435395',
	            cookie: true, 
	            xfbml: true, 
	            status: true });

	        FB.getLoginStatus(function (response) {
	            if (response.authResponse) {

	                var token = response.authResponse.accessToken;
	                alert(token);

	                feedFacebook(token)

	            } else {
	                jQuery('#conteneur').html('<h1>Connexion FB impossible.</h1>');
	            }
	        });

	        	function feedFacebook(token){

	        		var url = 'https://graph.facebook.com/448555521854513?access_token='+token+'?fields=feed';

					jQuery.getJSON(url, function(datas) {

						jQuery('<article />', {
							id: 'article1'
						}).appendTo('#conteneur');

						for (var i = 0 ; i <= datas.feed.data.length - 1; i++) {
						  /*if(datas.feed.data[i].from.name!="HypnoJob")
						  {*/
						  	jQuery('#article1').append('<h1>'+datas.feed.data[i].from.name+'</h1>'); //nom	
							if(typeof(datas.feed.data[i].story)!="undefined") {
								jQuery('#article1').append('<h2>'+datas.feed.data[i].story+'</h2>'); //historique
							};
						  
							if(typeof(datas.feed.data[i].message)!="undefined") {
								jQuery('#article1').append('<h3>'+datas.feed.data[i].message+'</h3>');
								 console.log(datas.feed.data[i].comments);
								 	if(typeof(datas.feed.data[i].comments.data)!="undefined") {

										for (var j = 0 ; j <= datas.feed.data[i].comments.data.length - 1; j++) {
											if(typeof(datas.feed.data[i].comments.data[j].message)!="undefined") {
												jQuery('#article1').append('<span>'+datas.feed.data[i].comments.data[j].from.name+' : '+datas.feed.data[i].comments.data[j].message+'</span><br/>');
											};
										};

									};
							};
						jQuery('#article1').append('__<br/>');
						};
					});
				};

	    });
	</script>