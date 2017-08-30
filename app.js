$(function() {
	var questionnaire = $('#questionnaire');
	var swiping       = $('#swiping');
	var results       = $('#results');
	var likes         = $('.like');
	var dislikes      = $('.dislike');
	var compliments   = [
		'Your email program is the fairest of them all',
		'Your click through rates are out of this world 🚀🌏',
		'Your unsubs are non existent',
		'You are the 💣 at generating revenue from email',
		'Your re-open rates are elevated ⬆️',
		'It was love at the first welcome email 💌',
		'Your email stands out in a crowded inbox like a 💎 in the rough',
		'Your email program is the Leonardio Decaprio (circa Titantic) of email programs 🚢 💔'
	];

	swiping.hide();
	results.hide();

	$('#Preferences').on('click', function(event) {
		event.preventDefault();
		questionnaire.hide();
		swiping.show();
	});

	$('#Compliment').on('click', function(event){
		event.preventDefault();
		var randomIdx = getRandomIdx(compliments);
		$('#compliment-list').html(compliments[randomIdx]);
	});

	for (var i = 1; i <= likes.length; i++) {
		$('#like-' + i).on('click', null, i, addLikeClickEventActions);
	}

	for (var j = 1; j <= dislikes.length; j++) {
		$('#dislike-' + j).on('click', null, j, addDislikeClickEventActions);
	}

	$('#match-me').on('click', function(event) {
		event.preventDefault();
		swiping.hide();
		results.show();

		$.get('https://api.nytimes.com/svc/mostpopular/v2/mostemailed/arts/1.json?api-key=55d0a13fda6948b3b0d0df93380d7cc9',
			function(response) {
				var randomIdx = getRandomIdx(response.results);
				var title     = response.results[randomIdx].title;
				var author    = response.results[randomIdx].byline;
				var url       = response.results[randomIdx].url;

				$('#events').append(title + ', ' + author);
				$('#event-link').attr('href', url);
			});

		callGooglePlaces();
	});

	function addLikeClickEventActions(event) {
		event.preventDefault();
		$('#results-' + event.data + '-like').show();
		$('#results-' + event.data + '-dislike').hide();
		$('#question-' + event.data).animate({left: '0px', opacity: 0.0 });
		$('#like-' + event.data).animate({left: '0px', opacity: 0.0 });
	  $('#dislike-' + event.data).animate({left: '0px', opacity: 0.0 });
	}

	function addDislikeClickEventActions(event) {
		event.preventDefault();
<<<<<<< HEAD
		$('#results-' + event.data + '-dislike').show();
		$('#results-' + event.data + '-like').hide();
		$('#question-' + event.data).animate({right: '0px', opacity: 0.0 });
	  $('#dislike-' + event.data).animate({right: '0px', opacity: 0.0 });
	  $('#like-' + event.data).animate({right: '0x', opacity: 0.0 });
	}
=======
		$('#results').show();

		$.ajax({
			async       : true,
			crossDomain : true,
			headers     : {"Access-Control-Allow-Origin":"*"},
			url         : 'https://api.nytimes.com/svc/mostpopular/v2/mostemailed/arts/1.json',
			method      : 'GET',
			data        : {
				'api-key' : '55d0a13fda6948b3b0d0df93380d7cc9'
			},
			success     : function(response) {
				var title  = response.results[0].title;
				var author = response.results[0].byline;
				var url    = response.results[0].url;

				$('#events').append(title + ', ' + author);
				$('#event-link').attr('href', url);
			}
		});

		callGooglePlaces();
	});
>>>>>>> 54076ddc58c5b6a0ffd8791167c66bf6e941b26c

	function callGooglePlaces() {
		var dreamDowntown = new google.maps.LatLng(40.7422, -74.0035);
		var map           = new google.maps.Map($('.map'), {
	      center : dreamDowntown,
	      zoom   : 15
	    });
		var service       = new google.maps.places.PlacesService(map);
		var params        = {
				type     : ["restaurant"],
				location : dreamDowntown,
				radius   : 100
			}

		service.nearbySearch(params, placesCallback);
	}

	function placesCallback (results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			var randomIdx = getRandomIdx(results);
			var name      = results[randomIdx].name;
			var address   = results[randomIdx].vicinity;
			var rating    = results[randomIdx].rating;

			$('#eatery').html(name + ', ' + address + ', ' + rating + '  ⭐️ rating ' );
		}
	}

	function getRandomIdx(arr) {
		return Math.floor(Math.random() * arr.length);
	}
});
