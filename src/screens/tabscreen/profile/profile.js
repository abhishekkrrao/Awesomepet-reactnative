import React,{ Component } from "react";
import { View,ScrollView,Image,Text } from "react-native";
import Button from "../../../component/button.js";
import Header from '../../../component/header'
import styles from './style'
import assets from '../../../assets/index'

export default class profile extends Component {
  render() {
    return (
      <View style={{ flex: 1,backgroundColor: "#f2f2f2" }}>
        <Header></Header>
        <ScrollView>

          {this.userView()}
          {this.userWorkView()}
          {this.userWorkHistoryView()}
          {this.userWorkExView()}
          {this.userEmployeHistoryView()}


        </ScrollView>
      </View>
    );
  }
  userView = () => {
    return (<View style={{
      flex: 1,width: "95%",backgroundColor: "#fff",flexDirection: "row",
      elevation: 1,margin: 8,alignSelf: "center",borderRadius: 5
    }}>

      <View style={{ width: 100 }}>
        <Image style={{ borderRadius: 50,margin: 20 }} source={{ width: 76,height: 76,uri: "https://www.upwork.com/profile-portraits/c1XVE9IufoRRCQTDUj53BSarOY-_BgmMhQ4Y6DCtDeG_P4iTqOX13NSS9O116kWpmk" }}></Image>
      </View>
      <View style={{ width: "100%",padding: 15 }}>
        <Text style={{ fontSize: 19,color: "#222222",fontFamily: "Montserrat-Bold",padding: 5 }}>{"Abhishek Kumar Rao"}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5 }}>{"gurugram, India "}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5 }}>{"04:12 AM Local time"}</Text>
      </View>
    </View>);
  }

  userWorkView = () => {
    return (<View style={{
      flex: 1,width: "95%",backgroundColor: "#fff",flexDirection: "row",
      elevation: 1,margin: 8,alignSelf: "center",borderRadius: 5
    }}>


      <View style={{ width: "100%",padding: 15 }}>
        <Text style={{ fontSize: 19,color: "#222222",fontFamily: "Montserrat-Bold",padding: 5 }}>{"Mobile Application Developer at Affle India"}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5 }}>{"$5.00/hr "}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5 }}>
          {
            "Experienced Mobile Application Developer with a demonstrated"
            + " history of working in the internet industry. Skilled in React-"
            + "Native, Ionic Framework, and Android Native. Strong engineering"
            + "professional with a Bachelor's degree focused in Computer Science"
            + "from Shri Ram Institute of Technology. "
          }
        </Text>
      </View>
    </View>);
  }

  userWorkHistoryView = () => {
    return (<View style={{
      flex: 1,width: "95%",backgroundColor: "#fff",flexDirection: "row",
      elevation: 1,margin: 8,alignSelf: "center",borderRadius: 5
    }}>


      <View style={{ width: "100%",padding: 15 }}>
        <Text style={{ fontSize: 19,color: "#222222",fontFamily: "Montserrat-Bold",padding: 5 }}>{"Work History"}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5 }}>{"No Items "}</Text>

      </View>
    </View>);
  }

  userWorkExView = () => {
    return (<View style={{
      flex: 1,width: "95%",backgroundColor: "#fff",flexDirection: "column",
      elevation: 1,margin: 8,alignSelf: "center",borderRadius: 5
    }}>


      <View style={{ width: 100,padding: 15 }}>
        <Text style={{ fontSize: 19,color: "#222222",fontFamily: "Montserrat-Bold",padding: 5 }}>{"Skills"}</Text>
      </View>
      <View style={{ padding: 5,flexDirection: "row",flex: 1 }}>
        <Text style={{ flex: 1,fontSize: 14,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5,backgroundColor: "#f2f2f2",borderRadius: 15,marginLeft: 5,textAlign: "center",overflow: "hidden" }}>{"Ionic"}</Text>
        <Text style={{ flex: 1,fontSize: 14,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5,backgroundColor: "#f2f2f2",borderRadius: 15,marginLeft: 5,textAlign: "center",overflow: "hidden" }}>{"React Native"}</Text>
        <Text style={{ flex: 1,fontSize: 14,color: "#222222",fontFamily: "Montserrat-Medium",padding: 5,backgroundColor: "#f2f2f2",borderRadius: 15,marginLeft: 5,textAlign: "center",overflow: "hidden" }}>{"Flutter"}</Text>
      </View>
    </View>);
  }

  userEmployeHistoryView = () => {
    return (<View style={{
      flex: 1,width: "95%",backgroundColor: "#fff",flexDirection: "column",
      elevation: 1,margin: 8,alignSelf: "center",borderRadius: 5
    }}>


      <View style={{ width: "100%",padding: 15 }}>
        <Text style={{ fontSize: 19,color: "#222222",fontFamily: "Montserrat-Bold",padding: 5 }}>{"Employment history "}</Text>
      </View>

      <View style={{ padding: 5,flexDirection: "column",flex: 1 }}>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",paddingLeft: 15 }}>{"Mobile Application Developer | Affle"}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",paddingLeft: 15,paddingTop: 5,paddingBottom: 5 }}>{"June 2019 - Present"}</Text>
      </View>
      <View style={{ width: "96%",height: 1,backgroundColor: "#ccc",marginLeft: 15 }}></View>


      <View style={{ padding: 5,flexDirection: "column",flex: 1 }}>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",paddingLeft: 15 }}>{"Mobile Application Developer | Affle"}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",paddingLeft: 15,paddingTop: 5,paddingBottom: 5 }}>{"June 2019 - Present"}</Text>
      </View>
      <View style={{ width: "96%",height: 1,backgroundColor: "#ccc",marginLeft: 15 }}></View>

      <View style={{ padding: 5,flexDirection: "column",flex: 1 }}>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",paddingLeft: 15 }}>{"Mobile Application Developer | Affle"}</Text>
        <Text style={{ fontSize: 15,color: "#222222",fontFamily: "Montserrat-Medium",paddingLeft: 15,paddingTop: 5,paddingBottom: 5 }}>{"June 2019 - Present"}</Text>
      </View>


    </View>);
  }
}
