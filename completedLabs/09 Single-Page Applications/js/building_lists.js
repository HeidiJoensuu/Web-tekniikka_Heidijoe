
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var h1 = document.createElement('h1');
document.body.appendChild(h1);

var books = data.books;

var list = document.createElement('table');

var keys = Object.keys(books[0]);

var trhead = document.createElement('tr');
for (var i=0; i < keys.length; i++) {
	var head = document.createElement('th');
	head.innerHTML=keys[i];
	trhead.appendChild(head);
}
list.appendChild(trhead);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var title = document.createElement('td');
	var year = document.createElement('td');
	var isbn = document.createElement('td');
	var authors = document.createElement('td');
	var tr = document.createElement('tr');
	title.innerHTML = books[i].title;
	year.innerHTML = books[i].year;
	isbn.innerHTML = books[i].isbn;
	authors.innerHTML = books[i].authors;
	tr.appendChild(title);
	tr.appendChild(year);
	tr.appendChild(isbn);
	tr.appendChild(authors);
	list.appendChild(tr);
}
document.body.appendChild(list);

var jotain = document.querySelectorAll("tr");
console.log(jotain);
for (i=1; i < jotain.length; i++){
	jotain[i].onclick = function () {
		document.querySelector("h1").innerHTML = this.firstChild.innerHTML;
	}
}

