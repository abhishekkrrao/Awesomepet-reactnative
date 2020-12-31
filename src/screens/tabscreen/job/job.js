import React,{ Component } from "react";
import { View,ScrollView,FlatList,Text,TouchableOpacity,SafeAreaView,Platform,Dimensions } from "react-native";
import Button from "../../../component/button.js";
import Header from '../../../component/header'
import styles from './style'
import assets from '../../../assets/index'
const { height,width } = Dimensions.get('window');
const aspectRatio = height / width;
export default class jobdetail extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [{ title: "title test" }] }
  }

  rightView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('jobhome');
         }}
        style={{ width: 120 }}>
        <Text style={{
          paddingTop: Platform.OS == "ios" ? 50 : 0,color: "#fff",fontSize: 17,
          fontWeight: "700",fontFamily: "Montserrat-Bold",paddingEnd: 1
        }}>{"Free Agent"}</Text>
      </TouchableOpacity>
    );
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
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          numColumns={aspectRatio > 2.6 ? 2 : 1}
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
          this.props.navigation.navigate('jobdetail',{ item: item })
        }}
        style={{
          flex: 1,backgroundColor: "#fff",
          margin: 5,borderRadius: 20,elevation: 1,flexDirection: "column",
          padding: 15,borderWidth: 1,borderColor: "#d4d2d0"
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
        <FlatList
          extraData={this.state}
          data={item.jobDescription}
          renderItem={({ item: subitem,subindex }) => {
            return this.dotsTextView(subitem,subindex);
          }}
          keyExtractor={({ subindex }) => subindex + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
        />

        <View style={{ flexDirection: "row",paddingTop: 5,flex: 1 }}>
          <Text numberOfLines={1} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d",flex: 1 }}>{item.jobPostDate}</Text>
          <Text numberOfLines={1} style={{ fontSize: 13,fontFamily: "Montserrat-Medium",color: "#2d2d2d",textAlign: "center",flex: 1,color: "green" }}>{item.jobStatus}</Text>
        </View>


      </TouchableOpacity>
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
    this.setLocalValue()
  }

  setLocalValue = () => {
    let list = [
      {
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },
      {
        jobTitle: "healthcare business consultant",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: false,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },
      {
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },
      {
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },
      {
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: false,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },{
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },{
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },{
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      },{
        jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
        address: "Hyderabad, Telangana",experience: "3 years (Required)",
        degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
        jobPostDate: "11 days ago",jobEnd: "1/12/2020",
        jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
          "Design views, dashboards and reports to efficiently reflect the customer use case.",
        ],
        jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
        rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
      }
    ];
    this.setState({ list: list },() => { });
  }
}
