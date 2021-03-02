import React from 'react';
import {View, Text, Settings} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import RemindScreen from '../Screen/RemindScreen';
import SettingScreen from '../Screen/SettingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PatientScreen from '../Screen/HomeScreen/PatientScreen';
import Home from '../Screen/HomeScreen/Home';

const BotTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Main_Screen = () => {
  return (
    <BotTab.Navigator
      activeColor="#fff"
      barStyle={{backgroundColor: '#2CBBA9'}}>
      <BotTab.Screen name="Home" component={Home}></BotTab.Screen>
      <BotTab.Screen name="RemindScreen" component={RemindScreen} />
      <BotTab.Screen name="SettingScreen" component={SettingScreen} />
    </BotTab.Navigator>
  );
};

export default Main_Screen;
