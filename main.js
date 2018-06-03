
window.onload = function() {
	var form = document.getElementById("asdo");
	console.log(form);
	
var firebaseref = firebase.database().ref();

form.onsubmit = function() {
	var elements = form.elements;
	for (var i = 0, element; element = elements[i++];) {
		if (element.type === "radio" && element.checked)
			firebaseref.push().set(element.value)

	}

    //var ans1 = form.elements["guitar1"];
    //var ans2 = form.elements["guitar2"];
    //var ans1 = form.elements["guitar1"];
    //var ans1 = form.elements["guitar1"];
   	//var ans1 = form.elements["guitar1"];

	//firebaseref.child("Ans1").set(ans1.value)
	window.alert("Answer submitted!")
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

};
