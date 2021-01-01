import React,{ Component } from "react";
import {
    loading,login,signup,profile,job,jobdetail,jobhome,
    postjob,OtpPage,Test,PetHome,PetDetail,Movie,VideoPlayer
} from '../screens'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import assets from '../assets/index'
import { createAppContainer,StackActions,NavigationActions } from 'react-navigation';
import { Image,StatusBar,Platform } from "react-native";
import styles from './style'
console.disableYellowBox = true;
const TabNavigator = createBottomTabNavigator({
    Job: {
        screen: jobhome,
        navigationOptions: {
            title: "Job",
            headerLeft: null,
            header: {
                visible: false,
                left: null,
            },
            backButton: {
                visible: false,
            }
        }
    },Profile: {
        screen: profile,
        navigationOptions: {
            title: "Profile",
            headerLeft: null,
            header: {
                visible: false,
                left: null,
            },
            backButton: {
                visible: false,
            }
        }
    }
},{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            switch (routeName) {
                case 'Job':
                    if (focused) {
                        return (<Image source={assets.icons.job} resizeMode='contain' style={styles.backIconFocused} />)
                    } else {
                        return (<Image source={assets.icons.job} resizeMode='contain' style={styles.backIconUnFocused} />)
                    }
                case 'Profile':
                    if (focused) {
                        return (<Image source={assets.icons.user} resizeMode='contain' style={styles.backIconFocused} />)
                    } else {
                        return (<Image source={assets.icons.user} resizeMode='contain' style={styles.backIconUnFocused} />)
                    }
            }
        },
    }),tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#ccc',
        activeBackgroundColor: '#fff',
        labelStyle: { fontSize: 14,fontFamily: "Montserrat-Medium" },
        tabStyle: { fontSize: 14,fontFamily: "Montserrat-Medium" },
        style: { height: 55,borderStyle: 'solid',backgroundColor: "#278c63",fontFamily: "Montserrat-Medium" }
    },
});


const AppNavigator = createStackNavigator({
    loading: { screen: loading },
    login: { screen: login },
    signup: { screen: signup },
    profile: { screen: profile },
    job: { screen: job },
    jobdetail: { screen: jobdetail },
    jobhome: { screen: jobhome },
    postjob: { screen: postjob },
    Tabs: { screen: TabNavigator },
    OtpPage: { screen: OtpPage },
    Test: { screen: Test },
    PetHome: { screen: PetHome },
    PetDetail: { screen: PetDetail },
    Movie: { screen: Movie },
    VideoPlayer: { screen: VideoPlayer },
},{
    headerMode: 'none'
});
const AppContainer = createAppContainer(AppNavigator);
export default class navigator extends React.Component {

    render() {
        return (<AppContainer ref={(r) => { r != null ? this.navigation = r._navigation : ""; }} />);
    }
    componentDidMount() {
        Platform.OS == "android" ? StatusBar.setBackgroundColor("#005e39") : "",
            setTimeout(() => { this.lounchApp('Movie'); },2000);
    }

    lounchApp = (initialRouteName) => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({
                routeName: initialRouteName
            })],
        })
        this.navigation.dispatch(resetAction);
    }
}