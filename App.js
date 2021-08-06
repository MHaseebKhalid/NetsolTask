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
 
 const App= () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   // const backgroundStyle = {
   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   // };
 
   return (
     <SafeAreaView style={{flex:1}}>
      <Navigation/>
     </SafeAreaView>
   );
 };
 
 
 
 export default App;
 