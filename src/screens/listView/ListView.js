import React,{useEffect, useState} from 'react';
import {View, Text , StyleSheet,FlatList,Image, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch,useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Images from "../../common/Images";
import CustomButton from "../../components/CustomButton";
import ListItem from "./ListItem";
import { selectedItem,itemList } from "./selectedItemAction";
import { color } from 'react-native-reanimated';


const DATA = [
    {
      id: 1,
      title: 'First Item',
      selected:false
    },
    {
      id: 2,
      title: 'Second Item',
      selected:false
    },
    {
      id: 3,
      title: 'Third Item',
      selected:false
    },
    {
        id: 4,
        title: 'fourth Item',
        selected:false
      },
      {
        id: 5,
        title: 'fifth Item',
        selected:false
      },
      {
        id: 6,
        title: 'sixth Item',
        selected:false
      },
      {
        id: 7,
        title: 'seventh Item',
        selected:false
      },
      {
        id: 8,
        title: 'eight Item',
        selected:false
      },
      {
        id: 9,
        title: 'ninth Item',
        selected:false
      },
    
  ];
  
 
  const Header = () =>{
    const navigation = useNavigation()
      return(
          <View style={{flexDirection:'row',backgroundColor:'blue',alignItems:'center',paddingHorizontal:10}}>
               <Icon name ='menu' size={30} color='white' onPress={()=> navigation.openDrawer()}/>
              <Text style={{fontSize:32,marginVertical:5 ,color:'white',marginLeft:'10%'}}>Item List</Text>
         </View>
      )
  }



const ListView = () => {

  const navigation = useNavigation()
  const dispatch =useDispatch();
  const[selectedItemList , setSelectedItemList] = useState(DATA)
 
 useEffect(()=>{
   dispatch( itemList(selectedItemList))
 },[])

  const showList = () => {
       const listSelected = selectedItemList.filter(item=> item.selected==true);
       dispatch(selectedItem(listSelected))
       if(listSelected.length>0){
          navigation.navigate('Selected Item')
        }else {
                  alert('select an items')
              }

  }

  const onChangeValue=(itemSelected,index)=>{

    const newData= selectedItemList.map(item =>{

      if(item.id == itemSelected.id ){
        return{
          ...item,
          selected:!item.selected
        }     
      }
        return{
          ...item,
          selected:item.selected
        }     
    })
    setSelectedItemList(newData)
   
  }

    const renderItem = ({ item ,index}) =>{    
        return <ListItem item ={item} index={index} onChangeValue={onChangeValue} isCheckBox={true}/>         
    }

 
      return(
        <View style={style.container}>    
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={Header}
            />

       <CustomButton
         text={'show selected item'}
         alignSelf={'center'}
         width={'90%'}
         height={50}
         backgroundColor='blue'
         borderRadius={5}
         top={0}
         onPress={ showList}
        />
        
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingBottom:20
        
    }
})

export default ListView;