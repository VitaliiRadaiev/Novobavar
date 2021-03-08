{


	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: 49.07715,
			lng: 33.42683,
		}

		var markerPosition = {
			lat: 49.07715,
			lng: 33.42683,
		}

		function initMap() {

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: center.lat, lng: center.lng},

				zoom: 6,

				styles: [
					{
					  "featureType": "administrative.country",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#121212"
						}
					  ]
					},
					{
					  "featureType": "administrative.locality",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#fba13d"
						}
					  ]
					},
					{
					  "featureType": "landscape.natural",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#fafafa"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry.stroke",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#ededed"
						}
					  ]
					}
				  ]
			});

			var marker = new google.maps.Marker({

			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    map: map,

			    title: '',
			    label: '',

			    icon: 'img/icons/local.svg',
			});

		}
	}
}