import React,{ Component } from 'react';
import { View,Image,Text,Dimensions,TouchableHighlight, TouchableOpacity } from 'react-native';
const width = Dimensions.get("screen").width;
import assets from '../../assets/index'
class PetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            title: "",
            type: "",
            detail: ""
        }
    }
    render() {
        return (
            <View
                style={{ flex: 1,backgroundColor: "#e0e0e0" }}>

                <View
                    style={{ flex: 1,height: 250 }}>


                    <TouchableOpacity
                        onPress={() => {
                        
                            this.props.navigation.goBack();
                        }}
                        style={{
                            width: 66,
                            height: 66,paddingTop: 16
                        }}>
                        <Image
                            style={{
                                width: 32,
                                height: 32,
                                position: "absolute",left: 16,top: 26
                            }}
                            resizeMode={"contain"}
                            source={assets.pet.back}
                        >
                        </Image>
                    </TouchableOpacity>


                    {this.state.image != "" && <Image
                        style={{
                            width: "100%",
                            height: 250
                        }}
                        resizeMode={"contain"}
                        source={this.state.image}
                    >
                    </Image>}
                </View>
                <View
                    style={{
                        flex: 2,backgroundColor: "#fff",
                        borderTopLeftRadius: 35,borderTopRightRadius: 35
                    }}>

                    <View
                        style={{ height: 130,padding: 20 }}>
                        <Text
                            style={{ fontSize: 23,fontFamily: "Montserrat-Medium" }}
                        >{this.state.title}</Text>
                        <Text
                            style={{
                                fontSize: 27,
                                fontFamily: "Poppins-Bold"
                            }}
                        >{this.state.type}</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#F2F3F8",
                            width: width,flex: 1,borderTopLeftRadius: 35,borderTopRightRadius: 35
                        }}>

                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row"
                            }}>

                            <View
                                style={{
                                    width: (width / 3.6),justifyContent: "center",alignItems: "center",
                                    flexDirection: "column",backgroundColor: "#fff",margin: 10,borderRadius: 5,padding: 9
                                }}>
                                <Text
                                    style={{ fontSize: 16,fontFamily: "Montserrat-Medium",color: "#121212" }}
                                >{"Age"}</Text>
                                <Text
                                    style={{
                                        fontSize: 19,
                                        fontFamily: "Poppins-Bold"
                                    }}
                                >{"1 Year"}</Text>
                            </View>


                            <View
                                style={{
                                    width: (width / 3.6),justifyContent: "center",alignItems: "center",
                                    flexDirection: "column",backgroundColor: "#fff",margin: 10,borderRadius: 5,padding: 9
                                }}>
                                <Text
                                    style={{ fontSize: 16,fontFamily: "Montserrat-Medium",color: "#121212" }}
                                >{"Sex"}</Text>
                                <Text
                                    style={{
                                        fontSize: 19,
                                        fontFamily: "Poppins-Bold"
                                    }}
                                >{"Male"}</Text>
                            </View>


                            <View
                                style={{
                                    width: (width / 3.6),justifyContent: "center",alignItems: "center",
                                    flexDirection: "column",backgroundColor: "#fff",margin: 10,borderRadius: 5,padding: 9
                                }}>
                                <Text
                                    style={{ fontSize: 16,fontFamily: "Montserrat-Medium",color: "#121212" }}
                                >{"Weight"}</Text>
                                <Text
                                    style={{
                                        fontSize: 19,
                                        fontFamily: "Poppins-Bold"
                                    }}
                                >{"8.5Kg"}</Text>
                            </View>



                        </View>


                        <View
                            style={{ padding: 20 }}>
                            <Text
                                style={{
                                    fontSize: 19,
                                    fontFamily: "Poppins-Bold"
                                }}
                            >{"Pet Story"}</Text>


                            <Text
                                style={{
                                    fontSize: 11,
                                    fontFamily: "Montserrat-Medium"
                                }}
                            >{this.state.detail}</Text>


                        </View>





                        <View
                            style={{
                                padding: 20,backgroundColor: "#fff",height: 120,
                                position: "absolute",right: 0,left: 0,bottom: 0,borderTopLeftRadius: 35,borderTopRightRadius: 35
                            }}>

                            <View
                                style={{
                                    flexDirection: "row"
                                }}>

                                <View
                                    style={{
                                        width: width / 2,
                                        flexDirection: "row"
                                    }}>

                                    <Image
                                        style={{
                                            height: 56,width: 56,
                                            borderRadius: 15
                                        }}
                                        source={assets.pet.c9}
                                    >
                                    </Image>
                                    <View
                                        style={{
                                            flexDirection: "column",
                                            paddingLeft: 5,justifyContent: "center"
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontFamily: "Poppins-Bold"
                                            }}
                                        >{"Abhishek Rao"}</Text>

                                        <Text
                                            style={{
                                                fontSize: 13,
                                                fontFamily: "Montserrat-Medium"
                                            }}
                                        >{"Owner"}</Text>
                                    </View>

                                </View>


                                <View style={{
                                    width: width / 2,alignItems: "center",
                                    justifyContent: "center"
                                }}>

                                    <TouchableHighlight
                                        style={{
                                            backgroundColor: "#7c4dff",borderRadius: 15
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 15,width: 150,
                                                height: 45,textAlign: "center",
                                                color: "#fff",
                                                fontFamily: "Poppins-Bold",paddingTop: 10,

                                            }}
                                        >{"Contact Me"}</Text>
                                    </TouchableHighlight>


                                </View>

                            </View>


                        </View>


                    </View>
                </View>

            </View>
        );
    }
    componentDidMount() {
        let params = this.props.navigation.state.params.item;
        this.setState({ image: params.img,type: params.type,title: params.title,detail: params.detail })
    }
}

export default PetDetail;