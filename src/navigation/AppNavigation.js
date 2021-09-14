import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/Login';
import SplashScreen from '../screens/splash/Splash'
import SignUpScreen from '../screens/signUp/SignUp'

const Stack = createStackNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Splash" component={SplashScreen}  />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigation;