import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PatientScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Triệu chứng</Text>
        <Text>- Đau nhức vai gáy</Text>
        <Text>- Đau nhức lưng</Text>
        <Text>- Chóng mặt nhức đầu</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Các xét nghiệm</Text>
        <Text>- Chụp X-quang</Text>
        <Text>- Thử máu</Text>
        <Text>- Nội soi</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Chẩn đoán</Text>
        <Text>- Thoát vị đĩa đệm. Huyết ấp cao</Text>
        <Text>- Thoái hóa cột sống.</Text>
        <Text>- Viêm xoang.</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Lời khuyên</Text>
        <Text>- Hạn chế thức khuya</Text>
        <Text>- Vận động nhẹ nhàng sau khoảng thời gian ngồi lâu</Text>
        <Text>- Uống nhiều nước</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Đơn thuốc</Text>
        <Text>- Panadol 500mg (14 viê)</Text>
        <Text>- Vitamin A (1 lọ)</Text>
        <Text>- Vitaminn B12 (1 lọ)</Text>
        <Text>- Paracetamol </Text>
        <Text>- Aspirin </Text>
      </View>
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  box: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2CBBA9',
  },
  title: {
    color: '#2CBBA9',
    fontSize: 22,
  },
});
