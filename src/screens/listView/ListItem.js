import React,{useState} from "react";
import { View,Text, Image,TouchableOpacity } from "react-native";
import CheckBox from '@react-native-community/checkbox';

import Images from "../../common/Images";

const Item = ( props) =>{
  const {item,index,onChangeValue,isCheckBox ,deleteIcon,handleDeleteSelectItem}=props
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return(
    <View style={{flex:1,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10,marginVertical:2,elevation:5}} >
    <Text style={{fontSize:24,marginVertical:5}} >{item.title}</Text>
   {isCheckBox? 
   <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue)=>{
      setToggleCheckBox(newValue)
      onChangeValue(item,index)

    }}
    />
    :null}
    { deleteIcon?
    <TouchableOpacity  onPress={()=> handleDeleteSelectItem(item.id)}>
    <Image source={Images.delete}/>
    </TouchableOpacity>
     :null
    }
   
  
  </View>
  );
}

  export default Item