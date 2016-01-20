var profileDiv = getClass("profile");

function getClass(c){

	return document.getElementsByClassName(c);
}

function addProfile(pDiv, name, message){
	var h2 = document.createElement("h2");
	var p = document.createElement("p");

	h2.innerHTML = name;
	p.innerHTML = message;

	profileDiv.appendChild(h2);
	profileDiv.appendChild(p);
}

addProfile(profileDiv,"Martin Nilsson", "<3 JS");





