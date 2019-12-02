/*modal*//*

$(document).ready(function() {
	$(".popupimage").click(function(){
	  	var img = $(this);	
		var src = img.attr('data-src'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src="+src+" class='popup_img' />"+ 
						 "</div>"); 
		$(".popup").fadeIn(800); 
		$(".popup_bg").click(function(){	
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});
	
});*/

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});