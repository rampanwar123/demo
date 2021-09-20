import React from "react";
import { useState } from "react";
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native'

import Images from "../common/Images";

const CustomTextInput = (props) =>{
const [focus,setFocus] = useState('gray')
const{ placeholder,value,onChangeTextPress,keyboardType,textInputStyle,fieldId,secureTextEntry,showPassword,showHidePassword,borderColor}=props

const _onFocus=()=> {
   setFocus('blue')
  
   };
 
 const _onBlur=()=> {
     setFocus('gray')
   };

 return( 
     <View style={[style.container,{borderColor:borderColor}]}>
      <TextInput
      placeholder={placeholder}
      onChangeText={(text) => onChangeTextPress(fieldId,text)}
      value={value}
      keyboardType={keyboardType}
      style={textInputStyle}
      secureTextEntry={secureTextEntry}
     //  onBlur={_onBlur}
     //  onFocus={_onFocus}
      
      />
      {showPassword && String(value).length>0? 
          <TouchableOpacity onPress={() => { showHidePassword() }} >
                    <Image source={secureTextEntry ?  Images.view_password:Images.ic_notView_password } style={{ marginHorizontal: 15 }} />
          </TouchableOpacity> : null
      }

     </View>
     );

}


const style = StyleSheet.create({
     container:{
          flexDirection:'row',
          alignItems:'center',
          borderColor:'gray',
          borderWidth:1,
          borderRadius:5
     }
})

export default CustomTextInput;