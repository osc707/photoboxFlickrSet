Read Me

Photobox Flickr Set

This plugin was based on the code from photobox and infact is an dependent on it.
I have taken the base photobox functionality and incorporated into a new plugin the
ability to use a Flickr Set as the base for the images in the gallery. On
Photobox's homepage, the demo was powered by an ajax call to the Flickr API. I decided
that this would make a great feature and decided to make this plugin to extend Photobox.
This plugin now allows you to have multiple Photobox galleries on one page, each can be
powered by a different photoset from Flickr.

Dependencies
 - Photobox and its dependencies : https://github.com/yairEO/photobox

How to use :

<!DOCTYPE HTML>
<html lang="en">
  <head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
		<script src="photobox/photobox.min.js"></script>
		<script src="photobox/jquery.photoboxFlickrSet.js"></script>
		<link href="photobox/photobox.css" rel="stylesheet" type="text/css" media="all"/>
	</head>
	<body>
		<div id="galleryContainer"></div>
		<script type="text/javascript">
			$(document).ready(function() {
				$('#galleryContainer').photoboxFlickrSet({
					'flickr_API_Key' : 'YOUR_FLICKR_API_KEY',
					'photosetId' : 'FLICKR_PHOTO_SET_ID',
					'usePhotoTitle' : true
				});
			});
		</script>
	</body>
</html>











K6K243
M6K243
