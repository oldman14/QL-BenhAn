import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Main_Screen from './Main_Screen';
import PatientScreen from '../Screen/HomeScreen/PatientScreen';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const Main_Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={Main_Screen} />
    </Stack.Navigator>
  );
};

export default Main_Stack;
