import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { NativeRouter, Link, Route } from "react-router-native";
import DetailsScreen from "./DetailsScreen";
import Form from "./Form";
import Home from "./Home";
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    position:'relative',
    zIndex:2
  },
  cart: {
    width: 45,
    height: 45
  },
  bg:{
    backgroundColor:'#eaebed',
    marginTop:25,
    paddingHorizontal:40,
    paddingVertical:10,
    flexDirection: 'row',
    position:'absolute',
    width:ScreenWidth,
    overflow:'hidden',
    zIndex:5,
    alignItems:'center',
    justifyContent:'space-between',
    bottom:-30,
    left:0,
    borderColor:'grey'
  },
  iconImage:{
    height:50,
    width:50
  },
  textColor:{
    color:'white'
  },
  totalHeight:{
    height:ScreenHeight,
    position:'relative',
    zIndex:1
  },

});
export default function App() {
  return (
    <NativeRouter>
      <View style={styles.totalHeight}>
        <View style={styles.bg}>
            <Link to="/">
              <Image style={styles.cart} source={{uri:"https://dixonpestcontrol.com/wp-content/uploads/2017/10/house-icon.png"}}/>
            </Link>
            <Link to="/form">
              <Image style={styles.cart} source={{uri:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"}}/>
            </Link>
            <Link to="/details">
              <Image style={styles.cart} source={{uri:"https://accessories.edunet.com.au/Content/images/OrderSearch.png"}}/>
            </Link>
        </View>
        
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={DetailsScreen} />
          <Route path="/form" component={Form} />
        </View>
      </View>
    </NativeRouter>
  );
}

