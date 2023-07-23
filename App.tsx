import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/home_screen';
import generate_qrcode from './src/screens/generate_qrcode';
import ScanQRCode from './src/screens/scan_qrcode';
import QRScanData from './src/screens/qrScan_data';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="HomeScreen" component={HomeScreen} />
   <Stack.Screen name="generate_qrcode" component={generate_qrcode} />
   <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
   <Stack.Screen name="QRScanData" component={QRScanData} />
   
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})