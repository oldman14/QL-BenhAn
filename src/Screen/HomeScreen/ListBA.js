import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PatientScreen from './PatientScreen';
const ListBA = (props) => {
  console.log(props.patient.url);
  const navigation = useNavigation();
  const patient = () => {
    navigation.navigate('PatientHome');
  };
  return (
    <View style={{backgroundColor: '#eee'}}>
      <TouchableOpacity onPress={patient}>
        <View style={styles.container}>
          <Image style={styles.imDr} source={{uri: props.patient.url}} />
          <View style={styles.midContanier}>
            <Text style={styles.drName}>{props.patient.drName}</Text>
            <Text style={styles.tenKhoa}>{props.patient.khoaKham}</Text>
            <Text>Bệnh viện tương lai</Text>
          </View>
          <Text style={styles.rightContanier}>{props.patient.timeTamp}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListBA;

const styles = StyleSheet.create({
  imDr: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 50,
    marginRight: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    margin: 5,
    padding: 2,
    borderRadius: 5,
  },
  midContanier: {
    flex: 3,
    flexDirection: 'column',
  },
  rightContanier: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  drName: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  tenKhoa: {
    fontSize: 18,
  },
});
