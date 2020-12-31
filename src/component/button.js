import React, { Component } from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import assets from '../assets/index'
const styles = StyleSheet.create({
    container: {
        width: 200, backgroundColor: "#278c63",
        height: 45,
        borderRadius: 25,
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    textStyle: {
        color: "#fff",
        fontFamily: "Montserrat-Medium", fontSize: 16, height: 45,
        textAlign:"center",paddingTop:12
    }
});
const Button = (props) => {
    const { title, onPress, style, textStyle,isImage } = props;
    return (
        <View style={[styles.container, style]}>
            <Text onPress={onPress} style={[styles.textStyle, textStyle]}>{title}</Text>
            {!isImage && <Image style={{width:24,height:24,marginLeft:5,tintColor:"#fff"}} source={assets.icons.right}></Image>}
        </View>
    );
};
export default Button;