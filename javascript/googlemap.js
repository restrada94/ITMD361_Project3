var map;
var marker;
var current;

var unitedStates=(lat: 37.0902, lng:-95.7128);
var cholula={lat: 19.0599, lng: -98.2949};
var tenochtitlan={lat: 19.2806, lng: -99.0588};

var locations=["Cholula", "Tenochtitlan"];

function myMap() {
	current={lat: 41.8562277, lng: -87.6912785};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom:9,
	center: unitedStates});
	marker = new google.maps.Marker({
		position:unitedStates,
		animation:google.maps.Animation.BOUNCE,
	map: map });
}

function travel(location, my_locations) {
	map.panTo(location);
	map.setZoom(15);
	marker = new google.maps.Marker({
		position: location,
			animation:google.maps.Animation.BOUNCE,
		map: map
	});
	if(my_locations==locations[0]){
		document.getElementById("description").innerHTML="Cholula"
	}
	else if(my_locations==locations[1]){
		document.getElementById("description").innerHTML="Tenochtitlan"
	}
	else {
		document.getElementById("description").innerHTML=null;
	}
}