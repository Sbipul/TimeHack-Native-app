import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image,ScrollView, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  orderImage:{
    height:90,
    width:90
  },
  flex:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
    flexDirection:'row',
    padding:10
  },
  singleView:{
    marginBottom:20,
    backgroundColor:'tomato',
    padding:10
  },
  dg:{
    backgroundColor:'#eaebed',
    marginTop:25,
    paddingHorizontal:40,
    paddingVertical:10,
    flexDirection: 'row',
    position:'absolute',
    width:ScreenWidth,
    overflow:'hidden',
    zIndex:10,
    alignItems:'center',
    justifyContent:'center',
    top:-45,
    left:0,
  },
  relative:{
    position:'relative',
    zIndex:2,
    width:ScreenWidth
  },
  textColor:{
    color:'black',
    fontSize:24
  },
  border:{
    borderColor: "#323e52",
    borderWidth: 1,
    marginBottom:5
  },
  preloader:{
    height:ScreenHeight,
    width:imageWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preloaderFont:{
    fontSize:50,
    color:'black',
  },
})
function DetailsScreen() {
  const [allOrder,setAllOrder] = useState([])
  useEffect(()=>{
    fetch("https://immense-falls-01294.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  },[])
    return (
      <View style={styles.relative}>
        <View style={styles.dg}>
          <Text style={styles.textColor}>Orders</Text>
        </View>
        <ScrollView>
          {
            allOrder.length ? allOrder.map((order,i) => <View style={styles.border} key={i}>
            <View style={styles.flex}>
              <View>
                <Text>{order?.name}</Text>
                <Text>{order?.email}</Text>
              </View>
              <Image style={styles.orderImage} source={{uri: `${order?.img}`}}/>
            </View>
            </View>) : <View style={styles.preloader}>
              <Text style={styles.preloaderFont}>Loading</Text>
          </View>
          }
        </ScrollView>
      </View>
    );
  }

export default DetailsScreen;