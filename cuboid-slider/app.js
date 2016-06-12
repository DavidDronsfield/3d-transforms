var setCubeDimensions = function() {
	var container = $("#cubeContainer");
	var containerWidth = container.width();
	var panelSide = containerWidth / 2;
	var tz = Math.round( panelSide / 2 );

	container.height( panelSide );
	$(".setZ").css({ "-webkit-transform" : "translateZ( " + tz + "px )" });
	$(".setZ").css({ "transform" : "translateZ( " + tz + "px )" });
}

var rotateCubes = function() {

	var classes = ["show-front", "show-back", "show-right", "show-left", "show-top", "show-bottom"];

	$(".controls").click(function(event) {

	    var child = event.target;
		var parent = child.parentNode;
		var index = Array.prototype.indexOf.call(parent.children, child);
		var currentClass1 = document.getElementsByClassName("cube1")[0].classList.item(2);
		var currentClass2 = document.getElementsByClassName("cube2")[0].classList.item(2);

		$(".cube1").removeClass(currentClass1);
		$(".cube1").addClass(classes[index]);

		$(".cube2").removeClass(currentClass2);
		if (classes[index+1] == undefined) {
			$(".cube2").addClass(classes[0]);
		} else {
			$(".cube2").addClass(classes[index+1]);
		}
	});
}

setCubeDimensions();
rotateCubes();