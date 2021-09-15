import React,{useEffect} from 'react';
import {View,Text,StyleSheet,StatusBar,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Size from "../../common/Fonts";

const Splash = () =>{
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('SignUp')
        }, 2000)
      }, []);

return(
    <View style={style.container}>
        <StatusBar backgroundColor='white'/>
        {/* <Text style={style.welcomeText} >Welcome</Text>
        <Text style={style.welcomeText}  >To</Text> */}
        <Text style={style.textStyle}>Demo App</Text>
        <ActivityIndicator size={32} color='blue' style={{marginTop:10}}/>
        <Text style={{fontSize:20}}>loading...</Text>
       
    </View>
)
}

const style =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
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
