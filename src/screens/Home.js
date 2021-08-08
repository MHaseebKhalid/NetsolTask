import React, { useEffect } from 'react';
import { View,Text } from 'react-native';
import {ImageContainer,Header} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts} from '../redux/postSlice';

import {userToken} from '../redux/userSlice';

export const Home=()=>{
    const dispatch=useDispatch();
    const state = useSelector(state => state);
    console.log("HOMEEEE",state);
    useEffect(() => {
       dispatch(fetchPosts(state.userReducer.value));
    }, [])
    // const tokenVal= useSelector(userToken);
    // console.log("TOKEN",tokenVal)
    return(
        <View>
            <Header/>
            <ImageContainer/>
        </View>
    )
};