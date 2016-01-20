var profileDiv = getClass("profile");

function getClass(c){
	return document.getElementsByClassName(c);
}

function alertAllNames(pDiv){

	var len = pDiv.length;
	var names = [];

	for (var i = len - 1; i >= 0; i--) {
		
		names.push(pDiv[i].childNodes[1].innerHTML+" ");
	} 

	alert("DE PROFILER SOM FINNS ÄN SÅ LÄNGE ÄR: "+names);
}

alertAllNames(profileDiv);