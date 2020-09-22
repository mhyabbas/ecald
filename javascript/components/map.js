"use strict";

let map;

function initMap() {

	var myLatLng = {lat: -36.7813544, lng: 174.7552376};

	var map = new google.maps.Map(document.getElementById("map"), {
		center: myLatLng,
		zoom: 17,
		styles: [
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
			{
				"hue": "#6600ff"
			},
			{
				"saturation": -11
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -78
			},
			{
				"hue": "#6600ff"
			},
			{
				"lightness": -47
			},
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
			{
				"hue": "#5e00ff"
			},
			{
				"saturation": -79
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
			{
				"lightness": 30
			},
			{
				"weight": 1.3
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "simplified"
			},
			{
				"hue": "#5e00ff"
			},
			{
				"saturation": -16
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -72
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -65
			},
			{
				"hue": "#1900ff"
			},
			{
				"lightness": 8
			}
			]
		}
		]
	});

	var svg = [
	'<?xml version="1.0"?>',
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#334154" width="18px" height="18px">',
	'<path d="M0 0h24v24H0z" fill="none"/>',
	'<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
	'</svg>'
	].join('\n');

	var infowindow = new google.maps.InfoWindow({
		content: "<p class='info'>124 Shakespeare Rd, Takapuna, Auckland 0620</p>"
	});

	var marker = new google.maps.Marker({
		icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), scaledSize: new google.maps.Size(45, 45) },
		position: myLatLng,
		map: map,
		title: "124 Shakespeare Road",
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}