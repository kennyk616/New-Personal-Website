$(document).ready(function() {
	initScrollPath();
	initializeLinks();
	$(".gallery a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed:'normal',
		theme:'facebook',
		slideshow:3000, 
		autoplay_slideshow: false,
		autoplay: false,
		social_tools: false,
		deeplinking: false,
		overlay_gallery: false,
        default_width: 800,
        default_height: 490
	});
    
});

//this is only for firefox
$("html").keydown(function(event) {
	var target = event.target.nodeName;
	var isInput = !(target == "TEXTAREA" || target == "INPUT");
	if (isInput) {
		switch(event.keyCode) {
			case 32:
			//space
			case 33:
			//pgup
			case 34:
			//pgdn
			case 35:
			//end
			case 36:
			//home
			case 37:
			//left
			case 38:
			//up
			case 39:
			//right
			case 40:
				//down
				return false;
		}
	}
});

function initScrollPath() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
	// Move to 'home' element
	
	.moveTo(1600, 50, {
		name : "home"
	})
	
	.lineTo(600, 1050, {
		name: "projects"
	})
	
	.lineTo(1600, 2050, {
		name: "aboutme"
	})
	
	.lineTo(2600, 1050, {
		name: "contact"
	})
	
	.lineTo(1600, 50, {
		name: "end"
	})	
	
	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({
		//drawPath: true,
		wrapAround : true
	});

	// Add scrollTo on click on the navigation anchors, homepage links, and paragraph links
	replacePath($("nav"));
	replacePath($(".home"));
	replacePath($("p"));
	/* ===================================================================== */
}

function replacePath(elem) {
	elem.find("a").each(function() {
		var link = $(this).attr("href");
		if (link[0] == "#") {
			var target = $(this).attr("href").replace("#", "");
			$(this).click(function(e) {
				e.preventDefault();

				// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
				// for extra easing functions like the one below
				$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
			});
		}
	});
}

function initializeLinks() {
	var list_of_links = $('.targetblank');
	for (var i in list_of_links) {
		list_of_links[i].target = '_blank';
	}
}