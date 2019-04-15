
var notes = new Array();
loadList();
var saved = null;

function addItem() {
	textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	var newItem = {title: itemText, quantity: 1};
	for(var i = 0; i<notes.length; i++) {
		if (newItem.title === notes[i].title) {
			saved = [i];
		}
	}
	if(saved != null){
		notes[saved].quantity+=1;
		saved = null;
	} else {
		notes.push(newItem);
	}
	saveList();
	displayList();
}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	saveList();
	displayList();
}
function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

button = document.getElementById('add');
button.onclick = addItem;


