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