import React, { useEffect,useState } from 'react';
import { View,Text } from 'react-native';
import {ImageContainer,Header} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts} from '../redux/postSlice';

import {userToken} from '../redux/userSlice';

export const Home=()=>{
    const dispatch=useDispatch();
    const state = useSelector(state => state);
    const [dataArr, setDataArr] = useState(state.postReducer.post || []);
    console.log("HOMEEEE",state.postReducer.post);
    useEffect(() => {
    
       dispatch(fetchPosts(state.userReducer.value));
    }, [dispatch])
    
    return(
        <View>
            <Header/>
            {
                dataArr.map(x=>{
            <ImageContainer img={x.media_url} userName={x.username}/>

                })
            }
        </View>
    )
};