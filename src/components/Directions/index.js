import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey='AIzaSyDfUlZzh9SP0Tt7A50gyiROLaaBq63BgmY'
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;