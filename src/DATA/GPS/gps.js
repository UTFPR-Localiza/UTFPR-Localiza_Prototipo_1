import * as Location from 'expo-location';

export var gpsCoords;

export default async function getGps() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
  
  let location = await Location.getCurrentPositionAsync({});
  gpsCoords = location; 
}