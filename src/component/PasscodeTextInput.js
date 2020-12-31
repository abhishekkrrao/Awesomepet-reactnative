import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PasscodeTextInput = ({ inputRef,autoFocus,onSubmitEditing,onChangeText,value }) => {

    const { inputStyle,underlineStyle } = styles;

    return (
        <View>
            <TextInput
                ref={(r) => { inputRef && inputRef(r) }}
                autoFocus={autoFocus}
                onSubmitEditing={onSubmitEditing}
                style={[inputStyle]}
                maxLength={1}
                keyboardType="numeric"
                placeholderTextColor="#212121"
                secureTextEntry={true}
                onChangeText={onChangeText}
                value={value}
            />
            <View style={underlineStyle} />
        </View>
    );
}

const styles = {
    inputStyle: {
        height: 80,
        width: 60,
        fontSize: 50,
        color: '#000',
        fontSize: 40,
        padding: 18,
        margin: 10,
        marginBottom: 0
    },
    underlineStyle: {
        width: 60,
        height: 4,
        backgroundColor: '#ccc',
        marginLeft: 10
    }
}

export default PasscodeTextInput;