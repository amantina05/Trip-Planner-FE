const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords, map) {
  if (type === 'activity') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

    const marker = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    console.log('MARKER', marker);
    marker.addTo(map);
  }
  if (type === 'hotel') {
    const markerDomEl2 = document.createElement('div');
    markerDomEl2.style.backgroundImage = iconURLs.hotels;

    new mapboxgl.Marker(markerDomEl2).setLngLat(coords).addTo(map);
  }
  if (type === 'restaurants') {
    const markerDomEl3 = document.createElement('div');
    markerDomEl3.style.backgroundImage = iconURLs.restaurants;

    new mapboxgl.Marker(markerDomEl3).setLngLat(coords).addTo(map);
  }
};

module.exports = buildMarker;

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '20px';
// markerDomEl.style.height = '20px';
// markerDomEl.style.backgroundImage =
//   '/Users/emmanuelgarcia/Trip-Planner-FE/public/WbMOfMl.png';
