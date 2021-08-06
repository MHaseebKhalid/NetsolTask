import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

export const Login=()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Login Page</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    btn: {
      borderRadius: 5,
      backgroundColor: 'orange',
      height: 30,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });