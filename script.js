const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuToggle.addEventListener("click", function toggleMenu() {
	const isOpen = !mobileMenu.classList.contains("hidden");
	mobileMenu.classList.toggle("hidden");
	menuToggle.setAttribute("aria-expanded", !isOpen);
	if (isOpen) {
		menuIcon.innerHTML =
			'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>';
	} else {
		menuIcon.innerHTML =
			'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
	}
});
