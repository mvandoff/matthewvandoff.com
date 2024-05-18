/**
 * Changes the background color of the body when the 'contact' section is visible
 */
function colorSwap() {
	const target = document.getElementById('contact');
	const html = document.querySelector('html');
	if (!target || !html) return;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					html.classList.add('end');
				} else {
					html.classList.remove('end');
				}
			});
		},
		{
			root: null, // observes entries relative to the viewport
			threshold: 0.5, // trigger when 50% of 'contact' is visible
		},
	);

	observer.observe(target); // Start observing the 'contact' element
}

export default colorSwap;
