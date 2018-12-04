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

function createNewUser(first, last, age, device, zip, contact,
                       severity, priority, survivability){
    firebase.database().ref(list.length + 1).set({
	Age: age,
	First_Name: first,
	Last_Name: last,
	Device: device,
	Zipcode: zip,
        Contact: contact,
        Condition_Severity: severity,
        Device_Priority: priority,
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
        device = list[i].Device;
        contact = list[i].Contact;
        severity = list[i].Condition_Severity;
        priority = list[i].Device_Priority;
        survivability = list[i].Survivability;

	z = document.createElement('tr');

   	a = document.createElement('td');
   	b = document.createElement('td');
   	c = document.createElement('td');
   	d = document.createElement('td');	
    e = document.createElement('td');
    f = document.createElement('td');
    g = document.createElement('td');
    h = document.createElement('td');
    j = document.createElement('td');

   	a.innerHTML = first;
   	b.innerHTML = last;
   	c.innerHTML = age;
   	d.innerHTML = zip;
        e.innerHTML = device;
        f.innerHTML = contact;
        g.innerHTML = severity;
        h.innerHTML = priority;
        j.innerHTML = survivability;

   	z.appendChild(a);
   	z.appendChild(b);
   	z.appendChild(c);
	z.appendChild(d);
    z.appendChild(e);
    z.appendChild(f);
    z.appendChild(g);
    z.appendChild(h);
    z.appendChild(j);

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
    contact = form.elements[5].value;
    severity = form.elements[6].value;
    priority = form.elements[7].value;
    survivability = 70 - (priority*6 + severity*2 +
                          Math.abs(30 - age));

    createNewUser(first, last, age, device, zip, contact,
                  severity, priority, survivability);

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

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("here");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function myFunc(){
	location.reload();
}


function findPeople(){
	form = document.getElementById('form1');
    a = form.elements[0].value;
    document.getElementById('here').innerHTML = '';
    document.getElementById('seeDatabase').addEventListener("click", myFunc);



    for (var i = list.length - 1; i >= 0; i--) {
    	    a = form.elements[0].value;

    	if (a == list[i].Zipcode){
    		console.log('Found');
	    	first = list[i].First_Name;
			last = list[i].Last_Name;
			age = list[i].Age;
			zip = list[i].Zipcode;
	        device = list[i].Device;
	        contact = list[i].Contact;
	        severity = list[i].Condition_Severity;
	        priority = list[i].Device_Priority;
	        survivability = list[i].Survivability;

			z = document.createElement('tr');

		   	a = document.createElement('td');
		   	b = document.createElement('td');
		   	c = document.createElement('td');
		   	d = document.createElement('td');
		    e = document.createElement('td');
	        f = document.createElement('td');
	        g = document.createElement('td');
	        h = document.createElement('td');
	        j = document.createElement('td');

		   	a.innerHTML = first;
		   	b.innerHTML = last;
		   	c.innerHTML = age;
		   	d.innerHTML = zip;
	        e.innerHTML = device;
	        f.innerHTML = contact;
	        g.innerHTML = severity;
	        h.innerHTML = priority;
	        j.innerHTML = survivability;

		   	z.appendChild(a);
		   	z.appendChild(b);
		   	z.appendChild(c);
		   	z.appendChild(d);
	        z.appendChild(e);
	        z.appendChild(f);
	        z.appendChild(g);
	        z.appendChild(h);
	        z.appendChild(j);

		   	document.getElementById('here').appendChild(z);
	    }
	}
}

