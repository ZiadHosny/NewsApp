import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({item}) => {
  const {image, title} = item;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: '#fff',
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <View>
          {image ? (
            <Image
              source={{uri: image}}
              style={{width: 150, height: 130, borderRadius: 10}}
            />
          ) : (
            <Image
              source={require('../assets/news.png')}
              style={{width: 150, height: 130, borderRadius: 10}}
            />
          )}
        </View>
        <View style={{flexShrink: 1, marginLeft: 10}}>
          <Text style={{fontWeight: '700', color: '#000'}}>
            {title.substring(0, 80) + '...'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
