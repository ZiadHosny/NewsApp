import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

import {ApiContext} from '../context/ApiContext';
import {SearchContext} from '../context/SearchContext';

const SearchBar = () => {
  const {term, setTerm} = SearchContext();
  const {getNews} = ApiContext();

  const onTermChange = value => {
    setTerm(value);
    getNews(value);
  };

  const onTermSubmit = () => {
    getNews(term);
  };

  return (
    <View style={styles.backgroundStyle}>
      <Image
        source={require('../assets/search.png')}
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
