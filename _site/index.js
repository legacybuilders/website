document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#logobar .hamburger').addEventListener('click', event => {
		event.preventDefault();
		document.querySelector('#pagelinks').classList.toggle('expanded');
	});
});
