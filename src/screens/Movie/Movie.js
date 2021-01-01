import React,{ Component } from 'react';
import { View,FlatList,TouchableOpacity,Image,Text } from 'react-native';
import data from '../../component/movies'
import { AirbnbRating } from 'react-native-elements';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <View
                style={{ flex: 1,backgroundColor: "#000" }}>
                <FlatList
                    numColumns={1}
                    // horizontal={true}
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({ item,index }) => {
                        return this.singleView(item,index)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />
            </View>
        );
    }
    singleView = (item,index) => {
        return (
            <View
                style={{ flex: 1,height: 400 }}>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("VideoPlayer",{item:item});
                    }}
                    style={{ flex: 1,height: 400 }}>
                    <Image
                        resizeMode={"contain"}
                        source={item.imageUrl}>
                    </Image>
                    <View
                        style={{ position: "absolute",left: 15,bottom: 30,width: "100%" }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: '#fff',fontFamily: "Poppins-Bold",
                                fontSize: 13,width: "85%",paddingBottom: 5
                            }}
                        >
                            {item.title}
                        </Text>
                    </View>
                    <View
                        style={{ position: "absolute",left: 15,bottom: 15,flexDirection: "column" }}>

                        <AirbnbRating
                            type='heart'
                            count={5}
                            size={16}
                            showRating={false}
                            defaultRating={(item.rate - 5)}
                            onFinishRating={this.ratingCompleted}
                        />
                    </View>
                    {/* <View
                    style={{ flex: 1,elevation: 3,backgroundColor:"#fff",
                    padding:20 }}>
                         <Text
                        style={{ color: '#000',fontFamily: "Poppins-Bold",
                    fontSize:21 }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{ color: '#000' }}
                    >
                        {item.description}
                    </Text>

                    <Text
                        style={{ color: '#000' }}
                    >
                        {item.duration.hours+":"+item.duration.minutes+" hours"}
                    </Text>
                </View> */}
                </TouchableOpacity>
            </View>
        );
    }
   
    componentDidMount() {
        console.log(data.data)
        this.setState({ list: data.data.reverse() },() => { });
    }
}

export default Movie;