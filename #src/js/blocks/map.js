{

	var globalMarkers = {
		"1": {
			"1": [
				50.4501,
				30.5234
			],
			"2": [
				47.8388,
				35.139567
			]
		},
		"2": {
			"3": [
				46.482526,
				30.7233095
			],
			"4": [
				49.9935,
				36.230383
			]
		},
		"3": {
			"5": [
				47.097133,
				37.543367
			],
			"6": [
				49.839683,
				24.029717
			]
		}
	}






		var map;
		var map2;
		var markersPosition;
		
		var center = {
			lat: 49.07715,
			lng: 33.42683,
		}

		if(document.getElementById('map')) {
			var iconUrl = document.getElementById('map').dataset.set;

		}

		if(document.getElementById('map2')) {
			var iconUrl2 = document.getElementById('map2').dataset.set;

		}
		


		var markers = [];

		function initMap() {
			const createAray = () => {
				let arr = [];
	
				if(globalMarkers) {
					for(let item in globalMarkers) {
						arr.push(globalMarkers[item]);
					}
				}
	
				return arr.map(obj => {
					let arr = [];
					for(let item in obj) {
						arr.push(new google.maps.LatLng(obj[item][0], obj[item][1]))
					}
					return arr;
				})
				
			}

			var markersArr = createAray();

			window.onload = () => {

				let mapNav = document.querySelector('.map-block__nav');
				if(mapNav) {
					let items = mapNav.querySelectorAll('.map-block__nav-item');
		
		
					items.forEach((item, index) => {
						item.addEventListener('click', (e) => {
							e.preventDefault();
							item.classList.add('active');
		
							markersPosition = markersArr[index];
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


			markersPosition = markersArr[0];

			if(document.getElementById('map')) {
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

				drop();
			}



			if(document.getElementById('map2')) {
				map2 = new google.maps.Map(document.getElementById('map2'), {
					center: {lat: 49.95591090900552, lng: 36.16249347011773},
				
					zoom: 15,
	
					//styles: ,
				});
	
				var markersPosition2 = new google.maps.Marker({
				position: {lat: 49.95591090900552, lng: 36.16249347011773},
				map: map2,
				//icon: iconUrl2,
				})
			}



			
		}

		const contentString = '<div class="test">test</div>';

		var info = [];

		function setInfo(length) {

			for (let i = 0; i < length; i++) 
			{
			  info.push(new google.maps.InfoWindow({
				content: `<div class="map-card">
							<h2>Сільпо ${i}</h2>
							<p>Супермаркет - Московський проспект, 256</p>
							<h3>Відкрито до 23:00</h3>
							<ul>
								<li>
									<div class="map-card__icons active">
										<img class="map-card__icon-check" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/check-green.svg" alt="">
										<img class="map-card__icon-cross" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/cross.svg" alt="">
									</div>
									Покупки в магазині
								</li>
								<li>
									<div class="map-card__icons">
										<img class="map-card__icon-check" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/check-green.svg" alt="">
										<img class="map-card__icon-cross" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/cross.svg" alt="">
									</div>
									Замовити онлайн
								</li>
							</ul>
							<div class="map-card__decor">
								<div class="map-card__decor-circle"></div>
							</div>
							<img class="map-card__decor-icon" src="http://bavaria.upro.site/wp-content/themes/bavaria/assets/img/icons/map-icon.svg" alt="">
						</div>`,
			  }));
			}
		}

		function drop() {
			for (let i = 0; i < markersPosition.length; i++) 
			 {
			   markers.push(new google.maps.Marker({
			   position: markersPosition[i],
			   map: map,
			   icon: iconUrl,
			   }));
			 }

			 setInfo(markers.length);
			 addClick(); 
		}

		function addClick() {
			// if(document.documentElement.clientWidth < 992) {
			// 	for (let i = 0; i < markers.length; i++) {
			// 		markers[i].addListener('click', () => {
			// 			info[i].open(map, markers[i]);
			// 		})
			// 	}
			// } else {
			// 	for (let i = 0; i < markers.length; i++) {
			// 		markers[i].addListener('mouseover', () => {
			// 			info[i].open(map, markers[i]);
			// 		})
			// 		markers[i].addListener('mouseout', () => {
			// 			info[i].close();
			// 		})
			// 	}
			// }

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
			markers = [];

			for (var i = 0; i < markersPosition.length; i++) 
			{
			  markers.push(new google.maps.Marker({
			  position: markersPosition[i],
			  map: map,
			  icon: iconUrl,
			  }));
			}

			info = [];

			setInfo(markers.length);
			addClick(); 
		
		}
	
}