import React, {useState} from 'react';

import { getRoutesPois, getRoutesCoord } from '../DATA/API/api';

export var routesControlData = [];
//consulta
export function getControlRoutes(poiFrom, poiTo){
  
  async function call(){
    if(typeof poiFrom === "string"){
      let aux = await getRoutesPois(poiFrom, poiTo);

      if(aux.pois!==undefined){
        routesControlData = aux.pois;
      }      
    }else {
      let aux = await getRoutesCoord(poiFrom, poiTo);

      if(aux.pois!==undefined){
        routesControlData = aux.pois;
      }      
    }
  }
  call();

}