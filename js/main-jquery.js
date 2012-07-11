$(document).ready(function() {
	jQuery('.jcarousel-skin-tango').jcarousel({
		scroll : 2
	});
	initScrollPath();
    initializeProjectTabs();
    initializeLinks();
		
});

function initializeProjectTabs(){
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
		.moveTo(400, 50, {name: "home"})
		// Line to 'projects' element
		.lineTo(600, 850, {name: "projects"})
		// Arc down and line to 'aboutme'
		//.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
	//	.lineTo(600, 1650, {name: "aboutme"})
    .lineTo(25, 1650, {name: "aboutme"})
    
		// Continue line to 'contact'
		//.lineTo(2250, 1850, {name: "contact"})
    .lineTo(2700, 1850, {name:"contact"})
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors, homepage links, and paragraph links
	replacePath($("nav"));
	replacePath($(".home"));
	replacePath($("p"));	
	/* ===================================================================== */

}

function replacePath(elem) {
	elem.find("a").each(function()	{
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
function initializeLinks() {
	var list_of_links = $('.targetblank');
	for (var i in list_of_links) {
		list_of_links[i].target = '_blank';
	}
}