$(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
	  navigator.serviceWorker
		.register("/web1/serviceWorkers.js")
		.then(res => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err))
	})
  }