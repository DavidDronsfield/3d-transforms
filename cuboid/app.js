var classes = ["show-front", "show-back", "show-right", "show-left", "show-top", "show-bottom"];

$(document).click(function(event) {
    var child = event.target;
	var parent = child.parentNode;
	var index = Array.prototype.indexOf.call(parent.children, child);
	var currentClass = document.getElementById("cube").className;
	$("#cube").removeClass(currentClass);
	$("#cube").addClass(classes[index]);
});