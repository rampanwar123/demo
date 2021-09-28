import React,{ useState ,useRef} from "react";
import { View,Text,TextInput,StyleSheet,StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import Fonts from "../../common/Fonts";
import CustomButton from "../../components/CustomButton";

const OtpScreen = () => {
  const [otpArray,setOtpArray] = useState(['','','',''])

 console.log('main array',otpArray)
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const onOptChange = (index) => {
    return (value) => {
               if(value.length>1){
                  let demoArray = value.split('');
                  console.log('demoArray',demoArray)
                  setOtpArray(demoArray)
                  inputRef4.current.focus();
                  
               }else{
                const otpArrayCpy = otpArray.concat();
                otpArrayCpy[index] = value;
                setOtpArray(otpArrayCpy);
                if (value !== '') {
                    if (index === 0) {
                        inputRef2.current.focus();
                    } else if (index === 1) {
                        inputRef3.current.focus();
                    } else if (index === 2) {
                        inputRef4.current.focus();
                    }
                }
               }
               
    };
    };

    const onOTPKeyPress = (index) => {
      return ({ nativeEvent: { key: value } }) => {
          if (value === 'Backspace' && otpArray[index] === '') {
              if (index === 1) {
                  inputRef1.current.focus();
              } else if (index === 2) {
                  inputRef2.current.focus();
              } else if (index === 3) {
                  inputRef3.current.focus();
              }
              if ( index > 0) {
                  const otpArrayCpy = otpArray.concat();
                  otpArrayCpy[index - 1] = '';
                  setOtpArray(otpArrayCpy);
              }
          }
      };
  };

  const fillInputStyle ={borderBottomWidth:3,borderColor:'#063970'}
  const emailId = 'rampanwar4763@gmail.com'.slice(0,4) + "*****" + 'rampanwar4763@gmail.com'.slice(-9)

  return(
    <View style ={style.container}>
      <StatusBar backgroundColor='orange'/>
      <View style={style.headerView}>
      <Icon name='left' size={Fonts.Size.FONT_SIZE_24}/>
      </View>
      <View style={style.contentView}>
          <Text style={style.verificationCodeText}>Verification Code</Text>
          <Text style={{alignSelf:'center',}}>Please type the verification code sent to</Text>
          <Text style={{alignSelf:'center', marginBottom:10}}>your email id <Text style={{fontWeight:"bold"}}>{emailId}</Text></Text>
          <Text style={{alignSelf:'center',fontWeight:'600',fontSize:Fonts.Size.FONT_SIZE_20}}>01:35</Text>

      <View style={style.inputView}>
      {[inputRef1, inputRef2, inputRef3, inputRef4].map(
      	(inputRef, i) => (

        <TextInput
            ref={inputRef}
            value={otpArray[i]}
            placeholder='-'
            style={[style.textInputStyle,otpArray[i] !== '' && fillInputStyle]}
            keyboardType='numeric'
            key={i}
            onChangeText={onOptChange(i)}
            onKeyPress={onOTPKeyPress(i)}
            textContentType="oneTimeCode"
            autoFocus={i===0?true:undefined}
        />
        )
        )}
      </View>
      <CustomButton
         text={'Verify Code'}
         alignSelf={'center'}
         width={'90%'}
         height={50}
         backgroundColor='blue'
         borderRadius={5}
         top={25}
         bottom={20}
        />
         <Text style={{alignSelf:'center', marginBottom:10}}>I didn`t receive any code!</Text>
         <TouchableOpacity>
           <Text style={{color:'blue',alignSelf:'center'}}>Resend Code</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",

  },
  headerView:{
   height:120,
    backgroundColor:'orange'
  },
  contentView:{
    flex:4,
    marginVertical:30
  },
  inputView:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  },
  textInputStyle:{
    width:50,
    height:60,
    borderBottomWidth:3,
  borderColor:'gray',
    fontSize:24,
    paddingLeft:20
  },
  verificationCodeText:{
    fontSize:Fonts.Size.FONT_SIZE_28,
    fontWeight:'600',
    alignSelf:'center',
    marginBottom:10
  }
})

export default OtpScreen;