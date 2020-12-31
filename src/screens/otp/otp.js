import React,{ Component } from 'react';
import assets from '../../assets/index'
import PasscodeTextInput from '../../component/PasscodeTextInput'
import { View,Image } from 'react-native';
class OtpPage extends Component {
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: "#ccc" }}>
                <View style={{ flex: 1,padding: 20,justifyContent: "center" }}>
                    <Image style={{
                        alignSelf: "center",
                        tintColor: "#005e39",width: 96
                    }} source={assets.icons.job}></Image>
                </View>
                <View style={{ flex: 2 }}>
                    <View style={{flexDirection:"row"}}>
                        <PasscodeTextInput
                            autoFocus={true}
                            ref="passcode1"
                            onSubmitEditing={(event) => { this.refs.passcode2.focus() }} />
                        <PasscodeTextInput
                            ref="passcode2"
                            onSubmitEditing={(event) => { this.refs.passcode3.focus() }} />
                        <PasscodeTextInput
                            ref="passcode3"
                            onSubmitEditing={(event) => { this.refs.passcode4.focus() }} />
                        <PasscodeTextInput
                            ref="passcode4" />
                    </View>
                </View>
            </View>
        );
    }
}

export default OtpPage;