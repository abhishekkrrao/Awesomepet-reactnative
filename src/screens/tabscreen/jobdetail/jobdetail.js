import React,{ Component } from "react";
import { View,ScrollView,FlatList,Text,SafeAreaView,LogBox } from "react-native";
import Button from "../../../component/button.js";
import Header from '../../../component/header'
import styles from './style'
import assets from '../../../assets/index'
import RazorpayCheckout from 'react-native-razorpay';
export default class jobdetail extends Component {
    constructor(props) {
        super(props);
        this.state = { item: {} }
    }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: "#ffffff" }}>
                <Header></Header>
                {this.loadView()}
            </View>
        );
    }
    loadView = () => {
        return (
            <ScrollView style={{ flex: 1 }}>
                {this.singleView(this.state.item)}
                <Button
                    isImage={true}
                    onPress={() => {
                        this.onClickApplyNow()
                    }} style={{ marginTop: 15,alignSelf: "center" }} title="Apply Now">

                </Button>
            </ScrollView>
        );
    }
    singleView = (item) => {

        return (
            <View style={{
                flex: 1,backgroundColor: "#fff",
                margin: 5,borderRadius: 20,elevation: 5,flexDirection: "column",
                padding: 15
            }}>

                <Text numberOfLines={2} style={{ fontSize: 17,fontFamily: "Montserrat-Bold",color: "#2d2d2d" }}>{item.jobTitle}</Text>
                <Text numberOfLines={2} style={{ fontSize: 14,fontFamily: "Montserrat-Medium",color: "#2d2d2d" }}>{item.cName}</Text>
                <Text numberOfLines={2} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d" }}>{item.address}</Text>
                <Text numberOfLines={2} style={{ fontSize: 15,fontFamily: "Montserrat-Medium",color: "#2d2d2d" }}>{item.salary}</Text>
                <Text numberOfLines={1} style={{ fontSize: 17,paddingTop: 5,fontFamily: "Montserrat-Bold",color: "#2d2d2d" }}> {"Requirements"}</Text>
                <View style={{ flexDirection: "column",paddingTop: 5 }}>
                    <Text numberOfLines={1} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d" }}>{"Experience : " + item.experience}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d" }}>{"Degree : " + item.degree}</Text>
                </View>



                <Text numberOfLines={1} style={{ fontSize: 17,paddingTop: 5,fontFamily: "Montserrat-Bold",color: "#2d2d2d" }}> {"Job Description"}</Text>
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        extraData={this.state}
                        data={item.jobDescription}
                        renderItem={({ item: subitem,subindex }) => {
                            return this.dotsTextView(subitem,subindex);
                        }}
                        keyExtractor={({ subindex }) => subindex + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                    />
                </SafeAreaView>

                <View style={{ flexDirection: "row",paddingTop: 5,flex: 1 }}>
                    <Text numberOfLines={1} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d",flex: 1 }}>{item.jobPostDate}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d",textAlign: "center",flex: 1 }}>{item.jobStatus}</Text>
                </View>


            </View>
        );
    }

    dotsTextView = (subitem,subindex) => {
        return (
            <Text>{'\u2022'}
                <Text style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d",paddingTop: 5 }}>{subitem}</Text>
            </Text>
        );
    }

    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        let params = this.props.navigation.state.params.item;
        this.setState({ item: params })
    }
    onClickApplyNow = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_lHpBxhHNsBq3hr',
            amount: '5000',
            name: 'Acme Corp',
            order_id: 'order_DslnoIgkIDL8Zt',
            prefill: {
                email: 'abhishekkrrao@gmail.com',
                contact: '7678658965',
                name: 'abhishek kumar'
            },
            theme: { color: '#53a20e' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }

}
