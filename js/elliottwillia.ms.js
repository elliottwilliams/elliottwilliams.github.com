$().ready(function(){
	// set up background
	$.backstretch("img/bg.jpg", {centeredX: false});
	
	// open-close contact aside
	var contactOpen = false;
	$('a[href~="#contact"]').click(function(event){
		event.preventDefault();
		
		if (!contactOpen) {
			$('aside#contact').slideDown();
			$.smoothScroll({ // scroll for desktops
	        	scrollElement: $('#description'),
	        	scrollTarget: 'aside#contact',
	        });
	        $.smoothScroll({ // scroll for mobile (ok for both to run)
	        	scrollElement: null,
	        	scrollTarget: 'aside#contact'
	        });	
	        contactOpen = true;
		}
		
		else {
			$('aside#contact').slideUp();
			$.smoothScroll({
	        	scrollElement: $('#description'),
	        	scrollTarget: '#description p:first-of-type',
	        	afterScroll: function(){
			        contactOpen = false;
	        	}
	        });
	        $.smoothScroll({
		        scrollElement: null,
		        scrollTarget: '#description p:first-of-type'
	        });
		}				
	});
});