function pullClassID () {
	var code = document.getElementById('classIdInput').value.toLowerCase();
	var name = document.getElementById('nameInput').value;
	console.log(name + code + " added.");
	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem("code", code);
    	localStorage.setItem("name", name);

	} else {
	    console.log("NO LOCAL STORAGE SUPPORT. FATAL ERROR");
	}

}