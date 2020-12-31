import React,{ Component } from 'react';
import assets from '../../assets/index'
import { View,ScrollView,Image,Dimensions,Text,FlatList,TouchableOpacity } from 'react-native';
const width = Dimensions.get("screen").width;
class PetHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            aList: []
        }
    }
    render() {
        return (
            <View style={{ flex: 1,zIndex: 0 }}>
                <ScrollView style={{ flex: 1,zIndex: 0 }} contentContainerStyle={{ flex: 1 }}>
                    <View style={{ padding: 10,zIndex: 0 }}>
                        <Image
                            style={{
                                height: 56,width: 56,alignSelf: "flex-end",
                                margin: 15,borderRadius: 15
                            }}
                            source={assets.pet.c9}
                        >
                        </Image>

                        <View
                            style={{ width: width - 25,height: 35 }}>
                            <Text
                                style={{ fontSize: 23,paddingLeft: 5,fontFamily: "Montserrat-Medium" }}>
                                {"Find Your"}</Text>
                        </View>


                        <View
                            style={{
                                width: width - 25,height: 35
                            }}>
                            <Text
                                style={{
                                    fontSize: 27,paddingLeft: 5,
                                    fontFamily: "Poppins-Bold"
                                }}>
                                {"Awesome Pet"}</Text>
                            <Image
                                style={{
                                    height: 35,width: 35,alignSelf: "flex-end",
                                    tintColor: "#7c4dff",position: "absolute",top: 0,
                                    right: 0
                                }}
                                source={assets.pet.search}
                            >
                            </Image>
                        </View>



                        <FlatList
                            style={{ height: 120,marginTop: 20,zIndex: 0 }}
                            horizontal={true}
                            extraData={this.state}
                            data={this.state.aList}
                            renderItem={({ item,index }) => {
                                return this.singleView(item,index)
                            }}
                            keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                        />

                        <View
                            style={{ width: width - 25,height: 35,marginTop:15 }}>
                            <Text
                                style={{ fontSize: 23,paddingLeft: 5,fontFamily: "Montserrat-Medium" }}>
                                {"Newest Pet"}</Text>
                        </View>

                        <FlatList
                            style={{ width: "100%",height: "100%" }}
                            numColumns={2}
                            extraData={this.state}
                            data={this.state.list}
                            renderItem={({ item,index }) => {
                                return this.singleNewView(item,index)
                            }}
                            keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

    singleView = (item,index) => {
        return (
            <View
                style={{
                    width: 150,height: 65,marginTop: 25,
                    backgroundColor: item.isselect ? "#7c4dff" :"#fff",marginEnd: 10,borderRadius: 5,
                    justifyContent: "center"
                }}>

                <TouchableOpacity
                    onPress={()=>{
                        // this.props.navigation.navigate("PetDetail");
                    }}
                    style={{
                        height: 55,width: 75,
                        position: "absolute",top: -20,
                        let: 20,zIndex: 3,elevation: 33
                    }}>
                    <Image
                        style={{
                            height: 65,width: 65
                        }}
                        source={item.img}
                    >
                    </Image>
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 17,
                        alignSelf: "flex-end",paddingEnd: 5,
                        color: !item.isselect ? "#000" :"#fff",fontFamily: "Montserrat-Medium"
                    }}>{item.title}</Text>


            </View>
        );
    }


    singleNewView = (item,index) => {
        return (
            <View
                style={{
                    height: 160,marginTop: 5,flex: 1,
                    backgroundColor: "#fff",marginEnd: 10,borderRadius: 5,
                    justifyContent: "center"
                }}>

                <Image
                    style={{
                        height: 24,width: 24,position:"absolute",top:15,
                        right:15,tintColor:item.color
                    }}
                    source={item.like}
                >
                </Image>

                <TouchableOpacity
                 onPress={()=>{
                    this.props.navigation.navigate("PetDetail",{item:item});
                }}
                    style={{
                        height: 96,width: 96,flexDirection:"column"
                    }}>
                    <Image
                        style={{
                            height: 96,width: 96
                        }}
                        source={item.img}
                    >
                    </Image>
                    <Text
                    style={{
                        color: "#000",fontSize: 17,
                        alignSelf: "center",
                        color: "#000",fontFamily: "Montserrat-Medium"
                    }}>{item.title}</Text>
                </TouchableOpacity>
             


            </View>
        );
    }
    componentDidMount() {
        let list = [
            { img: assets.pet.c1,title: "Oliver",type: "Munchkin",like:assets.pet.like ,color:"#ef5350",
        detail:"Manie Coon cats are known for their intell ignemce and playfulness, as well as their size. One of the largest breeds of domestic cats, they are lovingly referreds"},
            { img: assets.pet.c2,title: "Oscar",type: "Munchkin",like:assets.pet.unlike ,color:"#e0e0e0",
            detail:"Oliver is a family friendly cat. He like to play with us and other cats."},
            { img: assets.pet.c3,title: "Kitty",type: "Munchkin" ,like:assets.pet.unlike,color:"#e0e0e0",
            detail:" Oscar is a areidentic cat. He is very cute and active cat alse."},
            { img: assets.pet.c4,title: "Dexter",type: "Munchkin" ,like:assets.pet.like,color:"#ef5350",
            detail:" Dexter is a baby persion cat. She is a very like tuna. Dexter is also very cute cat."},
            { img: assets.pet.c5,title: "Oliver",type: "Munchkin" ,like:assets.pet.unlike,color:"#e0e0e0",
            detail:" Oscar is a areidentic cat. He is very cute and active cat alse."},
            { img: assets.pet.c6,title: "Oscar",type: "Munchkin" ,like:assets.pet.unlike,color:"#e0e0e0",
            detail:" Oscar is a areidentic cat. He is very cute and active cat alse."},
        ];
        let aList = [
            { img: assets.pet.c1,title: "Cats",type: "Munchkin" ,isselect:true},
            { img: assets.pet.c7,title: "Dogs",type: "Munchkin" ,isselect:false},
            { img: assets.pet.c8,title: "Rabbits",type: "Munchkin" ,isselect:false},
            { img: assets.pet.c4,title: "Cats",type: "Munchkin",isselect:false },
        ];
        this.setState({ list: list,aList: aList },() => { });
    }
}

export default PetHome;