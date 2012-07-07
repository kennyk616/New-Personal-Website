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
