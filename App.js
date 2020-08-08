import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';

import HomeScreen from './pages/HomeScreen'
import AddressScreen from './pages/EnterAdressScreen'
import ValidAddressScreen from './pages/ValidAddressScreen'

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Enter Address" component={AddressScreen} />
          <Stack.Screen name="Valid Address" component={ValidAddressScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
