import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Home = () => {
    return(
        <View style={style.container}>
         <Text>Home Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})

export default Home;