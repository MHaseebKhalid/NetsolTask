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

//   onClear() {
//     CookieManager.clearAll(true)
//       .then((res) => {
//         this.setState({ token: null })
//       });
//   }
 // render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => instagramLogin.show()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.btn, { marginTop: 10, backgroundColor: 'green' }]}
          onPress={() => this.onClear()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
        </TouchableOpacity> */}
        <Text style={{ margin: 10 }}>Token: {token}</Text>
        {/* {this.state.failure && (
          <View>
            <Text style={{ margin: 10 }}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )} */}
        <InstagramLogin
          ref={ref => (instagramLogin = ref)}
          appId='348584610229985'
          appSecret='087354ca1e752480a0148fbb8371f6a8'
          redirectUrl='https://haseebkhalid.netlify.app/'
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={setIgToken}
          onLoginFailure={(data) => console.log(data)}
          language='tr' //default is 'en' for english
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