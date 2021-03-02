import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PatientScreen from './PatientScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'PatientScreen'} component={PatientScreen} />
    </Stack.Navigator>
  );
};

export default Home;
