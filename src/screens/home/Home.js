import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 

import CustomTextInput  from "../../components/CustomTextInput";

const Home = () => {
    return(
      <View style={style.container}>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={style.map}
        region={{
          latitude: 22.7196,
          longitude: 75.8577,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        >
        <Marker
        coordinate={{
          latitude: 22.7196,
          longitude: 75.8577,
        }}
        title='indore City'
        description='description is here'
        />
          
      </MapView>
  
      </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
      TextInputView:{
   
      },
      textInputStyle:{
        flex:1,
        flexDirection:'row',
        paddingLeft:10
      }
      
})

export default Home;