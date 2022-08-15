import {
  RefreshControl,
  View,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Card from '../components/Card';
import {ApiContext} from '../context/ApiContext';
import {SearchContext} from '../context/SearchContext';

const NewsList = () => {
  const {news, getNews} = ApiContext();
  const {setTerm} = SearchContext();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      getNews();
      setTerm('');
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  const renderItem = ({item}) => {
    return <Card item={item} />;
  };

  return (
    <View style={{flex: 1}}>
      {news === undefined ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color="#000" size={'large'} />
        </View>
      ) : news.length === 0 ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Not Found Any News Please Try Again</Text>
        </View>
      ) : (
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.title + index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default NewsList;
