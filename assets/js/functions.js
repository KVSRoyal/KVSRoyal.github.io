function hamburgerClicked() {
	var navLinks = document.getElementById("nav-links");
	if (navLinks.className === "closed") {
		navLinks.className = "open";
	} else {
		navLinks.className = "closed";
	}
	
	var hamburger = document.getElementById("hamburger");
	if (hamburger.className.baseVal === "closed") {
		hamburger.setAttribute("class", "open");
	} else {
		hamburger.setAttribute("class", "closed");
	}
}