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