    // Countdown

    var date = new Date(config.countdown.year,
                        config.countdown.month - 1,
                        config.countdown.day,
                        config.countdown.hour,
                        config.countdown.minute,
                        config.countdown.second),
        $countdownNumbers = {
            days: $('#countdown-days'),
            hours: $('#countdown-hours'),
            minutes: $('#countdown-minutes'),
            seconds: $('#countdown-seconds')
        };
		
	if(date > new Date()) {
		$('#countdown').countdown(date)
					.on('update.countdown', function(event) {
					$countdownNumbers.days.text(event.offset.totalDays);
					$countdownNumbers.hours.text(('0' + event.offset.hours).slice(-2));
					$countdownNumbers.minutes.text(('0' + event.offset.minutes).slice(-2));
					$countdownNumbers.seconds.text(('0' + event.offset.seconds).slice(-2));
					}).on('finish.countdown', function(event) {
						$('#countdown').fadeOut();
					});
	}
	else {
		$('#countdown').hide();
	}
	
	
	var mapcanvas = document.getElementById('map-canvas');
	if(mapcanvas){
	
	      function initialize() {
			var location = { lat: 53.373379, lng: -1.470429};
	  		var mapOptions = {
			zoom: 16,
			center: location,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		};
		
        var map = new google.maps.Map(mapcanvas,
            mapOptions);
	  
	   var contentString = 'dotnetsheff';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: "dotnetsheff"
		});

		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map, marker);
		});
	  }
      google.maps.event.addDomListener(window, 'load', initialize);
	  }
