import React ,{useState}from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Size from "../../common/Fonts";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from '../../components/CustomButton';
import Constants from "../../common/Constants";

const Login = () =>{
const navigation = useNavigation();

const[emailValidation,setEmailValidation] =useState(false)
const [secureTextEntry,setSecureTextEntry] = useState(true)
const [state,setState] = useState({
    email:'',
    password:''
})

const _inputChange = (key, value) => {
  if(key==='email'){
    if((Constants.EMAIL_REGEX).test(value)){
      setEmailValidation(true)
    }else{
      setEmailValidation(false)
    }
  }
   setState({
     ...state,
     [key]:value,
   })
}

const _handleLogin = ()=>{
    console.log('Login')
  };

const showHidePassword =() =>{
 setSecureTextEntry(!secureTextEntry)
}

return(
    <View style={style.container} >
        <Text style={style.loginText}>Welcome Back </Text>
        <Text style={{alignSelf:'center',marginBottom:50}}>Sign to continue </Text>

        <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Email'}
           textInputStyle={style.textInputStyle}
           value={state.email}
           onChangeTextPress={_inputChange}
           fieldId='email'
        />
        </View>
        {!emailValidation&&state.email.length>0?<Text style={{marginHorizontal:20,color:'red',fontSize:12}}>Invalid Email</Text>:null}

        <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Password'}
           textInputStyle={style.textInputStyle}
           value={state.password}
           onChangeTextPress={_inputChange}
           fieldId='password'
           secureTextEntry={secureTextEntry}
           showPassword={true}
           showHidePassword={showHidePassword}
        />
       </View>

          <TouchableOpacity style={{alignItems:'flex-end'}}>
             <Text style={style.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

        <CustomButton
         text={'LOGIN'}
         alignSelf={'center'}
         width={'90%'}
         height={50}
         backgroundColor='blue'
         borderRadius={5}
         top={25}
         onPress={() => _handleLogin()}
        />

      <View style={style.newAcount}>
        <TouchableOpacity onPress={() =>navigation.navigate('SignUp') }>
          <Text >Don't have an account? <Text style={style.signUpText}>create a new account </Text></Text>
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
        alignSelf:'center',
        marginTop:150,
        fontSize:32,
        fontWeight:'bold',
        color:'blue'
    },
    textInputStyle:{
    flex:1,
    flexDirection:'row',
    paddingLeft:10
    
    
    },
    TextInputView:{
      marginHorizontal:20,
      marginVertical:10
    },
    forgotText:{
       color:'blue',
       marginRight:20,
       marginVertical:5
    },
    newAcount:{
      flex: 1,
      alignSelf: 'center',
      marginVertical:30
    },
    signUpText:{
        color:'blue'
    }
})

export default Login;
