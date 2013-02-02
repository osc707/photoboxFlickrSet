(function($) {
  $.fn.photoboxFlickrSet = function (options) {
		
		var errorMsg = '';
		
		var settings = $.extend({
			'flickr_API_Key' : '',
			'photosetId' : '',
			'usePhotoTitle' : false
		}, options);
		
		// Test that what we need exists
		if (settings.flickr_API_Key.length < 1) {
			errorMsg += 'Flicker API Key is required. \n';
		}
		if (settings.photosetId.length < 1) {
			errorMsg += 'Flicker Photoset Id is required. \n';
		}
		if (this.length < 1) {
			errorMsg += 'DOM Element is missing.';
		}
		
		if (errorMsg.length !== 0) {
			alert(errorMsg);
			return;
		}
		
		var pb = this.photobox({ thumbs:true });
		var galleryDomElemId = 'gallery' + new Date().getTime();
		var galleryContainer = $('<div/>').attr('id', galleryDomElemId).addClass('pbGallery');
		this.html(galleryContainer);
		
		$.ajax({
			url: 'http://api.flickr.com/services/rest/',
			data: {
				format: 'json',
				method: 'flickr.photosets.getPhotos',
				api_key: options.flickr_API_Key,
				photoset_id : options.photosetId
			},
			dataType: 'jsonp',
			jsonp: 'jsoncallback'
		}).done(function (data) {
			var gallery = $('#' + galleryDomElemId), url;
			$.each(data.photoset.photo, function (index, photo) {
				url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret;
				var img;
				if (options.usePhotoTitle) {
					img = $('<img>').prop({'src': url + '_s.jpg', 'title': photo.title});
				}
				else {
					img = $('<img>').prop({'src': url + '_s.jpg', 'title': ''});
				}

				var link = document.createElement('a');
				link.href = url + '_b.jpg';
				link.appendChild(img[0]);
				gallery[0].appendChild(link);

				// lazy show the photos one by one
				img.on('load', function (e) {
					setTimeout(function () { link.className = 'loaded'; }, 20*index);
				});
			});

			// finally, initialize photobox on all retrieved images
			$('#' + galleryDomElemId).find('a').bp;
		});
	};
})(jQuery);
