import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,StatusBar,BackHandler} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fonts from "../../common/Fonts";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import Constants from "../../common/Constants";
import Images from "../../common/Images";
import useBackButton from "../../common/BackButtonHandler";
import { showOptionAlert } from "../../common/ShowAlert";

import {localNotification} from '../../components/LocalPushController'

const SignUp = () =>{
const navigation = useNavigation();
const[emailValidation,setEmailValidation] =useState(false)
const[mobileValidation,setMobileValidation] =useState(false)
const [passwordMatch,setPasswordMatch] =useState(false)
const [secureTextEntry,setSecureTextEntry] = useState(true)
const [state,setState] = useState({
    name:'',
    email:'',
    mobile:'',
    password:'',
    confirmPassword:''
})

// useBackButton(backButtonHandler);

//  //backButtonHandler.
//  function backButtonHandler() {
//      showOptionAlert('Do you want to quit the app?', quitAppCallback);
//      return true;
//  }

//  const quitAppCallback = () => {
//      BackHandler.exitApp();
//  };

const _inputChange = (key, value) =>{
  if(key === 'email')
  {
    if((Constants.EMAIL_REGEX).test(value)){
      setEmailValidation(false)
    }else{
      setEmailValidation(true)
    }
  }
  if(key === 'mobile')
  {
    if((Constants.MOBILE_REGEX).test(value)){
      setMobileValidation(false)
    }else{
      setMobileValidation(true)
    }
  }
if(key=== 'confirmPassword'){
  _confirmPassword();
}
   setState({
       ...state,
       [key]:value,
   })
  
}

const _handleSignUp = ()=>{
  localNotification()

}

const _confirmPassword = ()=>{

  if(state.confirmPassword !== state.password)
  {
    setPasswordMatch(false)
  }else{
    setPasswordMatch(true)
   }
}

const showHidePassword =() =>{
  setSecureTextEntry(!secureTextEntry)
 }

return(
    <View style={style.container}>
      <StatusBar backgroundColor='blue' />

        <Text style={style.signUpText}>Create Account</Text>
        <Text style={{alignSelf:'center',marginBottom:30}}>create a new account </Text>

      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Name'}
           textInputStyle={style.textInputStyle}
           value={state.name}
           onChangeTextPress={ _inputChange}
           fieldId='name'
        />
      </View>
    
      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Mobile No'}
           textInputStyle={style.textInputStyle}
           value={state.mobile}
           onChangeTextPress={ _inputChange}
           fieldId='mobile'
           keyboardType='numeric'
       
        />
      </View>
      {mobileValidation&&state.mobile.length>0?<Text style={style.inValidTextStyle}>please enter valid mobile number</Text>:null}
      
      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Email'}
           textInputStyle={style.textInputStyle}
           value={state.email}
           onChangeTextPress={ _inputChange}
           fieldId='email'
        />
      </View>
      {emailValidation && state.email.length > 0?<Text style={style.inValidTextStyle}>please enter valid email</Text>:null}

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

      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Confirm Password'}
           textInputStyle={style.textInputStyle}
           value={state.confirmPassword}
           onChangeTextPress={_inputChange}
           fieldId='confirmPassword'
           secureTextEntry={secureTextEntry}
           showPassword={true}
           showHidePassword={showHidePassword}
        />
      </View>
      {passwordMatch && state.confirmPassword.length > 0?<Text style={style.inValidTextStyle}>paasword not match</Text>:null}

      <CustomButton
         text={'SIGN UP'}
         alignSelf={'center'}
         width={'90%'}
         height={50}
         backgroundColor='blue'
         borderRadius={5}
         top={25}
         onPress={() => _handleSignUp()}
        />

       <View style={style.newAcount}>
        <TouchableOpacity onPress={() => navigation.navigate('Login') }>
          <Text >Already have a account? <Text style={style.loginText}>Login</Text> </Text>
        </TouchableOpacity>
      </View>
      
    </View>
)
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    signUpText:{
        alignSelf:'center',
        marginTop:100,
        fontSize:Fonts.Size.FONT_SIZE_32,
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
      marginVertical:5
    },
    newAcount:{
      flex: 1,
      alignSelf: 'center',
      marginVertical:30
    
    },
    loginText:{
        color:'blue'
    },
    inValidTextStyle:{
      fontSize:Fonts.Size.FONT_SIZE_10,
      lineHeight:10,
      paddingLeft:20,
      color:'red'
    }
})

export default SignUp;
