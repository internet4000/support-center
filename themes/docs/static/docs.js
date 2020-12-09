import 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'

function addAnchor(element) {
	element.innerHTML = `<a href="#${element.id}">${element.innerText}</a>`
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('body').classList.add('is-loaded')


	docsearch({
		apiKey: '89255c22080c15165cab8c9186becc6b',
		indexName: 'internet_4000',
		inputSelector: '#search',
		debug: true
	});

	var headers = document.querySelectorAll('article h2, article h3')
	if (headers) {
		headers.forEach(addAnchor)
	}
});
