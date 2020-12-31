import React,{ Component } from "react";
import { View,ScrollView,FlatList,Text,TouchableOpacity,SafeAreaView,Platform,Dimensions,Image } from "react-native";
import Button from "../../../component/button.js";
import Header from '../../../component/header'
import styles from './style'
import assets from '../../../assets/index'

export default class jobhome extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    rightView = () => {
        return (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Test');
            //   this.props.navigation.navigate('postjob');
             }}
            style={{ width: 120 }}>
            <Text style={{
              paddingTop: Platform.OS == "ios" ? 20 : 0,color: "#fff",fontSize: 17,
              fontWeight: "700",fontFamily: "Montserrat-Bold",paddingEnd: 1
            }}>{"Post Job"}</Text>
          </TouchableOpacity>
        );
      }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: "#ffffff" }}>
                <Header title={""} rightButtonComponent={this.rightView()}></Header>
                {this.loadView()}
            </View>
        );
    }
    loadView = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    numColumns={2}
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({ item,index }) => {
                        return this.singleView(item,index)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </SafeAreaView>
        );
    }
    singleView = (item,index) => {

        return (
            <TouchableOpacity
                onPress={() => {
                    console.log('called')
                    this.props.navigation.navigate('job',{ item: item })
                }}
                style={{
                    flex: 1,backgroundColor: "#fff",
                    margin: 5,borderRadius: 20,elevation: 1,flexDirection: "column",
                    padding: 15,borderWidth: 1,borderColor: "#d4d2d0"
                }}>

                <View style={{ flex: 1 }}>
                    <Image style={{
                        alignSelf: "flex-start",
                        tintColor: "#005e39",width:96
                    }} source={assets.icons.job}></Image>
                    <Text numberOfLines={2} style={{
                        fontSize: 17,
                        fontFamily: "Montserrat-Bold",color: "#2d2d2d",
                        textAlign: "left"
                    }}>
                        {item.title}</Text>
                </View>



            </TouchableOpacity>
        );
    }



    componentDidMount() {
        this.setLocalValue()
    }

    setLocalValue = () => {
        let list = [
            { img: "",title: "Web , Mobile & Software Dev" },
            { img: "",title: "Design & Creative" },
            { img: "",title: "Writing" },
            { img: "",title: "Sales & Marketing" },
            { img: "",title: "Admin Support" },
            { img: "",title: "Customer Support" },
            { img: "",title: "Data Science & Analytics" },
            { img: "",title: "Engineering & Architecture" }
        ]
        this.setState({ list: list },() => { });
    }
}
