function addAnchor(element) {
	element.innerHTML = `<a href="#${element.id}">${element.innerText}</a>`
}

document.addEventListener('DOMContentLoaded', function () {
	var headers = document.querySelectorAll('article h2, article h3')
	if (headers) {
		headers.forEach(addAnchor)
	}
});
