{

	window.onload = () => {
		var globalMarkers = [
			[
				new google.maps.LatLng(49.07715, 33.42683),
				new google.maps.LatLng(49.4102183495809, 32.053993300771204),
			],
			[new google.maps.LatLng(49.59658749073296, 34.53045912467009),],
			[
				new google.maps.LatLng(50.454879437956734, 30.510714035328963),
				new google.maps.LatLng(50.460999524974795, 30.344545827774628),
				new google.maps.LatLng(50.00141174816132, 36.23466862294647),
				new google.maps.LatLng(49.950187390392045, 36.16463078339878),
			],
		];


		let mapNav = document.querySelector('.map-block__nav');
		if(mapNav) {
			let items = mapNav.querySelectorAll('.map-block__nav-item');


			items.forEach((item, index) => {
				item.addEventListener('click', (e) => {
					e.preventDefault();
					item.classList.add('active');

					markersPosition = globalMarkers[index];
					updateMarkers();

					items.forEach(i => {
						if(i == item) {
							return
						}

						i.classList.remove('active');
					})
				})
			})
		}
	}


	var isMap = document.getElementById("map");
	if(isMap) {
		var map;
		var markersPosition;
		var center = {
			lat: 49.07715,
			lng: 33.42683,
		}



		var markers = [];

		function initMap() {

			markersPosition = [
				new google.maps.LatLng(49.07715, 33.42683),
				new google.maps.LatLng(49.4102183495809, 32.053993300771204),
			]
			// markersPosition = [new google.maps.LatLng(49.59658749073296, 34.53045912467009),]; Полтава

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

			drop()
		}

		const contentString = '<div class="test">test</div>';

		var info = [];

		function setInfo() {
			for (let i = 0; i < 3; i++) 
			{
			  info.push(new google.maps.InfoWindow({
				content: contentString,
			  }));
			}
		}

		function drop() {
			for (let i = 0; i < markersPosition.length; i++) 
			 {
			   markers.push(new google.maps.Marker({
			   position: markersPosition[i],
			   map: map,
			   icon: 'img/icons/local.svg',
			   }));
			 }

			 setInfo();
			 addClick(); 
		}

		function addClick() {
			for (let i = 0; i < markers.length; i++) {
				markers[i].addListener('click', () => {
					info[i].open(map, markers[i]);
				})
			  }
		}

		function setMapOnAll(map) {
			for (let i = 0; i < markers.length; i++) {
			  markers[i].setMap(map);
			}
		  }
		  

		function updateMarkers() {
			setMapOnAll(null)
			
			for (var i = 0; i < markersPosition.length; i++) 
			{
			  markers.push(new google.maps.Marker({
			  position: markersPosition[i],
			  map: map,
			  icon: 'img/icons/local.svg',
			  }));
			}
		
		}
	}
}