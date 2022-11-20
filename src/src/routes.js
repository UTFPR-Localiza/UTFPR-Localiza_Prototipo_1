import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './pages/home';
import { SearchScreen } from './pages/search';
import { DetailsScreen } from './pages/Details';

//Stacked main pages
const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}