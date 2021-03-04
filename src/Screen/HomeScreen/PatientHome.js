import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PatientScreen from './PatientScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ImPatient from './ImPatient';

const Stack = createStackNavigator();
const TopTap = createMaterialTopTabNavigator();
const PatientHome = () => {
  return (
    <TopTap.Navigator tabBarOptions={{}} initialRouteName={'PatientScreen'}>
      <TopTap.Screen name={'PatientScreen'} component={PatientScreen} />
      <TopTap.Screen name={'ImPatient'} component={ImPatient} />
    </TopTap.Navigator>
  );
};

export default PatientHome;
