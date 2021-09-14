import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Size from "../../common/Fonts";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";

const SignUp = () =>{
const navigation = useNavigation();
const [passwordMatch,setPasswordMatch] =useState(false)
const [state,setState] = useState({
    name:'',
    email:'',
    mobile:'',
    password:'',
    confirmPassword:''
})

const _inputChange = (key, value) =>{
   setState({
       ...state,
       [key]:value,
   })
}

const _handleSignUp = ()=>{
    Alert.alert('Sign up')

}

// if(state.confirmPassword !== state.password)
// {
// setPasswordMatch(true)
// }else{
//     setPasswordMatch(false)
// }

return(
    <View style={style.container}>
        <Text style={style.signUpText}>SignUp</Text>

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
      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Email'}
           textInputStyle={style.textInputStyle}
           value={state.email}
           onChangeTextPress={ _inputChange}
           fieldId='email'
        />
      </View>
      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Password'}
           textInputStyle={style.textInputStyle}
           value={state.password}
           onChangeTextPress={_inputChange}
           fieldId='password'
        />
      </View>
      <View style={style.TextInputView}>
        <CustomTextInput
           placeholder={'Confirm Password'}
           textInputStyle={style.textInputStyle}
           value={state.confirmPassword}
           onChangeTextPress={_inputChange}
           fieldId='confirmPassword'
        />
      </View>
      {passwordMatch?<Text style={{paddingLeft:10,color:'red'}}>paasword not match</Text>:null}

      <CustomButton
         text={'SIGN UP'}
         alignSelf={'center'}
         width={'95%'}
         height={50}
         backgroundColor='blue'
         borderRadius={3}
         top={25}
         onPress={() => _handleSignUp()}
        />
       <View style={style.newAcount}>
        <TouchableOpacity onPress={() =>navigation.navigate('Login') }>
          <Text >Already have a account? <Text style={style.loginText}>LOGIN</Text> </Text>
        </TouchableOpacity>
      </View>
    </View>
)
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    signUpText:{
        alignSelf:'flex-start',
        marginTop:50,
        marginBottom:20,
        marginLeft:10,
        fontSize:Size.Size.FONT_SIZE_30,
        fontWeight:'bold'
    },
    textInputStyle:{
        marginVertical:5,
        borderWidth:1,
        borderColor:'gray',
        paddingLeft: 20,
        fontSize: 14,
        textAlign: 'left',
        borderRadius:3,
        color:'black'
        
    },
    TextInputView:{
        marginTop:20,
        marginHorizontal:10
    },
    newAcount:{
        alignSelf: 'center', flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    
    },
    loginText:{
        color:'blue'
    }
})

export default SignUp;
