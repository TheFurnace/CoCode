function pullClassID () {
	var id = document.getElementById('classIdInput').value.toLowerCase();
	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem("classID", id);
	} else {
	    console.log("NO LOCAL STORAGE SUPPORT. FATAL ERROR");
	}

}