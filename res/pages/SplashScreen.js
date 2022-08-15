import React, {useEffect} from 'react';
import {ImageBackground, View, ActivityIndicator, Text} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 30, marginVertical: 20}}>
          News App
        </Text>

        <ActivityIndicator color="#fff" size={'large'} />
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
