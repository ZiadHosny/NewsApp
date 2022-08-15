import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './res/pages/MainScreen';
import DetailsScreen from './res/pages/DetailsScreen';
import {ApiContextProvider} from './res/context/ApiContext';
import {SearchContextProvider} from './res/context/SearchContext';
import SplashScreen from './res/pages/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApiContextProvider>
      <SearchContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={MainScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SearchContextProvider>
    </ApiContextProvider>
  );
}

export default App;
