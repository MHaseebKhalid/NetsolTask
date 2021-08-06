import React, { Component } from 'react';
import { View,Text,Image,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ImageContainer=()=>{
    const imgUri='https://scontent.cdninstagram.com/v/t51.2885-15/70005195_246087249696870_8879293421092292973_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=8ae9d6&_nc_ohc=qHspMTdWTawAX9Up0Vx&_nc_oc=AQnQB08tSaNAbHSPk1bUPm_PGoSZw_yim47Ppm48EX-omfdqIrBo6Zutb5N-tUWF-sY&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=e3fd6852900fb3e1616bb3dd95f1fb2a&oe=6112F31E';
    const time='2019-09-12T12:21:56+0000';
    return(
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={{uri:imgUri}} resizeMode="contain"/>
            <Text style={styles.uname}>User Name</Text>
            <Text style={styles.utime}>{time.substr(11,8)}</Text>
            <Text style={styles.udate}>{time.substr(0,10)}</Text>
        </TouchableOpacity>
    )
};
const styles=StyleSheet.create({
    container:{

    },
    img:{
        height:windowHeight/2.5,
        width:windowWidth
    },
    uname:{
        fontSize:18,
    },
    udate:{
        fontSize:15,
        color:'#7193B9'
    },
    utime:{
        fontSize:13,
        color:'#82B5F4'
    }
})