//console.log('page loaded');

console.log(document);


document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeyup = function () {
	console.log('updating name');
	var name = document.querySelector('#userForm input[type="text"]');
	document.querySelector('#summary h1').innerHTML = name.value;

}

document.querySelector('#userForm input[type="password"]').onkeyup = function () {
	console.log('updating password');
	var password = document.querySelector('#userForm input[type="password"]');
	var paragraphs = document.querySelectorAll('#summary p');
	paragraphs[1].innerHTML = password.value;

}

/* Modify the page so that the name, email and password are displayed in the heading
and paragraph tags when the button is clicked.

Modify the page so that the headings and paragraphs are updated as the user types.
 Remove the button and its event handler.
*/