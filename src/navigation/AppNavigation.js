import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/Login';
import SplashScreen from '../screens/splash/Splash'
import SignUpScreen from '../screens/signUp/SignUp'
import HomeScreen from "../screens/home/Home";

const Stack = createStackNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Splash" component={SplashScreen}  />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigation;