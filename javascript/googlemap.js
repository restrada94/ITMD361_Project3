var unitedStates={lat: 37.0902, lng:-95.7128};
var cholula={lat: 19.0599, lng: -98.2949};
var tenochtitlan={lat: 19.2806, lng: -99.0588};

var locations=["Cholula", "Tenochtitlan"];

function mapFunction() {
	var current={lat: 41.8562277, lng: -87.6912785};
	var map = new google.maps.Map(document.getElementById('map'), {center: unitedStates, zoom:9});
	var marker = new google.maps.Marker({map: map, position:unitedStates, title: 'USA'});
}

function locationFunction(location, my_locations) {
	map.panTo(location);
	map.setZoom(14);
	marker = new google.maps.Marker({map: map, position: location, title: location});
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
