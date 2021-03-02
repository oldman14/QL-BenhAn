import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import RootNavigator from './src/navigators/RootNavigator';

const App = () => {
  const Stack = createStackNavigator();
  return <RootNavigator />;
};

export default App;
