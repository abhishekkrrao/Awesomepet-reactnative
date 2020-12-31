import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0, 
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"
  },

});
export default class loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#005e39" />
      </View>
    );
  }
}
