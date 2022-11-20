import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';


export function SearchScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="call" onPress={{}} />
    </View>
  );
}