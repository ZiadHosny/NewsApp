import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';



const win = Dimensions.get('window');

export default function DetailsScreen({route}) {
  const {image, description, title, author, published_at, category, source} =
    route.params.item;
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.card}>
        {image ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <Image source={require('../assets/news.png')} style={styles.image} />
        )}
        <View style={styles.col}>
          <Text style={styles.smallText}>Category : {category}</Text>
          <Text style={styles.smallText}>Source : {source}</Text>
        </View>

        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{fontSize: 16, marginVertical: 30}}>
            Description : {description}
          </Text>

          <View style={styles.row}>
            {author ? (
              <Text style={styles.smallText}>Author : {author}</Text>
            ) : null}
            <Text style={styles.smallText}>
              published At : {published_at.substring(0, 10)}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {
    height: win.height / 2,
    width: win.width,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {fontSize: 21, fontWeight: 'bold', marginVertical: 15},
  col: {
    alignItems: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 30,
  },
  smallText: {
    fontSize: 12,

    fontWeight: 'bold',
  },
});
