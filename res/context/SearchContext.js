import {createContext, useContext, useState} from 'react';

const Context = createContext();

export const SearchContextProvider = ({children}) => {
  const [term, setTerm] = useState();

  return (
    <Context.Provider value={{term, setTerm}}>{children}</Context.Provider>
  );
};

export const SearchContext = () => {
  return useContext(Context);
};
