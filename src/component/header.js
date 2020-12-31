import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Platform } from 'react-native'
import { withNavigation } from 'react-navigation'
import assets from '../assets/index.js'
import { styles as commonStyles, dimensions, colors } from '../res'

const Header = ({ title, navigation, style, rightButtonComponent }) => (
    <View style={[styles.headerView, style]}>
        <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()}>
            {getBackIconInApp(title)}
        </TouchableOpacity>
        {rightButtonComponent && <View style={styles.rightButtonView}>{rightButtonComponent}</View>}
        {getBackTitleInApp(title, style)}
    </View>
)

function getBackIconInApp(title) {
    if (title == "") {
        return (<TouchableOpacity onPress={{}}>
        </TouchableOpacity>)
    } else {
        return (<Image source={assets.icons.back} resizeMode='contain' style={styles.backIcon} />);
    }

}

function getBackTitleInApp(title, style) {

    return Platform.OS == 'android' ? (<Text style={[styles.headerTitleTexts]}>{title}</Text>) : (<Text style={[styles.headerTitleTexts]}>{""}</Text>);
}

const styles = StyleSheet.create({
    headerView: {
        height: dimensions.headerHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#278c63",
        ...commonStyles.shadowBottom,
        zIndex: 1
    },
    headerTitleTexts: {
        fontSize: 18, marginTop: 5, color: "#fff", fontFamily: "Montserrat-Medium"
    }, headerTitleText: {
        fontSize: 21,
        fontWeight: '600',
        alignSelf: 'center'
    },
    headerTitleTextMain: {
        backgroundColor: "#ccc", fontSize: 28, fontWeight: "900"
    },
    backButtonView: {
        position: 'absolute',
        left: 0,
        padding: 20
    },
    rightButtonView: {
        position: 'absolute',
        right: 0
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: "white"
    }
})

export default withNavigation(Header)
