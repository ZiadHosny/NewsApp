import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

const MainScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <SearchBar />
      <NewsList />
    </SafeAreaView>
  );
};

export default MainScreen;
