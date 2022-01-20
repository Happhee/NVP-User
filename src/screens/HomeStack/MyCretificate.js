
import React from 'react'
import {
  View, Text, TouchableOpacity
} from 'react-native'
import NfcManager, { NfcEvents } from 'react-native-nfc-manager';

class AppV2 extends React.Component {
  componentDidMount() {
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      console.warn('tag', tag);
      NfcManager.unregisterTagEvent().catch((err) => console.log(err));
    });
  }

  componentWillUnmount() {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text>NFC 비활/활성</Text>
        <TouchableOpacity
          style={{ padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black' }}
          onPress={this._test}
        >
          <Text>nfc reader 활성화버튼</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black' }}
          onPress={this._cancel}
        >
          <Text>nfc reader 비활성화버튼</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _cancel = () => {

    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  _test = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  }
}

export default AppV2
// =======
// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import MyCertificate from '../../containers/Home/MyCertificate';

// function MyCretificateScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <MyCertificate navigation={navigation} />
//         </View>
//     );
// }

// export default MyCretificateScreen;
// >>>>>>> master
