import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer"
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import LoginScreen from '../screens/login/Login';
import SplashScreen from '../screens/splash/Splash'
import SignUpScreen from '../screens/signUp/SignUp'
import HomeScreen from "../screens/home/Home";
import ListScreen from '../screens/listView/ListView'
import SelectedItemList from "../screens/selectedItemList/SelectedItemList";
import CustomDrawer from "../components/CustomDrawer";
import demoScreen from "../screens/demoScreen/demoScreen";

import Images from "../common/Images";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
 return(
   <Drawer.Navigator drawerContent = { props => <CustomDrawer {...props}/>} >
      <Drawer.Screen name='HomeTab' component={HomeTab}/>
   </Drawer.Navigator>
 )
}


const HomeTab = () => {
  return(
    <Tab.Navigator
    screenOptions = {({route}) => ({
      tabBarIcon :({color,size}) => {
        if(route.name==='List'){
          return <Icon name ="list" size={30} color={color}/>
        }else{
          return <MaterialCommunityIcons name ="playlist-check" size={30} color={color}/>
        }
      }
    })}
    tabBarOptions={{
      labelStyle:{paddingBottom:5,fontSize:12},
      activeTintColor:'blue',
      inactiveTintColor:'gray',
      style:{
        height:50
      }
    }}
    >
      <Tab.Screen name='List' component={ListScreen}/>
      <Tab.Screen name='Selected Item' component={SelectedItemList}/>
    </Tab.Navigator>
  )
}

const AppNavigation = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Splash" component={SplashScreen}  />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="demoScreen" component={demoScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigation;
