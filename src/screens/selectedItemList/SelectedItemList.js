import React from 'react';
import { View,FlatList,Text } from "react-native";
import {useSelector  } from "react-redux";
import {useNavigation  } from "@react-navigation/native";

import ListItem from "../listView/ListItem";
import CustomButton from "../../components/CustomButton";

const Header = () =>{
    return(
        <View style={{alignItems:'center',width:'100%',backgroundColor:'blue'}}>
            <Text style={{fontSize:32,marginVertical:5,color:'white'}}>Selected Items</Text>
       </View>
    )
}

const SelectedItemList = () => {
 const navigation = useNavigation()
  const selectedItems=useSelector(
      ({selectedItemReducer}) => selectedItemReducer.selectedItemList
  ) ;

  console.log(selectedItems)

  const renderItem = ({ item ,index}) =>{
    return <ListItem item ={item} index={index} isCheckBox={false} deleteIcon={true}/>      
}

    return(
        <View style={{flex:1,backgroundColor:'white',paddingBottom:20}}>
             <FlatList
              data={selectedItems}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={Header}
            />
            <CustomButton
         text={'Select more Items'}
         alignSelf={'center'}
         width={'90%'}
         height={50}
         backgroundColor='blue'
         borderRadius={5}
         top={0}
         onPress={()=> navigation.navigate('List') }
        />
        
        </View>

    )
}

export default SelectedItemList;