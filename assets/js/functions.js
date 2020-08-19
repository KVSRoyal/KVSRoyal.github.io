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

function anywhereClicked() {
	var target = event.target;
	var hamburger = document.getElementById("hamburger");
	if (target === hamburger) {
		return;
	}
	
	// If the hamburger is showing and the nav links are open, close it
	var width = window.innerWidth;
	var navLinks = document.getElementById("nav-links");
	if (width < 1000 && navLinks.className === "open") {
		hamburger.setAttribute("class", "closed");
		navLinks.className = "closed";
	}
}