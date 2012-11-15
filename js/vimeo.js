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

			// Set the user's thumbnail and the page title
			jQuery('#stats').prepend('<img id="portrait" src="' + videos[0].user_portrait_medium + '" />');
			jQuery('#stats h2').text("Vidéos de l'utilisateur " + videos[0].user_name);

			// Load the first video
			getVideo(videos[0].url);

			// Add the videos to the gallery
			for (var i = 0; i < videos.length; i++) {
				var html = '<li><a href="' + videos[i].url + '"><img src="' + videos[i].thumbnail_medium + '" class="thumb" />';
				html += '<p>' + videos[i].title + '</p></a></li>';
				jQuery('#thumbs ul').append(html);
			}

			// Switch to the video when a thumbnail is clicked
			jQuery('#thumbs a').click(function(event) {
				event.preventDefault();
				getVideo(this.href);
				return false;
			});

		}

		function switchVideo(video) {
			jQuery('#embed').html(unescape(video.html));
		}