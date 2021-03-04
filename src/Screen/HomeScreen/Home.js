import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PatientScreen from './PatientScreen';
import HomeScreen from './HomeScreen';
import PatientHome from './PatientHome';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'PatientHome'}
        component={PatientHome}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
