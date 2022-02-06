/**
 * @format
 */

 import React from 'react';
 import App from './App';
 import { name as appName } from './app.json';
 import { AppRegistry } from 'react-native';
 
 import { Provider } from 'react-redux';
 import store from './store/index';
 
 
 const RNRedux = () => (
   <Provider store = { store }>
     <App />
   </Provider>
 )
 
 AppRegistry.registerComponent(appName, () => RNRedux);