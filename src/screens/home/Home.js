import React,{ useEffect, useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 

import CustomTextInput  from "../../components/CustomTextInput";


const Home = () => {
  const [state,setState] = useState([])

    useEffect(()=>{
      fetch('https://enigmatic-reaches-55405.herokuapp.com/reports')
      .then(res => res.json())
      .then(data => {
        setState(data.reports)
        console.log(data.reports)
      })
      .catch(console.error)
    },[])
    

  const  mapMarkers = () => {
      return state.map((report) => <Marker
        key={report.id}
        coordinate={{ latitude: report.lat, longitude: report.lon }}
        title={report.location}
        description={report.comments}
      >
      </Marker >)
    }

    return(
      <View style={style.container}>

         <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.1,
          longitude: -95.7,
          latitudeDelta: 10,
          longitudeDelta: 45
        }} >
          {mapMarkers()}
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