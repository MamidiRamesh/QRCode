import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  LogBox
} from 'react-native';
import React, {useEffect, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanQRCode = ({navigation}) => {
  const [code, setCode] = useState('');
  // console. disableYellowBox = true; 
  useEffect(()=>{
    LogBox.ignoreAllLogs();

  },[])

  onSuccess = e => {
    res = e.data;
    console.log('eeeee', res);
    setCode(res);
    Alert.alert('Alert',"",  [
      {
        text: 'Cancel',
        onPress: () => navigation.navigate('HomeScreen'),
      },
      {text: 'OK', onPress: () => navigation.navigate('QRScanData',{code:res})},
    ]);
  };
  return (
    <View>
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
      />
      <Text>{code}</Text>
    </View>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
