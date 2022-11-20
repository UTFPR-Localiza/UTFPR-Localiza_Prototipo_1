import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list';


export function DetailsScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
          />
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}