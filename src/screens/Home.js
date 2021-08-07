import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {ImageContainer,Header} from '../components';
import { useSelector, useDispatch } from 'react-redux';

import {userToken} from '../redux/userSlice';

export const Home=()=>{
    const tokenVal= useSelector(userToken);
    console.log("TOKEN",tokenVal)
    return(
        <View>
            <Header/>
            <ImageContainer/>
        </View>
    )
};