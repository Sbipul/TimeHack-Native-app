import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import { Slide } from "native-base";

const { width } = Dimensions.get("window");
const height = width * 0.8;

const Form = () => {
  const images = [
    "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://media.istockphoto.com/photos/beautiful-sunrise-landscape-in-high-mountain-road-picture-id615619640?k=20&m=615619640&s=170667a&w=0&h=eOugsz8OZpAMmgzNAOr9JOjphUE00PE23d5RRu4N1GU=",
    "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://live.staticflickr.com/7324/10494525026_364e78d36c_b.jpg",
  ];
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(active);
    }
  };
  return (
    <View>
      <View style={styles.search}>
      <TextInput style={styles.input}/>
      </View>
      <ScrollView
        onScroll={change}
        pagingEnabled
        horizontal
        style={styles.scrollViewDiv}
        showsHorizontalScrollIndicator={false}
      >
        {images?.map((image, index) => (
          <View style={styles.container} key={index}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            ></Image>
            <Text style={styles.textColor}>
              My name is bipul chandro roy.I love react native
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicator}>
        {images?.map((i, k) => (
          <Text
            key={k}
            style={k === active ? styles.activeColor : styles.commonColor}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textColor: { color: "black" },
  container: { marginTop: 0, width, height },
  image: { height, width, resizeMode: "cover" },
  scrollViewDiv: { height, width },
  indicator: {
    flexDirection: "row",
    bottom: 0,
    position: "absolute",
    alignSelf: "center",
  },
  commonColor: { color: "white", margin: 3 },
  activeColor: { color: "red", margin: 3 },
  search:{height:50,backgroundColor:'#fffddd',width:'100%'},
  input:{height:'100%',width:'100%',padding:10,backgroundColor:'red'}
});
