import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from "react-redux";
import {requestUserPermission,notificationListner} from './src/components/NotificationServices'
import { LocalNotification } from "./src/components/LocalPushController";
import RemotePushController from "./src/components/RemotePushController";
import messaging from '@react-native-firebase/messaging';
import store from "./src/helper/store";

const App = () =>{
  
  useEffect(()=>{

    requestUserPermission();
    notificationListner();
  })

  return (  
    <Provider store = {store}>
    <AppNavigation/>
    <RemotePushController/>
    </Provider>
 );
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

export default App;