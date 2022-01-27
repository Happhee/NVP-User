import React from 'react';
import { View, Text, Modal, TouchableOpacity, Platform, SafeAreaView, StyleSheet, TextInput, Alert
,Pressable,Dimensions} from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

class Cre extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
            log: "",
            text: ""
        }
        this.readData();
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    componentDidMount() {
        NfcManager.start();
    }

    componentWillUnmount() {
        this._cleanUp();
    }

    _cleanUp = () => {
        NfcManager.cancelTechnologyRequest().catch(() => 0);
    }

    readData = async () => {
        try {
            let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
            let resp = await NfcManager.requestTechnology(tech, {
                alertMessage: 'Ready to do some custom Mifare cmd!'
            });
            let cmd = Platform.OS === 'ios' ? NfcManager.sendMifareCommandIOS : NfcManager.transceive;
            resp = await cmd([0x3A, 4, 4]);
            let payloadLength = parseInt(resp.toString().split(",")[1]);
            let payloadPages = Math.ceil(payloadLength / 4);
            let startPage = 5;
            let endPage = startPage + payloadPages - 1;
            resp = await cmd([0x3A, startPage, endPage]);
            bytes = resp.toString().split(",");
            let text = "";
            for(let i=0; i<bytes.length; i++){
                if (i < 5){
                    continue;
                }
                if (parseInt(bytes[i]) === 254){
                    break;
                }
                text = text + String.fromCharCode(parseInt(bytes[i]));
            }
            this.setState({
                log: text
            })

            this._cleanUp();
        } catch (ex) {
            this.setState({
                log: ex.toString()
            })
            this._cleanUp();
        }
    }

    onChangeText = (text) => {
        this.setState({
            text
        })
    }

    render(){
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
            <Text>{this.state.log}님, 인증되었습니다.</Text>
              <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("팝업창이 닫혔습니다");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>인증되었습니다!</Text>
              <Text>{this.state.log}</Text>
              <Pressable
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text>닫기</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}  onPress={this.readData}>NVP</Text>
        </Pressable>
        </View>
          )
    }
}
const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#00B990",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: Dimensions.get('window').width > 500? 36 : 30
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#00B990',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100,
    ...Platform.select({
        ios: {
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowOpacity: 1,
            shadowOffset: { height: 2, width: 2 },
            shadowRadius: 2,
        },
        android: {
            elevation: 0,
            marginHorizontal: 30,
        },
    })
},

text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
}
});


export default Cre;