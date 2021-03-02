import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Main_Screen from './Main_Screen';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Main_Screen />
    </NavigationContainer>
  );
};

export default RootNavigator;
