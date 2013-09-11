(function ($) {
	$.fn.qtab = function (options) {

		var settings = $.extend({
			fadetime: 0
		}, options);

		//loads the content upon any change in the url hash
		$(window).on('hashchange',function(){ 
			var filename = window.location.href.split('#')[1];
			$('.qContent').hide();
			$('.qContent').load(filename, function () {
				$('.qContent').fadeIn(settings.fadetime);
			});
		});
		return this;
	};
}(jQuery));