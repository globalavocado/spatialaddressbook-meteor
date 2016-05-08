import { Template } from 'meteor/templating';

import './body.html';
 
Template.body.helpers({
 // stuff for template
});

Template.map.rendered = function() {

  L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
  const map = L.map('map').setView(new L.LatLng(48.71, 14.06), 5);
  L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

  };
    