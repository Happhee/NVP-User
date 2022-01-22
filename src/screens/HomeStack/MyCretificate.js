import React,{Component} from 'react';
import {Alert, Modal, View, Text, TouchableOpacity, StyleSheet,Pressable,Dimensions } from 'react-native';
import NfcManager, {NfcTech, ByteParser, Ndef} from 'react-native-nfc-manager';


class Cre extends Component{
    
    state = {
        modalVisible: false
    };
    constructor(props){
        super(props);
        this.readNdef();
        
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    componentDidMount(){
        NfcManager.start();
    }
    readNdef=async()=>{
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const tag = await NfcManager.getTag();
        try {
            console.warn('태그 정보', tag);
            
          } catch (ex) 
          {
            console.warn('Oops!', ex);
          } finally
           {
            NfcManager.cancelTechnologyRequest();
          }
    }
    render(){

        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
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
              <Text onClick={this.log}>
=              </Text>
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
          <Text style={styles.textStyle}>NVP</Text>
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