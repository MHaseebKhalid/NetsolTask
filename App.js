/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {Navigation} from './src/navigation/Navigation';
 import { store } from './src/redux/store';
import { Provider } from 'react-redux';
 const App= () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   // const backgroundStyle = {
   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   // };
 
   return (
     <Provider store={store}>
     <SafeAreaView style={{flex:1}}>
      <Navigation/>
     </SafeAreaView>
     </Provider>
   );
 };
 
 
 
 export default App;
 