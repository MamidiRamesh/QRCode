import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style ={{justifyContent:"center",flex:1,margin:12}}>
        <View style ={{marginBottom:12}}>
      <Button title='GenerateQRCode' onPress={() =>
        navigation.navigate('generate_qrcode')
      } />
      </View>
      <Button title='ScanQRCode' onPress={() =>
        navigation.navigate('ScanQRCode')
      }  />
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})