import * as React from 'react';
import { View, Text, Button } from 'react-native';
import MyCertificate from '../../containers/Home/MyCertificate';
function MyCertificateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MyCertificate />
    </View>
  );
}

export default MyCertificateScreen;