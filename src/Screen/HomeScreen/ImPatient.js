import React from 'react';
import {View, Text, Image} from 'react-native';

const ImPatient = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{width: 400, height: 500}}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg/230px-Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg',
        }}
      />
    </View>
  );
};

export default ImPatient;
