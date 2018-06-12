$(document).ready(function() {
  $('.slick-container').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3
  });
});

var clock = $('.timer').FlipClock(3600, {
		countdown: true
	});