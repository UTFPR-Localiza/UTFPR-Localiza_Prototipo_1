import React, {useState} from 'react';

import getGps from '../DATA/GPS/gps';
import { routesControlData } from './controlRoutes';

//Dados base locais
import campus_andar_0 from '../DATA/Mapas/GeoJson/campus_andar_0';
import campus_andar_1 from '../DATA/Mapas/GeoJson/campus_andar_1';
import campus_andar__1 from '../DATA/Mapas/GeoJson/campus_andar_-1';

import { 
  blocoA_0, 
  blocoB_0, 
  blocoC_0, 
  blocoD_0,
  extensaoBlocoD_0, 
  blocoA_1,
  blocoB_1,
  blocoC_1,
  blocoD_1, 
  extensaoBlocoD_1,
  blocoA__1,
  blocoB__1 } from './controlApi';

let andarAtual = 0;

//apagar
import routes from '../DATA/API/routes';

//Dados recebidos da api
export var poisData = [], routesData = [], paredesData = [];

//Funções Mapa base
export function selecaoRotasDoAndar(andar){
  routesData = [];
  routesControlData.map((data)=>{
    if(data.floor_number===andar){
      routesData.push(data);
    }
  });
}
export function getAndar0(){
  andarAtual = "0";
  //GeoJson
  paredesData = campus_andar_0;
  //Pontos de interesse
  poisData = [];
  blocoA_0.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  });
  blocoB_0.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  blocoC_0.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  blocoD_0.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  extensaoBlocoD_0.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  //rotas
  selecaoRotasDoAndar(andarAtual);
}

export function getAndar1(){
  andarAtual = "1";
  //GeoJson
  paredesData = campus_andar_1;
  //Pontos de interesse
  poisData = [];
  blocoA_1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  blocoB_1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  blocoC_1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  blocoD_1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  extensaoBlocoD_1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  //rotas
  selecaoRotasDoAndar(andarAtual);
}
export function getAndar_1(){
  andarAtual = "-1";
  //GeoJson
  paredesData = campus_andar__1;
  //Pontos de interess
  poisData = [];
  blocoA__1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  blocoB__1.map((poi)=>{
    if(poi.pois_type!="None")
      poisData.push(poi);
  })
  //rotas
  selecaoRotasDoAndar(andarAtual);
}

//Funções gps
let gpsLigado = true;

export function getControlGps(){
  gpsLigado = !gpsLigado;
  if(gpsLigado){
    gpsLoop();
  }
  // console.log(gpsLigado);
}
function gpsLoop(){
  if(gpsLigado){
    getGps();
    setTimeout(()=>gpsLoop(), 7000);
  }
}

//chamadas iniciais
getAndar0();
gpsLoop();