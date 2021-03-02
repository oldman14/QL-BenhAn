import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PatientScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Triệu chứng</Text>
        <Text>Đau nhức vai gáy</Text>
        <Text>Đau nhức lưng</Text>
        <Text>Chóng mặt nhức đầu</Text>
      </View>
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  title: {
    color: '#2CBBA9',
  },
});
