import React,{useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Size from "../../common/Fonts";

const Splash = () =>{
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('Login')
        }, 2000)
      }, []);

return(
    <View style={style.container}>
        <Text style={style.textStyle}>WELCOME</Text>
    </View>
)
}

const style =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
       fontSize:Size.Size.FONT_SIZE_30,
       letterSpacing:2
    }
})

export default Splash;
