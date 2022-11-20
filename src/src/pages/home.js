import React, {useRef, useState, useEffect} from 'react';
import { View, Text, Button, SafeAreaView, TextInput, StyleSheet } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list';

import Map, {markerText} from '../../Controller/ControlMaps';
import {getAndar0, getAndar1, getAndar_1, getControlGps} from '../../Controller/ControlData';
import { getControlRoutes } from '../../Controller/controlRoutes';
import { poisData } from '../../Controller/ControlData';

export function HomeScreen({ navigation }) {
  const [atualiza, setAtualiza] = useState(0);
  const [gpsOnOff, setGpsOnOff] = useState('gps on');

  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  // console.log(poisData);

  let dataList = [];
  poisData.map((data, index)=>{
    dataList.push({key: index, value: data.name});
  });
  
  function callRoutes(){
    let poiFrom = "";
    let poiTo = "";

    poisData.map((data)=>{
      if(data.name == selected1){
        poiFrom = data.puid;
      }
    });
    poisData.map((data)=>{
      if(data.name == selected2){
        poiTo = data.puid;
      }
    });

    getControlRoutes(poiFrom, poiTo);
  }

  return (
      <SafeAreaView style={styles.Container}>
        <View>
          <SelectList 
            setSelected={(val) => setSelected1(val)} 
            data={dataList} 
            save="value"
          />
          <SelectList 
            setSelected={(val) => setSelected2(val)} 
            data={dataList} 
            save="value"
          />
          <Button
            title="Go"
            onPress={() => {callRoutes()}}
          />
        </View>
        <Map />
        <Button
          style={{width: 100, marginTop: 20}}
          title=""
          onPress={() => {markerText(), setAtualiza(atualiza+1)}}
        />
        <View style={{flexDirection: 'row', alignContent: 'center', marginTop: 6}}>
          <View style={styles.Buttons}>
            <Button title={gpsOnOff} onPress={() => {getControlGps(), gpsOnOff==='gps on' ? setGpsOnOff('gps off') : setGpsOnOff('gps on')}} />
          </View>
          <View style={styles.Buttons}>
            <Button title="-1" onPress={() => {getAndar_1(), setAtualiza(atualiza+1)}} />
          </View>
          <View style={{marginLeft: 10}}>
            <Button title="0" onPress={() => {getAndar0(), setAtualiza(atualiza+1)}} /> 
          </View>
          <View style={{marginLeft: 10}}>
            <Button title="1" onPress={() => {getAndar1(), setAtualiza(atualiza+1)}} />
          </View>
          <View style={styles.Buttons}>
            <Button title="Atualiza" onPress={() => {setAtualiza(atualiza+1)}} />
          </View>
        </View>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    paddingTop: 10,
    backgroundColor: 'fff'
  },
  Buttons: {
    marginLeft: 40
  }
});