import React, {useState} from 'react';
import {View, Text, FlatList, Button, PointPropType} from 'react-native';
import ListBA from './ListBA';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from 'react-native-elements';

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
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flexDirection: 'column'}}>
      <SearchBar
        placeholder="Type Here..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        lightTheme={true}
        containerStyle={{backgroundColor: 'white'}}
        inputContainerStyle={{backgroundColor: 'white'}}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListBA patient={item} />}
      />
    </View>
  );
};

export default HomeScreen;
