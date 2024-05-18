/**
 * Preserve the scroll position of the page for better experience with hot reload.
 */
function preserveScroll() {
	document.querySelector('body')?.scrollTo(0, parseInt(sessionStorage.getItem('scroll') ?? '0', 10));

	window.addEventListener('beforeunload', () => {
		const scroll = document.querySelector('body')?.scrollTop;
		sessionStorage.setItem('scroll', scroll?.toString() ?? '0');
	});
}

export default preserveScroll;
