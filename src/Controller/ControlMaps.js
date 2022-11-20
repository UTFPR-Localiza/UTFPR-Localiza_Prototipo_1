import React, {useState} from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView, {Geojson, Marker, Polyline, Circle} from 'react-native-maps';

import { paredesData, poisData, routesData } from './ControlData';
import {gpsCoords} from '../DATA/GPS/gps';

const {width, height} = Dimensions.get('screen');
var isMarkerText = false;
export function markerText(){
  isMarkerText = !isMarkerText;
};
function MapaBase(){  
  return(
    <>
    <Geojson 
        geojson={paredesData}  
        strokeColor="black"
        fillColor=""
        strokeWidth={2}
      />
    {poisData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: parseFloat(marker.coordinates_lat), longitude: parseFloat(marker.coordinates_lon) }}
            title={marker.name}
          >
            {isMarkerText && <View style={{padding: 10}}>
              <Text>{marker.name}</Text>
            </View>}
          </Marker>
        )
    )}
    </>
  );
}

function Gps(){
  let latLng = { latitude: gpsCoords!=null ? gpsCoords.coords.latitude : -23.18614202499179, longitude: gpsCoords!=null ? gpsCoords.coords.longitude : -50.65670061999814 };
  let rad = gpsCoords!=null ? gpsCoords.coords.accuracy : 5;  
  return(
    <>
    <Circle
      center={latLng}
      radius={rad}
      strokeColor={'blue'}
    />
    <Marker
        key={2525}
        coordinate={latLng}
      />
      </>
  );
}

export function Routes(){
  //console.log(routes)
  var pontos=[];
  routesData.map((data)=>{
   let info = {latitude: parseFloat(data.lat), longitude: parseFloat(data.lon)};
   pontos.push(info);
  });
  return(
    <>
      <Polyline
      coordinates={pontos}
      strokeColor="#FFFF00"
      strokeWidth={6}
    />
    </>
  );
}

export default function Map(){
  
  return (
    <MapView 
      style={styles.MapTam}
      initialRegion={{
        latitude: -23.18614202499179,
        longitude: -50.65670061999814,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      zoomEnabled={true}
      minZoomLevel={15}
      >
      <MapaBase />
      <Gps />
      <Routes />
    </MapView>
  );
}

const styles = StyleSheet.create({
  MapTam: {
    width: width,
    height: height-300
  }
});