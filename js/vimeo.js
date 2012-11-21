		var apiEndpoint = 'http://vimeo.com/api/v2/';
		var oEmbedEndpoint = 'http://vimeo.com/api/oembed.json'
		var oEmbedCallback = 'switchVideo';
		var videosCallback = 'setupGallery';
		var vimeoUsername = '14777579';

		// Choper les vidéos de l'utilisateur
		jQuery(document).ready(function() {
			jQuery.getScript(apiEndpoint + vimeoUsername + '/videos.json?callback=' + videosCallback);
		});

		function getVideo(url) {
			jQuery.getScript(oEmbedEndpoint + '?url=' + url + '&width=605&height=336&color=3296c8&callback=' + oEmbedCallback);
		}

		function setupGallery(videos) {

			// CHarger la première vidéo
			getVideo(videos[0].url);

			// Ajoute les vidéos à la gallerie
			for (var i = 0; i < 4; i++) {
				var html = '<li><a href="' + videos[i].url + '"><img src="' + videos[i].thumbnail_medium + '" class="thumb" />';
				html += '<p>' + videos[i].title + '</p></a></li>';
				jQuery('#thumbs ul').append(html);
			}

			// Passer la vidéo quand on clique sur une vignette
			jQuery('#thumbs a').click(function(event) {
				event.preventDefault();
				getVideo(this.href);
				return false;
			});

		}

		function switchVideo(video) {
			var titreVideo = '<h2 id="videoTitre">'+video.title+'</h2>';
			jQuery('#videoTitre').replaceWith(titreVideo);
			jQuery('#embed').html(unescape(video.html));
		}