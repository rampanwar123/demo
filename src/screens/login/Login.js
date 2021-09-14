import React ,{useState}from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Size from "../../common/Fonts";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from '../../components/CustomButton';

const Login = () =>{
const navigation = useNavigation()
const [state,setState] = useState({
    email:'',
    password:''
})

const enterEmail = (text) => {
    setState(prevState => ({
      ...prevState,
      email: text
    }))
  }

  const enterPassword = (text) => {
    setState(prevState => ({
      ...prevState,
      password: text
    }))
  }

  const _handleLogin = ()=>{
    Alert.alert('Login')

}

return(
    <View style={style.container} >
        <Text style={style.loginText}>Login </Text>

        <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Email'}
           textInputStyle={style.textInputStyle}
           value={state.email}
           onChangeTextPress={text => enterEmail(text)}
        />
        </View>

        <View style={style.TextInputView}>
          <CustomTextInput
           placeholder={'Password'}
           textInputStyle={style.textInputStyle}
           value={state.password}
           onChangeTextPress={text => enterPassword(text)}
        />
        </View>

          <TouchableOpacity style={{alignItems:'flex-end'}}>
             <Text style={style.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

        <CustomButton
         text={'LOGIN'}
         alignSelf={'center'}
         width={'95%'}
         height={50}
         backgroundColor='blue'
         borderRadius={3}
         top={25}
         onPress={() => _handleLogin()}
        />

      <View style={style.newAcount}>
        <TouchableOpacity onPress={() =>navigation.navigate('SignUp') }>
          <Text >Don't have an account? <Text style={style.signUpText}>SIGNUP </Text></Text>
        </TouchableOpacity>
      </View>


   </View>
)
}

const style =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
  loginText:{
        alignSelf:'flex-start',
        marginTop:100,
        marginBottom:20,
        marginLeft:10,
        fontSize:Size.Size.FONT_SIZE_30,
        fontWeight:'bold'
    },
    textInputStyle:{
        marginVertical:10,
        borderWidth:1,
        borderColor:'black',
        paddingLeft: 20,
        fontSize: 14,
        textAlign: 'left',
        borderRadius:3
    },
    TextInputView:{
        marginTop:20,
        marginHorizontal:10
    },
    forgotText:{
       color:'blue',
       padding:10
    },
    newAcount:{
        alignSelf: 'center', flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    
    },
    signUpText:{
        color:'blue'
    }
})

export default Login;
