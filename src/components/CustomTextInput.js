import React from "react";
import {View,Text,TextInput} from 'react-native'

const CustomTextInput = (props) =>{

const{ placeholder,value,onChangeTextPress,keyboardType,textInputStyle,fieldId}=props

 return( 
      <TextInput
      placeholder={placeholder}
      onChangeText={(text) => onChangeTextPress(fieldId,text)}
      value={value}
      keyboardType={keyboardType}
      style={textInputStyle}
      />
     );

}

export default CustomTextInput;