import {createContext, useContext, useState} from 'react';
import axios from 'axios';

const Context = createContext();

const API_KEY = '5138742ba5538c4d5029c7965a44b6f4';
const BASE_URL = 'http://api.mediastack.com/v1/news?';

export const ApiContextProvider = ({children}) => {
  const [news, setNews] = useState();

  async function getNews(term) {
    if (term) {
      let {data} = await axios.get(
        `${BASE_URL}keywords=${term}&&languages=en&&countries=gb&&access_key=${API_KEY}`,
      );

      setNews(data.data);
    } else {
      let {data} = await axios.get(
        `${BASE_URL}languages=en&&countries=gb&&access_key=${API_KEY}`,
      );
      setNews(data.data);
    }
  }

  return (
    <Context.Provider value={{news, getNews}}>{children}</Context.Provider>
  );
};

export const ApiContext = () => {
  return useContext(Context);
};
