
// Commented out script runs backwards and forwards

// var classes = ["show1", "show2", "show3", "show4", "show5", "show6", "show7", "show8", "show9"];

// $(document).ready(function() {

// 	var i = 0;

// 	$(".buttons").on("click", ".button-next", function() {
// 		var currentClass = document.getElementById("carousel").className;
// 		if (i <= 7) {
// 			i++;
// 		} else {
// 			i = 0;
// 		}
// 		$("#carousel").removeClass(currentClass).addClass(classes[i])
// 	})

// 	$(".buttons").on("click", ".button-prev", function() {
// 		var currentClass = document.getElementById("carousel").className;
// 		if (i == 0) {
// 			i = 8;
// 		} else {
// 			i--;
// 		}
// 		$("#carousel").removeClass(currentClass).addClass(classes[i])
// 	})

// })

var panelWidth = document.getElementById("carouselContainer").offsetWidth;
var numberOfPanels = document.getElementById("carousel").children.length;
var tz = Math.round( ( panelWidth / 2 ) / Math.tan( Math.PI / numberOfPanels ) );
var rotateVal = 0;


// $("#carousel").css({ "transform" : "translateZ( -" + tz + "px )" })

$(".buttons").on("click", ".button-next", function() {
	rotateVal = rotateVal - 40;
	var rotateY = "rotateY(" + rotateVal + "deg)";
	$("#carousel").css({ "transform" : "translateZ( -" + tz + "px )" + " " + rotateY });
})

$(".buttons").on("click", ".button-prev", function() {
	rotateVal = rotateVal + 40;
	var rotateY = " rotateY(" + rotateVal + "deg)";
	$("#carousel").css({ "transform" : "translateZ( -" + tz + "px )" + " " + rotateY });
})

