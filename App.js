/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import{
  View,
  Text,
  AppRegistry,
  Image,
  StyleSheet
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class MainScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.background} source={require('./Image/BackGround.png')}/>
          <View style={styles.rectangle}>
          <Text style={styles.lifestyle2}> LifeStyle </Text>
          </View>

          <View style={styles.avatar}>
            <View style={{flex:1, alignItems: "flex-start"}}>
              <Image style={styles.image} source={require('./Image/Avatar.jpg')} />
              <Text style={styles.Name}> Erick Smith </Text>
              <Text style={styles.Time}> Saturday at 12:00pm </Text>
            </View>
            <View style={{alignItems:"flex-end", flex:1, marginRight: 30}}>
              <Entypo
                name="dots-three-vertical"
                style={styles.icon}
                />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={{justifyContent: "flex-start", flex: 1}}>
            <Text style={styles.Title}>
              Top 10 Yoga paths you could take to be stress free today
            </Text>
          </View>
          <View style={{justifyContent: "flex-start", flex:1}}>
            <Text style={styles.readmore}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam Read more...
            </Text>
            <View style={{borderWidth: 0.5, borderColor: "grey", marginTop: 50,
          marginLeft: 50, marginRight: 50}} ></View>
          </View>
          <View style={styles.part3}>
            <View style={{flex:1, alignItems: "flex-start"}}>
                <EvilIcons
                name="like"
                size={24}
                color={'yellow'}
                />
            </View>
            <View style={{flex:1, alignItems: "flex-start"}}>
                <MaterialCommunityIcons
                name="android-messages"
                size={24}
                color={'grey'}
                />
            </View>
            <View style={{flex:1, alignContent: "flex-start"}}>
            <Entypo
                name="share"
                size={24}
                color={'grey'}
                />
            </View>
            <View style={{flex:3, alignItems: "flex-end", marginRight: 25}}>
              <View>
                <Text style={{width: 35, height: 15, position: "absolute",
                fontFamily:"Roboto", fontStyle:"normal", fontSize:10,
                fontWeight: "500", color: "black"}}> +127 </Text>
              </View>
              <View style={{paddingRight: 20}}>
              <Image style={styles.image2} source={require('./Image/BackGround.png')} />
              </View>
              <View style={{paddingRight: 35}}>
              <Image style={styles.image2} source={require('./Image/Avatar.jpg')} />
              </View>
              <View style={{paddingRight: 50}}>
              <Image style={styles.image2} source={require('./Image/dota.jpg')} />
              </View>
              <View style={{paddingRight: 65}}>
              <Image style={styles.image2} source={require('./Image/nvm.jpg')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    //justifyContent: "flex-end",
  },
  body:{
    flex:1,
  },
  header:{
    flex:2,
    marginTop: 20,
  },
  background:{
    height: 360,
    width: 320,
    marginTop: 10,
    alignSelf: "center",
    position: "absolute"
  },
  // lifestyle:{
  //   width: 70,
  //   height: 18,
  //   position: "absolute",
  //   marginLeft: 55,
  //   marginTop: 60,
  //   shadowColor: "black",
  //   shadowOffset:{
  //     width: 4,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  // },
  lifestyle2:{
    width: 49,
    height: 15,
    marginLeft: 65,
    position: "absolute",
    marginTop: 64,
    fontWeight: "500",
    fontSize: 10,
    color: "white",
    textTransform: "uppercase",
    fontStyle: "normal",
    fontFamily: "Roboto",
  },
  rectangle:{
    width: 70,
    height: 13,
    marginLeft: 55,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: "orange",
    position: "absolute"
  },
  avatar:{
    position: "absolute",
    width: 300,
    height: 30,
    marginLeft: 55,
    marginTop: 320,
    flexDirection: "row"
  },
  icon:{
    position: "absolute",
    width: 18,
    height: 18,
    marginTop:8,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "MaterialIcon",
    color: "red"
  },
  image:{
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: "pink",
    borderWidth: 1,
  },
  Name:{
    position:"absolute",
    width: 72,
    height: 17,
    marginLeft: 50,
    marginTop: 0,
    fontWeight: "500",
    fontSize: 14,
    color: "white"
  },
  Time:{
    position: "absolute",
    width: 96,
    height: 12,
    marginLeft: 50,
    marginTop: 15,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    color: "grey"
  },
  Title:{
    position: "absolute",
    alignSelf: "center",
    width:260,
    height: 45,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    letterSpacing: 0.0015,
    color: "black"
  },
  readmore:{
    position: "absolute",
    alignSelf: "center",
    width: 260,
    height: 30,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 8,
    letterSpacing: 0.004,
    color: 'black'
  },
  part3:{
    // position: "absolute",
    alignSelf: "center",
    width: 260,
    flexDirection: "row",
    flex: 1,
  },
  image2:{
    borderRadius:30,
    width: 23,
    height: 23,
    borderColor: "pink",
    position: "absolute",
    borderWidth: 1,
  },
});

export default MainScreen;

AppRegistry.registerComponent('TestFigma',()=>MainScreen);