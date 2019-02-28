function initMap() {
	// add your code here
	L.mapquest.key='GRsGhGyMAUr9Qa5MNgIJIdUGwk2oHGJl';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	L.marker([32.88,-117.236]).addTo(map);
}