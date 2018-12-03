var config = {
	apiKey: "AIzaSyCJYrOi7UhuSxF4LZFjvrpNWVklNB7Lp1k",
	authDomain: "empower101010.firebaseapp.com",
	databaseURL: "https://empower101010.firebaseio.com",
	projectId: "empower101010",
	storageBucket: "empower101010.appspot.com",
	messagingSenderId: "341616600829",
};

firebase.initializeApp(config);

var database = firebase.database();


var list = [];
function start(){
	database.ref().once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			snap = childSnapshot.val();
			list.push(snap);	

	    });
	});
}
start();
function createNewUser(first, last, age, device, zip){
	  firebase.database().ref(list.length).set({
	    Age: age,
	    First_Name: first,
	    Last_Name: last,
	    Device: device,
	    Zipcode: zip
  });
}


function show(){
	list.sort(function(a, b){
	  return a.Age - b.Age;
	});
	for (var i = 0; i <= list.length-1; i++) {
		first = list[i].First_Name;
		last = list[i].Last_Name;
		age = list[i].Age;
		zip = list[i].Zipcode;
		z = document.createElement('tr');

   		a = document.createElement('td');
   		b = document.createElement('td');
   		c = document.createElement('td');
   		d = document.createElement('td');

   		a.innerHTML = first;
   		b.innerHTML = last;
   		c.innerHTML = age;
   		d.innerHTML = zip;

   		z.appendChild(a);
   		z.appendChild(b);
   		z.appendChild(c);
   		z.appendChild(d);

   		document.getElementById('here').appendChild(z);
	}   
	document.getElementById('show').remove();

}

function submit(){

	form = document.getElementById('form');
	first = form.elements[0].value;
	last = form.elements[1].value;
	age = form.elements[2].value;
	device = form.elements[4].value;
	zip = form.elements[3].value;


	createNewUser(first, last, age, device, zip);
	document.getElementById('form').remove();

	location.reload();

}

