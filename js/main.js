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
	
	(function (snowStorm, undefined) {
		snowStorm.freezeOnBlur = false;
		snowStorm.snowColor = '#BFEFFF';
		snowStorm.snowCharacter = '<span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>';
		snowStorm.flakeWidth = 20;
		snowStorm.flakeHeight = 20;
		
		var decorated = snowStorm.SnowFlake;
		
		snowStorm.SnowFlake = function (type, x, y) {
			if (Math.random() >= 0.5) {
				snowStorm.snowColor = '#BFEFFF';
			}
			else {
				snowStorm.snowColor = '#FFF';
			}
		
			return decorated.call(this, type, x, y);
		};

	})(snowStorm);