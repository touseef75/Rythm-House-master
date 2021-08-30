

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});

// Block scrolling
	
$('.nav li a').bind('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			// scrollTop: $(anchor.attr('href')).offset().top
		}, 1200);
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* play list music button */
$(document).ready(function(){
	
	var obj = document.createElement("audio");
	obj.src = "../HTML/audio/audio.mp3";
	obj.volume = 1;
	obj.autoPlay = true;
	obj.preLoad = true;       
	
	$('#playNowBtn').click(function(e){
		var $playNowButton = $(this);																/* button variable */
		var $playlist = $playNowButton.parent().parent();						/* play list section class */
		var $disk			= $playlist.children().children('.disk');			/* disk image */
		
		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
	});
	
});
 
/* *************************************** */
// One page navigation 
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling
	
$('.nav a').bind('click', function(e){
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* Owl-Carousel Client Slider */
 
$(document).ready(function() {
  $("#portfolioOwl").owlCarousel({
		autoPlay: 3000,
		slideSpeed: 1200,
	  paginationSpeed : 500,
	  stopOnHover: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [991,3],
    itemsTabletSmall : [767,2]
  }); 
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */  

$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.totop').fadeIn();
		} 
		else
		{
			$('.totop').fadeOut();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1200);
	});
});
function dropmenu($){
	window.location = $
}

var isPlaying = false;
function playMusic($, is){
	const myAudio = document.getElementById($) ;
    isPlaying ? pause(is) : play(is)
	myAudio.onplaying = function() {
		isPlaying = true;
	  };
	  myAudio.onpause = function() {
		isPlaying = false;
	  };
	  function play(is){
		myAudio.play();
		 is.classList.remove('fa-play-circle-o');
		 is.classList.add('fa-pause-circle-o')
	  }
	  function pause(is){
		myAudio.pause();
		 is.classList.remove('fa-pause-circle-o');
		 is.classList.add('fa-play-circle-o')
	  }
}

