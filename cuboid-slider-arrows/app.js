var setCubeDimensions = function() {
	var container = $("#cubeContainer");
	var containerWidth = container.width();
	var panelSide = Math.round( containerWidth / 2 );
	var tz = Math.round( panelSide / 2 );

	container.height( panelSide );
	$(".setZ").css({ "-webkit-transform" : "translateZ( " + tz + "px )" });
	$(".setZ").css({ "transform" : "translateZ( " + tz + "px )" });
}

var rotateCubes = function() {

	var classes = ["show-front", "show-back", "show-right", "show-left", "show-top", "show-bottom"];
	var classesIndex1 = 0;
	var classesIndex2 = 1;
	
	$(".controls").on("click", ".arrowRight", function() {
		if (classesIndex1 >= 5) {
			$(".cube1").removeClass(classes[classesIndex1]);
			$(".cube2").removeClass(classes[classesIndex2]);
			classesIndex1 = 0;
			classesIndex2++;
			$(".cube1").addClass(classes[classesIndex1]);
			$(".cube2").addClass(classes[classesIndex2]);
		} else if (classesIndex2 >= 5) {
			$(".cube1").removeClass(classes[classesIndex1]);
			$(".cube2").removeClass(classes[classesIndex2]);
			classesIndex1++;
			classesIndex2 = 0;
			$(".cube1").addClass(classes[classesIndex1]);
			$(".cube2").addClass(classes[classesIndex2]);
		} else {
			$(".cube1").removeClass(classes[classesIndex1]);
			$(".cube2").removeClass(classes[classesIndex2]);
			classesIndex1++;
			classesIndex2++;
			$(".cube1").addClass(classes[classesIndex1]);
			$(".cube2").addClass(classes[classesIndex2]);
		}
	});

	$(".controls").on("click", ".arrowLeft", function() {
		if (classesIndex1 <= 0) {
			$(".cube1").removeClass(classes[classesIndex1]);
			$(".cube2").removeClass(classes[classesIndex2]);
			classesIndex1 = 5;
			classesIndex2--;
			$(".cube1").addClass(classes[classesIndex1]);
			$(".cube2").addClass(classes[classesIndex2]);
		} else if (classesIndex2 <= 0) {
			$(".cube1").removeClass(classes[classesIndex1]);
			$(".cube2").removeClass(classes[classesIndex2]);
			classesIndex1--;
			classesIndex2 = 5;
			$(".cube1").addClass(classes[classesIndex1]);
			$(".cube2").addClass(classes[classesIndex2]);
		} else {
			$(".cube1").removeClass(classes[classesIndex1]);
			$(".cube2").removeClass(classes[classesIndex2]);
			classesIndex1--;
			classesIndex2--;
			$(".cube1").addClass(classes[classesIndex1]);
			$(".cube2").addClass(classes[classesIndex2]);
		}
	});
}

rotateCubes();
setCubeDimensions();

//NEEDS TO BE RE-WRITTEN AS 2 OBJECTS


