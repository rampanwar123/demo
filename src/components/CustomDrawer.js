import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';
import { DrawerContentScrollView,DrawerItem ,DrawerItemList} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = () => {
    const navigation = useNavigation();
    return(
        <View style={style.container}>
           <DrawerContentScrollView>
               <View style={style.container}>
                   <Text style={{alignSelf:'center', fontSize:28,marginVertical:20,color:'blue'}}>Drawer Menu</Text>
                   <TouchableHighlight   onPress={()=>navigation.navigate('List')} underlayColor='gray' >
                       <View  style={style.drawerItem} >
                       <Text style={{fontSize:20,marginLeft:20,color:'blue'}}>List</Text>
                       </View>
                   </TouchableHighlight >
                   <TouchableHighlight    onPress={()=>navigation.navigate('Selected Item')} underlayColor='gray' >
                       <View  style={style.drawerItem} >
                       <Text style={{fontSize:20,marginLeft:20,color:'blue'}}>Selected Item</Text>
                       </View>
                   </TouchableHighlight >
                   {/* <View style={style.drawerSection}>
                   <DrawerItem
                   label='List'
                   onPress={()=>navigation.navigate('List')}
                   labelStyle={{color:'blue'}}
                   />
                   </View>
                   <View style={style.drawerSection}>
                    <DrawerItem
                   label='Selected Item'
                   onPress={()=>navigation.navigate('Selected Item')}
                   labelStyle={{color:'blue'}}
                   />
                   </View> */}
                </View>
           </DrawerContentScrollView>
        </View>
    )
};

const style = StyleSheet.create({
    container:{
        flex:1
    },
    drawerSection:{
     marginTop:10,
     borderColor:'gray',
     borderWidth:1
    },
    drawerItem:{
        marginTop:5,
        width:'100%',
        height:50,
        justifyContent:'center',
    
    }
});

export default CustomDrawer;