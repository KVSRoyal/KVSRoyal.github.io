document.getElementById("hamburger").addEventListener("click", hamburgerClicked);

function hamburgerClicked() {
	var navLinks = document.getElementById("nav-links");
	if (navLinks.className === "closed") {
		navLinks.className = "open";
	} else {
		navLinks.className = "closed";
	}
	
	var hamburger = document.getElementById("hamburger");
	if (hamburger.className.baseVal === "closed") {
		hamburger.className.baseVal = "open";
	} else {
		hamburger.className.baseVal = "closed";
	}
	
}