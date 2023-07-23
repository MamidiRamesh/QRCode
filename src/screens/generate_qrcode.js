import {StyleSheet, Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

export default GenerateQRcode = () => {
  const [qrCode, setQrCode] = useState('');
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 2,
          margin: 12,
          borderRadius: 20,
          padding: 12,
          color:"red"
        
        }}
        value={qrCode}
        placeholder="Enter text to generate QrCode"
        onChangeText={text => {
          setQrCode(text);
          // setBool(text);
        }}
      />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <QRCode value={qrCode ? qrCode : 'ramesh'} size={200} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
