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
    firebase.database().ref(list.length + 1).set({
	Age: age,
	First_Name: first,
	Last_Name: last,
	Device: device,
	Zipcode: zip,
        Survivability: survivability
    });
}

function show(){
    list.sort(function(a, b){
	return a.Zipcode - b.Zipcode;
    });
    for (var i = 0; i <= list.length-1; i++) {
	first = list[i].First_Name;
	last = list[i].Last_Name;
	age = list[i].Age;
	zip = list[i].Zipcode;
        device = list[i].Device
        survivability = list[i].Survivability;

	z = document.createElement('tr');

   	a = document.createElement('td');
   	b = document.createElement('td');
   	c = document.createElement('td');
   	d = document.createElement('td');
        e = document.createElement('td');
        f = document.createElement('td');

   	a.innerHTML = first;
   	b.innerHTML = last;
   	c.innerHTML = age;
   	d.innerHTML = zip;
        e.innerHTML = device;
        f.innerHTML = survivability;

   	z.appendChild(a);
   	z.appendChild(b);
   	z.appendChild(c);
   	z.appendChild(d);
        z.appendChild(e);
        z.appendChild(f);

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
    survivability = form.elements[5];


    createNewUser(first, last, age, device, zip, device, survivability);
    document.getElementById('form').remove();

    location.reload();
}


function user(){
	document.getElementById('users').classList = 'hide';
	document.getElementById('newPatient').classList = '';

}


function newPatient(){
	document.getElementById('users').classList = '';
	document.getElementById('newPatient').classList = 'hide';

}