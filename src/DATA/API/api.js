import React, {Component} from 'react';

const BaseURL = 'https://ap.cs.ucy.ac.cy:44';

export async function getBuildPoint(buid) {
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/mapping/space/get', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "buid": buid
      }),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json); 
  }
  return json;
}

export async function getShadowBuild(buid){
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/mapping/floor/all', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "buid": buid
      }),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json);
  }
  return json;
}

export async function getPois(buid, floor) {
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/mapping/pois/floor/all', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "buid": buid, 
        "floor_number": floor
      }),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json); 
  }
  return json;
}


export async function getRoutesPois(poiFrom, poiTo) {
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/navigation/route', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "pois_from": poiFrom,
        "pois_to": poiTo
      }),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json); 
  }
  return json;
}

export async function getRoutesCoord(user, poiTo) {
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/navigation/route/coordinates', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "coordinates_lon": user.lon,
        "coordinates_lat": user.lat,
        "floor_number": user.floor,
        "pois_to": poiTo
      }),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json); 
  }
  return json;
}

export async function getConnections(buid, floor) {
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/mapping/connection/floor/all', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "buid": buid, 
        "floor_number": floor
      }),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json); 
  }
  return json;
}

export async function getFloorPlan(buid, floor) {
  let json = [];
  try {
    const response = await fetch(BaseURL+'/api/floorplans64/'+buid+'/'+floor, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    json = await response.json();
  } catch (error) {
    console.log(error);
  } finally{
    // console.log(json); 
  }
  return json;
}