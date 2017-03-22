$(document).ready(function() {

	// Product Grid (Overlay)

	$('.content_sidebar_wrapper .content .inner').append('<div class="product-overlay"></div>');

	$('.product_grid_wrapper .product').hover(function(){
		$('.product-overlay').addClass('active');
	}, function(){
		$('.product-overlay').removeClass('active');
	});

	console.log('working');

	// Dropdown

	$( ".dropdown" ).selectmenu();


}); // close document.ready


