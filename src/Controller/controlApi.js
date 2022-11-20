import React, {useState} from 'react';

import { getPois, getRoutesPois, getRoutesCoord } from '../DATA/API/api';

//Dados base locais
import blocoA_0Data from '../DATA/Mapas/poisCampus/blocoA_0';
import blocoB_0Data from '../DATA/Mapas/poisCampus/blocoB_0';
import blocoC_0Data from '../DATA/Mapas/poisCampus/blocoC_0';
import blocoD_0Data from '../DATA/Mapas/poisCampus/blocoD_0';
import extensaoBlocoD_0Data from '../DATA/Mapas/poisCampus/extensaoBlocoD_0';

import blocoA_1Data from '../DATA/Mapas/poisCampus/blocoA_1';
import blocoB_1Data from '../DATA/Mapas/poisCampus/blocoB_1';
import blocoC_1Data from '../DATA/Mapas/poisCampus/blocoC_1';
import blocoD_1Data from '../DATA/Mapas/poisCampus/blocoD_1';
import extensaoBlocoD_1Data from '../DATA/Mapas/poisCampus/extensaoBlocoD_1';

import blocoA__1Data from '../DATA/Mapas/poisCampus/blocoA_-1';
import blocoB__1Data from '../DATA/Mapas/poisCampus/blocoB_-1';

//Data exportadas
export var blocoA_0 = blocoA_0Data.pois;
export var blocoB_0 = blocoB_0Data.pois;
export var blocoC_0 = blocoC_0Data.pois;
export var blocoD_0 = blocoD_0Data.pois;
export var extensaoBlocoD_0 = extensaoBlocoD_0Data.pois;

export var blocoA_1 = blocoA_1Data.pois;
export var blocoB_1 = blocoB_1Data.pois;
export var blocoC_1 = blocoC_1Data.pois;
export var blocoD_1 = blocoD_1Data.pois;
export var extensaoBlocoD_1 = extensaoBlocoD_1Data.pois;

export var blocoA__1 = blocoA__1Data.pois;
export var blocoB__1 = blocoB__1Data.pois;
export var extensaoBlocoD__1 = []; 

//Informações para consulta
const codBlocoA = 'building_b7df418b-ab27-4f21-b81c-48b1d2cca2f0_1663183099555';
const codBlocoB = 'building_6758280d-de90-49fe-9828-fdccf3a122af_1664287812738';
const codBlocoC = 'building_ad3ea357-83eb-47ec-b86e-d4e46e4f5679_1668214229870';
const codBlocoD = 'building_f061feb2-5699-47a3-9f26-3f759571dfa7_1668215365614';
const codExtensaoBlocoD = 'building_3f8f3e66-c43a-4359-a697-3feb37c32c58_1664753679737';

//consulta
function getBlocoA(){
  
  async function call(){
    let aux0 = await getPois(codBlocoA, '0');
    let aux1 = await getPois(codBlocoA, '1');
    let aux_1 = await getPois(codBlocoA, '-1');
    
    if(aux0!=null && aux0.pois != blocoA_0){
      blocoA_0 = aux0.pois;
    }
    if(aux1!=null && aux1.pois != blocoA_1){
      blocoA_1 = aux1.pois;
    }
    if(aux_1!=null && aux_1.pois != blocoA__1){
      blocoA__1 = aux_1.pois;
    }
  }
  call();

}

function getBlocoB(){
  
  async function call(){
    let aux0 = await getPois(codBlocoB, '0');
    let aux1 = await getPois(codBlocoB, '1');
    let aux_1 = await getPois(codBlocoB, '-1');
    
    if(aux0!=null && aux0.pois != blocoB_0){
      blocoB_0 = aux0.pois;
    }
    if(aux1!=null && aux1.pois != blocoB_1){
      blocoB_1 = aux1.pois;
    }
    if(aux_1!=null && aux_1.pois != blocoB__1){
      blocoB__1 = aux_1.pois;
    }
  }
  call();

}

function getBlocoC(){
  
  async function call(){
    let aux0 = await getPois(codBlocoC, '0');
    let aux1 = await getPois(codBlocoC, '1');
    
    if(aux0!=null && aux0.pois != blocoC_0){
      blocoC_0 = aux0.pois;
    }
    if(aux1!=null && aux1.pois != blocoC_1){
      blocoC_1 = aux1.pois;
    }

    console.log(aux0);
    console.log(aux1);
    console.log(blocoC_1);
  }
  call();

}

function getBlocoD(){
  
  async function call(){
    let aux0 = await getPois(codBlocoD, '0');
    let aux1 = await getPois(codBlocoD, '1');
    
    if(aux0!=null && aux0.pois != blocoD_0){
      blocoD_0 = aux0.pois;
    }
    if(aux1!=null && aux1.pois != blocoD_1){
      blocoD_1 = aux1.pois;
    }
  }
  call();

}

function getExtensaoBlocoD(){
  
  async function call(){
    let aux0 = await getPois(codExtensaoBlocoD, '0');
    let aux1 = await getPois(codExtensaoBlocoD, '1');
    let aux_1 = await getPois(codExtensaoBlocoD, '-1');
    
    if(aux0!=null && aux0.pois != extensaoBlocoD_0){
      extensaoBlocoD_0 = aux0.pois;
    }
    if(aux1!=null && aux1.pois != extensaoBlocoD_1){
      extensaoBlocoD_1 = aux1.pois;
    }
    if(aux_1!=null && aux_1.pois != extensaoBlocoD__1){
      extensaoBlocoD__1 = aux_1.pois;
    }
  }
  call();

}