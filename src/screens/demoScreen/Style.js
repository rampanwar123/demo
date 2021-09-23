import React from "react";
import { StyleSheet } from "react-native";
import { exp } from "react-native-reanimated";

const Style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        flex:1,
        backgroundColor:'orange',
        paddingHorizontal:'3%',
        paddingTop:20
        
    },
    menu:{
        flex:4,
        backgroundColor:'#f0f0f0'
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        height:48,
        backgroundColor:'white'
    },
    tab:{
        flex:1,
        height:56,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:4,
        borderColor:'transparent'

    },
    tabBarText:{
        fontSize:18,
        fontWeight:'400',
        color:'gray'
    },
    box1:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    box2:{
        flex:1,
        paddingVertical:10
    },  
    box3:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10,
        borderTopWidth:1,
        borderColor:'#A9A9A9'
    }
});

export default Style;
