alert("Hello! I am an alert box!!");


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

	document.querySelectorAll(".drum")[i].addEventListener("click", function() {
	  
		var buttonInnterHTML = this.innerHTML;

		switch (buttonInnterHTML) {
			case "w":
			var audio = New Audio('sounds/tom-1.mp3');
			tom1.play();
			break;

			case "a":
			var audio = New Audio('sounds/tom-2.mp3');
			tom2.play();
			break;

			case "s":
			var audio = New Audio('sounds/tom-3.mp3');
			tom3.play();
			break;

			case "d":
			var audio = New Audio('sounds/tom-4.mp3');
			tom4.play();
			break;

			case "j":
			var audio = New Audio('sounds/snare.mp3');
			snare.play();
			break;

			case "k":
			var audio = New Audio('sounds/crash.mp3');
			crash.play();
			break;

			case "l":
			var audio = New Audio('sounds/kick-bass.mp3');
			kick.play();
			break;




			default: console.log(buttonInnterHTML); 

		}


	

}); 

}
