'use strict';

const addEvents = function(elements, evType, callback) {
	elements.forEach(element => element.addEventListener(evType, callback));
}

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");


addEvents(searchTogglers, "click", function() {
	searchBox.classList.toggle("active");
});