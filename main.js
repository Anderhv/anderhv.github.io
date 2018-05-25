
window.onload = function() {
	console.log('JavaScript loaded')
	
};


function init() {
	console.log("Initializing")
	var lyd1 = document.getElementById("Fender")
	console.log(lyd1)
}

function playAudio() {
	var asd = document.getElementById("Fender");
	playAudioz(asd)
} 


function playAudioz(sound) {
	//var asd = document.getElementById("Fender");
	sound.play()
} 


function pauseAudio() { 
	var asd = document.getElementById("Fender");

    asd.pause(); 
} 
