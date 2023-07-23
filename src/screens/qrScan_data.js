import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QRScanData = ({route,navigation}) => {
    const {code} = route.params;
    console.log("code is",code);
  return (
    <View style ={{justifyContent:"center",flex:1,margin:12}}>
      <Text style = {{color:"red"}}>{code}</Text>
      <Button title='HomeScreen' onPress={()=>{
        navigation.navigate("HomeScreen");
      }} />
    </View>
  )
}

export default QRScanData

const styles = StyleSheet.create({})