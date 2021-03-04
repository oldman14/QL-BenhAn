import React from 'react';
import {View, Text, Settings} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import RemindScreen from '../Screen/Remind/RemindScreen';
import SettingScreen from '../Screen/SettingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PatientScreen from '../Screen/HomeScreen/PatientScreen';
import Home from '../Screen/HomeScreen/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BotTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Main_Screen = () => {
  return (
    <BotTab.Navigator
      activeColor="#fff"
      barStyle={{backgroundColor: '#2CBBA9'}}>
      <BotTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Patient',
          // tabBarIcon: () => (
          //   <MaterialCommunityIcons
          //     color="#fff"
          //     name="book-open-outline
          //   "
          //   />
          // ),
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} name="menu-book" size={22} />
          ),
        }}></BotTab.Screen>
      <BotTab.Screen
        name="RemindScreen"
        component={RemindScreen}
        options={{
          title: 'Remind',
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} name="alarm-add" size={22} />
          ),
        }}
      />
      <BotTab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} name="settings" size={22} />
          ),
        }}
      />
    </BotTab.Navigator>
  );
};

export default Main_Screen;
