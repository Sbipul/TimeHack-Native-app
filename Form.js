import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Form = () => {
  return (
    <View>
      <Text style={styles.textColor}>My name is bipul chandro roy.I love react native</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    textColor:{
        color:'black'
    }
})