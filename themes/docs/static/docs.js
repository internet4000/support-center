console.log('hello')

var $prev = $('.nav-prev')
var $next = $('.nav-next')

// allow keyboard control for prev/next links
$(function() {
	$prev.click(function() {
		location.href = $(this).attr('href')
	})
	$next.click(function() {
		location.href = $(this).attr('href')
	})
})

$(document).keydown(function(e) {
	// left arrow key
	if (e.which == '37') $prev.click()
	// right arrow key
	if (e.which == '39') $next.click()
})
