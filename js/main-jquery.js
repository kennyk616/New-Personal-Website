$(document).ready(function() {
	initScrollPath();
	initializeProjectTabs();
	initializeLinks();
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

function initializeProjectTabs() {
	$("#tab6").css("visibility", "hidden");
	$("#tab7").css("visibility", "hidden");

}

function switchtab(showtab_id) {
	$(".projects .active.tab-pane").css("visibility", "hidden");
	$(showtab_id).css("visibility", "visible");
}

function initScrollPath() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
	// Move to 'home' element
	.moveTo(1600, 50, {
		name : "home"
	})
	// Line to 'projects' element
	.lineTo(600, 850, {
		name : "projects"
	})
	// Arc down and line to 'aboutme'
	.lineTo(600, 1850, {
		name : "aboutme"
	})

	// Continue line to 'contact'
	.lineTo(2750, 2000, {
		name : "contact"
	}).arc(2500, 50, 900, -Math.PI / 2, -Math.PI, true, {
		rotate : Math.PI * 2,
		name : "end"
	});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({
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