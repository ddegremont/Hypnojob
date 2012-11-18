		var apiEndpoint = 'http://vimeo.com/api/v2/';
		var oEmbedEndpoint = 'http://vimeo.com/api/oembed.json'
		var oEmbedCallback = 'switchVideo';
		var videosCallback = 'setupGallery';
		var vimeoUsername = 'hetic';

		// Get the user's videos
		jQuery(document).ready(function() {
			jQuery.getScript(apiEndpoint + vimeoUsername + '/videos.json?callback=' + videosCallback);
		});

		function getVideo(url) {
			jQuery.getScript(oEmbedEndpoint + '?url=' + url + '&width=605&height=336&color=9ECC3D&callback=' + oEmbedCallback);
		}

		function setupGallery(videos) {

			// CHarger la première vidéo
			getVideo(videos[0].url);

			// Ajoute les vidéos à la gallerie
			for (var i = 0; i < 3; i++) {
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
			jQuery('#stats').append('<h2>'+video.title+'</h2>');
			jQuery('#embed').html(unescape(video.html));
		}