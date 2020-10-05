
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	  
		var buttonInnterHTML = this.innerHTML;

		switch (buttonInnterHTML) {
			case "w":
			var audio = New Audio("sounds/tom-1.mp3");
			audio.play();
			break;

			case "w":
			var audio = New Audio("sounds/tom-1.mp3");
			audio.play();



			default:

		}


	

}); 

}
