import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InstagramLogin from 'react-native-instagram-login';
import { useSelector, useDispatch } from 'react-redux';
import {setUser} from '../redux/userSlice';


// import CookieManager from '@react-native-community/cookies';

export  const Login=(props)=>{
  const [token, setToken] = useState('');
  const dispatch=useDispatch();

 const setIgToken = (data) => {
    console.log('data', data)
    // this.setState({ token: data.access_token })
    setToken(data.access_token);
    dispatch(setUser(data.access_token));
    props.navigation.navigate('Home')
  }


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => instagramLogin.show()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
        </TouchableOpacity>
       
        <Text style={{ margin: 10 }}>Token: {token}</Text>
        
        <InstagramLogin
          ref={ref => (instagramLogin = ref)}
          // i have use multiple appId adn AppSecret because during test the limit was exceeding
          // appId='960248034772059'
          // appSecret='af4442ff1f837e83e9bff3d6c4505dc6'
          appId='355710592684489'
          appSecret='ce4f181a6e548b7512cdb10e8abff364'
          // appId='2232259123582765'
          // appSecret='2358a5a890a5f69a84ed344cbef26f2f'
          //  appId='348584610229985'
          // appSecret='087354ca1e752480a0148fbb8371f6a8'
          redirectUrl='https://haseebkhalid.netlify.app/'
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={setIgToken}
          onLoginFailure={(data) => console.log(data)}
          language='en' //default is 'en' for english
        />
      </View>
    );
  // }
}


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