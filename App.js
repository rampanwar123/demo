import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from "react-redux";

import store from "./src/helper/store";

const App = () =>{
  return (  
    <Provider store = {store}>
    <AppNavigation/>
    </Provider>
 );
}


export default App;