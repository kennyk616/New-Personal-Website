window.onload = function() {
	// Code if document.getElementByClassName() doesn't exist
	if (document.getElementsByClassName == undefined) {
		document.getElementsByClassName = function(className) {
			var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
			var allElements = document.getElementsByTagName("*");
			var results = [];

			var element;
			for (var i = 0; ( element = allElements[i]) != null; i++) {
				var elementClass = element.className;
				if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
					results.push(element);
			}

			return results;
		}
	}

	var list_of_links = document.getElementsByClassName('targetblank');
	for (var i in list_of_links) {
		list_of_links[i].target = '_blank';
	}
}

jQuery(document).ready(function() {
	jQuery('.jcarousel-skin-tango').jcarousel({
		scroll : 2
	});
	switchtab("#tab6", "#tab5");
	jQuery('#tabs a').click(function(e) {
		e.preventDefault();
		jQuery(this).tab('show');
	})
});

function switchtab(hidetab, showtab) {
	$(hidetab).css("opacity", "0");
	$(showtab).css("opacity", "1");
	$(showtab + " .youtube").css("display", "inline");
	$(hidetab + " .youtube").css("display", "none");
	$(hidetab).css("z-index", "-1");
	$(showtab).css("z-index", "1");
}

$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "start"})
		// Line to 'description' element
		.lineTo(600, 850, {name: "projects"})
		// Arc down and line to 'syntax'
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		.lineTo(600, 1650, {
			name: "aboutme"
		})
		// Continue line to 'scrollbar'
		.lineTo(2250, 1650, {
			name: "contact"
		})
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors and homepage links
	replacePath($("nav"));
	replacePath($(".home"));
	replacePath($(".page-title"));
	replacePath($("p"));
	
	/* ===================================================================== */

}

function replacePath(div) {
	div.find("a").each(function()	{
	var link = $(this).attr("href");
	if(link[0]=="#"){
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
