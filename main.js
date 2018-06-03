
function playAudio(filenumber) {
	var sound = document.getElementById(filenumber.toString());
	sound.play()
};


function readSolution() {
	var solutionRef = firebase.database().ref().child("Solution")
	var sols = {}
	solutionRef.on('value',function(datasnapshot){
		//sols["guitar1"] = datasnapshot.val()["guitar1"]
		//var g1 = datasnapshot.val()["guitar1"]
	})
}


window.onload = function() {
	var form = document.getElementById("submissionForm");
	var firebasedb = firebase.database();

form.onsubmit = function() {
	var elements = form.elements;
	var name = form.elements["name"];
	var submission = {};
	submission["name"] = name.value;
	for (var i = 0, element; element = elements[i++];) {
		if (element.type === "radio" && element.checked)
			submission[element.name] = element.value;
	}
   	firebasedb.ref().push().set(submission)
	window.alert("Answer submitted!")
}

};
