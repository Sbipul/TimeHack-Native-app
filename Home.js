import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, Text, Image,ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  image: {
    height:200,
    width:imageWidth,
    marginBottom:10
  },
  singleView:{
    marginBottom:20,
    padding:0,
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
  }
})
const Home = () => {
  const [allData,setAllData] = useState([])
  const history = useHistory()
  useEffect(()=>{
    fetch("https://immense-falls-01294.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  },[])
  const goDetails = () => {
    history.push('/details')
  }
  return (
  <View style={styles.relative}>
    <View style={styles.dg}>
          <Text style={styles.textColor}>Home</Text>
    </View>
    <View>
        <ScrollView>
        {
          allData.length ? 
            allData.map((a,i) => <View style={styles.singleView} key={i}>
            <Text>{a?.productName}</Text>
            <Image style={styles.image} source={{uri: `${a?.img}`}}/>
            <Button title="Details" onPress={goDetails}/>
            </View>
            ) : <View style={styles.preloader}>
              <Text style={styles.preloaderFont}>Loading</Text>
        </View>
        }
        </ScrollView>
      </View>
   </View>
  );
};
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ec86cff02cd451f8eae21888987024b
// 8ec86cff02cd451f8eae21888987024b 
export default Home;