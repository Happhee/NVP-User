import React from 'react';
import { View, Text, Modal, TouchableOpacity, Platform, SafeAreaView, StyleSheet, TextInput, Alert
} from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
            log: "",
            text: ""
        }
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
    writeData = async () => {
        if (!this.state.text){
            Alert.alert("Nothing to write");
            return;
        }
        try {
            let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
            let resp = await NfcManager.requestTechnology(tech, {
                alertMessage: 'Ready to do some custom Mifare cmd!'
            });

            let text = this.state.text;
            let fullLength = text.length + 7;
            let payloadLength = text.length + 3;

            let cmd = Platform.OS === 'ios' ? NfcManager.sendMifareCommandIOS : NfcManager.transceive;

            resp = await cmd([0xA2, 0x04, 0x03, fullLength, 0xD1, 0x01]); 
            resp = await cmd([0xA2, 0x05, payloadLength, 0x54, 0x02, 0x65]); 

            let currentPage = 6;
            let currentPayload = [0xA2, currentPage, 0x6E];

            for(let i=0; i<text.length; i++){
                currentPayload.push(text.charCodeAt(i));
                if (currentPayload.length == 6){
                    resp = await cmd(currentPayload);
                    currentPage += 1;
                    currentPayload = [0xA2, currentPage];
                }
            }

            currentPayload.push(254);
            while(currentPayload.length < 6){
                currentPayload.push(0);
            }

            resp = await cmd(currentPayload);

            this.setState({
                log: resp.toString()
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onChangeText}
                    autoCompleteType="off"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#888888"
                    placeholder="상호명을 입력하세요" />

                <TouchableOpacity
                    style={styles.buttonWrite}
                    onPress={this.writeData}>
                    <Text style={styles.buttonText}>입력</Text>
                </TouchableOpacity>

                <View style={styles.log}>
                    <Text>{this.state.log}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        height: 50,
        textAlign: 'center',
        color: 'black'
    },
    buttonWrite: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#9D2235'
    },
    buttonRead: {
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#006C5B'
    },
    buttonText: {
        color: '#ffffff'
    },
    log: {
        marginTop: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;