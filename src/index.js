// console.log('running properly');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');
mapboxgl.accessToken =
  'pk.eyJ1IjoiYW1hbnRpbmEwNSIsImEiOiJjazM0bndpM2kwM2RyM2NvYXp6YXN3eWkyIn0.SF-AgTzGdkKaiN9ktuAyIA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

buildMarker('Activity', [-74.009151, 40.705086], map);
buildMarker('Hotel', [-39.009151, 40.705086], map);

// new mapboxgl.Marker(document.getElementById('marker'))
//   .setLngLat([-74.009151, 40.705086])
//   .addTo(map);

// const marker = buildMarker('activity', [-74.009151, 40.705086]);

// marker.addTo(map);

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '20px';
// markerDomEl.style.height = '20px';
// markerDomEl.style.backgroundImage =
//   '/Users/emmanuelgarcia/Trip-Planner-FE/public/WbMOfMl.png';

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
