import React from 'react';
import {View, Text, FlatList, Button, PointPropType} from 'react-native';
import ListBA from './ListBA';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      drName: 'Doctor Trang',
      url: 'https://picsum.photos/200',
      khoaKham: 'Khoa Tổng hợp',
      timeTamp: '21/12/2020',
    },
    {
      id: '2',
      drName: 'Doctor Who',
      url: 'https://picsum.photos/200',
      khoaKham: 'Khoa Da liễu',
      timeTamp: '21/12/2020',
    },
  ];

  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListBA patient={item} />}
      />
    </View>
  );
};
const Lalaland = () => {
  return (
    <View>
      <Text>Lalaland</Text>
    </View>
  );
};
export default HomeScreen;
