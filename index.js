// Initialize
document.addEventListener('DOMContentLoaded', () => {
	
	// Navbar hamburger expansion toggle for mobile
	document.querySelector('#logobar .hamburger').addEventListener('click', event => {
		event.preventDefault();
		document.querySelector('#navbar').classList.toggle('expanded');
	});
});
