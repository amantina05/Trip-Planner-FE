const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  if (type === 'activity') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.backgroundImage = iconURLs.activities;
  } else if (type === 'hotel') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.backgroundImage = iconURLs.hotels;
  } else {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.backgroundImage = iconURLs.restaurants;
  }
};

module.exports = buildMarker;

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '20px';
// markerDomEl.style.height = '20px';
// markerDomEl.style.backgroundImage =
//   '/Users/emmanuelgarcia/Trip-Planner-FE/public/WbMOfMl.png';
