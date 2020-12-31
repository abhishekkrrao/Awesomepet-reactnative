import React,{ Component } from "react";
import { View,Text,TextInput,Keyboard,Image,ScrollView } from "react-native";
import Button from "../../component/button.js";
import Header from '../../component/header'
import styles from './style'
import assets from '../../assets/index'
export default class signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = { email: "",password: "" }
    }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: "#ffffff" }}>
                <Header></Header>
                <ScrollView>
                    {this.singUpView()}
                </ScrollView>
            </View>
        )
    }
    componentDidMount() {

    }
    singUpView = () => {
        return (
            <View style={{ width: "100%",flex: 1,padding: 20 }}>

                <Text
                    numberOfLines={2}
                    style={{
                        justifyContent: "center",alignSelf: "flex-start",
                        fontFamily: "Montserrat-Bold",
                        paddingTop: 20,color: "#494949",fontSize: 23
                    }}>
                    {"Welcome to Free Agent "}
                </Text>

                <Text
                    numberOfLines={3}
                    style={{
                        justifyContent: "center",alignSelf: "flex-start",
                        fontFamily: "Montserrat-Medium",fontWeight: "900",
                        paddingTop: 15,color: "#a4a4a4",fontSize: 11
                    }}>
                    {"Join 1000s like you who've found their dream freelance with top companies like Amazon, Ola, Oyo, Hotstar and many more"}
                </Text>


                <View style={{
                    flexDirection: "row",width: "100%",
                    justifyContent: "center",height: 40,padding: 20
                }}>
                    <View style={{ width: 25,height: 25,marginTop: 13,flex: 1,alignItems: "center" }}>
                        <Image style={{ width: 24,height: 24 }} source={assets.icons.gmail}></Image>
                    </View>
                    <View style={{ width: 25,height: 25,marginTop: 13,flex: 1,alignItems: "center" }}>
                        <Image style={{ width: 24,height: 24 }} source={assets.icons.fb}></Image>
                    </View>
                </View>


                <View style={{ flexDirection: "row",width: "100%",justifyContent: "center",height: 40 }}>
                    <View style={{ width: 25,height: 1,backgroundColor: "#9fa8da",marginTop: 9 }}>
                    </View>
                    <Text style={{ padding: 5,color: "#494949",paddingTop: 0 }}>{"Or"}</Text>
                    <View style={{ width: 25,height: 1,backgroundColor: "#9fa8da",marginTop: 9 }}>
                    </View>
                </View>

                <TextInput
                    style={[styles.textInput,{ marginTop: 50,backgroundColor: "#fff",borderBottomWidth: 2,borderBottomColor: "#ccc",paddingLeft: 20}]}
                    mode="number"
                    keyboardType="number-pad"
                    maxLength={10}
                    placeholder="Mobile"
                    returnKeyType={"next"}
                    onSubmitEditing={() => { this.password.focus(); }}
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ email: value }) }}
                    value={this.state.email}
                />

                {/* <TextInput
                    ref={(input) => { this.password = input; }}
                    style={styles.textInput}
                    mode="text"
                    returnKeyType={"done"}
                    maxLength={16}
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    placeholder="Password"
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ password: value }) }}
                    value={this.state.password}
                /> */}

                <Button onPress={() => {
                    this.buttonPress()
                }} style={{ marginTop: 15,alignSelf: "center" }} title="Sign Up">

                </Button>


                <View style={{ flexDirection: "row",width: "100%",justifyContent: "center",height: 40,marginTop: 15 }}>
                    <View style={{ width: 50,height: 1,backgroundColor: "#9fa8da",marginTop: 13 }}>
                    </View>
                    <Text style={{ padding: 5,color: "#494949",fontFamily: "Montserrat-Medium" }}>{"Already have an account?"}</Text>
                    <View style={{ width: 50,height: 1,backgroundColor: "#9fa8da",marginTop: 13 }}>
                    </View>
                </View>

                <Button onPress={() => {
                    this.onLoginButtonPress()
                }} style={{ marginTop: 15,alignSelf: "center" }} title="Log In">

                </Button>
            </View>
        )
    }
    onLoginButtonPress=()=>{
        this.props.navigation.goBack();
    }
    buttonPress=()=>{
        this.props.navigation.navigate('Tabs')
    }
}