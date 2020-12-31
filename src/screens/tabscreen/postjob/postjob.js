import React,{ Component } from "react";
import { View,Text,TextInput,Keyboard,Image,ScrollView } from "react-native";
import Button from "../../../component/button.js";
import Header from '../../../component/header'
import styles from './style'
import assets from '../../../assets/index'
export default class postjob extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cName: "",jTitle: "",jAddress: "",jSalary: "",
            skills: "",experience: ""
        }
    }

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: "#ffffff" }}>
                <Header></Header>
                <ScrollView>
                    {this.loginView()}
                </ScrollView>
            </View>
        )
    }
    componentDidMount() {

    }

    loginView = () => {
        return (
            <View style={{ width: "100%",flex: 1,padding: 20 }}>

                <Text
                    numberOfLines={2}
                    style={{
                        justifyContent: "center",alignSelf: "flex-start",
                        fontFamily: "Montserrat-Bold",
                        paddingTop: 20,color: "#494949",fontSize: 23
                    }}>
                    {"Post Your Job"}
                </Text>

                <Text
                    numberOfLines={2}
                    style={{
                        justifyContent: "center",alignSelf: "flex-start",
                        fontFamily: "Montserrat-Medium",
                        paddingTop: 5,color: "#d84315",fontSize: 11
                    }}>
                    {"Note : - Please enter all details as mentioned in the placeholder of their respective fields ."}
                </Text>


                <TextInput
                    style={[styles.textInput,{ marginTop: 20 }]}
                    mode="text"
                    maxLength={36}
                    placeholder="Company Name ex. Affle India"
                    returnKeyType={"next"}
                    onSubmitEditing={() => { this.jTitle.focus(); }}
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ cName: value }) }}
                    value={this.state.cName}
                />

                <TextInput
                    ref={(input) => { this.jTitle = input; }}
                    style={styles.textInput}
                    mode="text"
                    returnKeyType={"done"}
                    maxLength={16}
                    onSubmitEditing={() => {
                        Keyboard.dismiss();
                        this.jAddress.focus();
                    }}
                    placeholder="Job title ex. Software engineer"
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ jTitle: value }) }}
                    value={this.state.jTitle}
                />

                <TextInput
                    ref={(input) => { this.jAddress = input; }}
                    style={styles.textInput}
                    mode="text"
                    returnKeyType={"done"}
                    maxLength={56}
                    onSubmitEditing={() => { 
                        Keyboard.dismiss();
                        
                     }}
                    placeholder="Job Address ex. Gurgaon Haryana"
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ jAddress: value }) }}
                    value={this.state.jAddress}
                />

                <TextInput
                    ref={(input) => { this.password = input; }}
                    style={styles.textInput}
                    mode="numeric"
                    returnKeyType={"done"}
                    maxLength={56}
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    placeholder="Salary ex. 40,000"
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ password: value }) }}
                    value={this.state.password}
                />

                <TextInput
                    ref={(input) => { this.password = input; }}
                    style={styles.textInput}
                    mode="text"
                    returnKeyType={"done"}
                    maxLength={56}
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    placeholder="Skills ex. Ionic,Flutter"
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ password: value }) }}
                    value={this.state.password}
                />

                <TextInput
                    ref={(input) => { this.password = input; }}
                    style={styles.textInput}
                    mode="text"
                    returnKeyType={"done"}
                    maxLength={56}
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    placeholder="Experience ex. 4 years"
                    blurOnSubmit={false}
                    onChangeText={value => { this.setState({ password: value }) }}
                    value={this.state.password}
                />


                <Button onPress={() => {
                    this.buttonPress()
                }} style={{ marginTop: 15,alignSelf: "flex-end" }} title="Post Job">

                </Button>

            </View>
        )
    }
    buttonPress = () => {
        console.log('Called');
        // this.props.navigation.navigate('Tabs')
    }
    onSignupButtonPress = () => {
        // this.props.navigation.navigate('signup')
    }
}