$(document).ready(function() {

	$('.panel').click(function(){
		gotoAction.call(this, 'click');

		$(this).find('.unavailable').removeClass('none');

		setTimeout(function(){
		        $('.unavailable').addClass('none');
		},5000);
	});

	$('.panel input').on('keyup',function(){
		charCount = $(this).val().replace(/\s/g, '').length;

		if (charCount >= 4) {
			gotoAction.call(this, 'key');
		}
	});

	function gotoAction(trigger){

		var self = $(this),
			targetURL = self.find('a').attr('href'),
			parent = $('.panel-wrap'),
			target = $(targetURL),
			img = self.find('a').attr('data-img');

		if (trigger === 'key') {
			targetURL = self.parents('.panel').find('a').attr('href'),
			target = $(targetURL),
			img = self.parents('.panel').find('a').attr('data-img');
		}

		if (targetURL) {
			parent.addClass('none');
			target.removeClass('none');
			// $('.window').css('background-image','url(../../assets/img/'+ img + '.png)');
			// $('.panel, .key, .menubar').css('background-image','url(../../assets/img/'+ img + '_blur.png)');
		}

		console.log(targetURL);

		if (targetURL === '#mainmenu') {
			$('.menubar').toggleClass('none');
		} 
	}

	function animation(){
		var self = $(this),
		element = $('.panel');

		element.each(function(){
			
		});
	}



	


}); // close document.ready


