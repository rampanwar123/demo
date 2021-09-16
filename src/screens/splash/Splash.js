import React,{useEffect} from 'react';
import {View,Text,StyleSheet,StatusBar,ActivityIndicator,Image,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

import Size from "../../common/Fonts";
import Images from "../../common/Images";

const Splash = () =>{
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
          
        navigation.navigate('SignUp')
        }, 200)
      }, []);

return null
}

const style =StyleSheet.create({
    container:{
        flex:1,
     
        backgroundColor:'white'
    },
    textStyle:{
       fontSize:56,
       letterSpacing:2,
       color:'blue',
       fontWeight:'400'
    },
    welcomeText:{
        fontSize:24,
        marginTop:5
    }
})

export default Splash;
