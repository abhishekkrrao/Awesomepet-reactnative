import React,{ Component } from 'react';
import Video from 'react-native-af-video-player'
import { StyleSheet,View,Image,Text,ScrollView } from 'react-native'
import { AirbnbRating } from 'react-native-elements';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    container1: {
        flex: 1,
        height: 400
    }
})
class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",logo: "",
            params: {}
        }
    }
    onFullScreen(status) {
        this.props.navigation.setParams({
            fullscreen: !status
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
                    <View style={styles.container1}>
                        {this.state.url != "" &&
                            <Video
                                onFullScreen={status => this.onFullScreen(status)}
                                fullScreenOnly
                                ref={(ref) => { this.video = ref }}
                                url={this.state.url} />}


                        <View style={[styles.container1,{
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            padding: 5
                        }]}>
                            <Image
                                resizeMode={"contain"}
                                style={{ height: 200 }}
                                source={this.state.logo}></Image>

                            <View

                                style={{
                                    alignSelf: "flex-start",width: 100,
                                    padding: 5,marginStart: 10
                                }}>
                                <AirbnbRating
                                    type='heart'
                                    count={5}
                                    size={16}
                                    showRating={false}
                                    defaultRating={(this.state.params.rate - 5)}
                                    onFinishRating={this.ratingCompleted}
                                />
                            </View>
                            <Text
                                style={{ textAlign: "left",color: "#fff",fontFamily: "Poppins-Bold" }}>
                                {this.state.params.title}
                            </Text>

                            <Text
                                style={{ textAlign: "left",color: "#fff",padding: 5 }}>
                                {this.replaceUnnecessary(this.state.params.description)}
                            </Text>


                            <Text
                                style={{ textAlign: "left",color: "#fff",fontFamily: "Montserrat-Medium" }}>
                                {this.state.params.title}
                            </Text>


                           {this.state.params && <Text
                                style={{ color: '#fff' }}
                            >
                                {/* {this.state.params.duration.hours + ":" + this.state.params.duration.minutes + " hours"} */}
                            </Text>}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
    replaceUnnecessary(string) {
        var str = string + "";
        return str.replace(/  +/g,' ');
    }
    componentDidMount() {
        let params = this.props.navigation.state.params.item;
        console.log("params ",params)
        console.log("params ",params.duration.hours)
        this.setState({
            params: params,url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",logo: params.imageUrl
        })
    }
}

export default VideoPlayer;