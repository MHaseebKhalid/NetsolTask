import React, { Component } from 'react';
import { View,Text,Image,StyleSheet,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Header=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Netsol</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
         backgroundColor:"#c0c0c0",
         width:windowWidth,
         height:windowHeight/10,
         alignItems: 'center',
         justifyContent: 'center',
    },
    txt:{
        color:'#1A71B5',
        fontSize:21,
        fontWeight:'bold'
    }
})