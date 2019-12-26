document.addEventListener('DOMContentLoaded', function() {
	setCopyrightText();
})

function setCopyrightText() {
	var currentYear = new Date().getFullYear()
	var element = document.getElementById("copyright__text")
	element.innerText = currentYear
}