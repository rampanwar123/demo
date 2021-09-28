import React, { useState } from 'react';
import { SafeAreaView,View,Text,StyleSheet, TextInput,StatusBar ,TouchableOpacity,ScrollView,FlatList,Image} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { Rating, AirbnbRating } from 'react-native-ratings';

import Images from "../../common/Images";
import Fonts from '../../common/Fonts';
import style from "./Style";

const SerachInput = () => {
    return(
        <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center' ,borderRadius:5,paddingLeft:10,marginTop:20}}>
            <Icon name='search1' size={Fonts.Size.FONT_SIZE_20}/>
            <TextInput
            placeholder={'Search'}
            style={{paddingLeft:10}}
            />
        </View>
    )
}

const TopTabBar = (props) =>{
    const{section,activeTabStyle, handleActiveBar} = props;
    const textColor = {color:'#063970'}
    return(
        <View style={style.topBar}>
          <TouchableOpacity style={[style.tab,section===0 && activeTabStyle]} onPress={()=>handleActiveBar(0)}>
             <Text style={[style.tabBarText,section===0 && textColor]}>Tutor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab,section===1 && activeTabStyle]} onPress={()=>handleActiveBar(1)}>
          <Text style={[style.tabBarText,section===1 && textColor]}>Class</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.tab,section===2 && activeTabStyle]} onPress={()=>handleActiveBar(2)}>
          <Text style={[style.tabBarText,section===2 && textColor]}>Webinar</Text>
          </TouchableOpacity>
        </View>
    )
}

const Chip = (props) =>{
    const {title} = props;
    return(
        <TouchableOpacity style={{backgroundColor:'white',justifyContent:'center',marginVertical:20,marginHorizontal:15,borderRadius:20,paddingHorizontal:7,elevation:3}}>
            <Text>{title}</Text>
         </TouchableOpacity>
    )
}

const DATA = [
    {
      id:1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'Second Item',
    },
    {
      id: 3,
      title: 'Third Item',
    },
    {
        id: 4,
        title: 'Second Item',
      },
      {
        id: 5,
        title: 'Third Item',
      },
  ];
  
  const Item = ({ title }) => (
    <TouchableOpacity style={{backgroundColor:'white',marginBottom:10,padding:15,marginHorizontal:10,elevation:3,borderRadius:5}} activeOpacity={0.7}>
        <View style={style.box1}>
            <Text style={{backgroundColor:'orange',color:'white',padding:3,borderRadius:3}}>MATHS</Text>
            <Text style={{color:'orange',padding:3}}>SAR 150</Text>
        </View>
        <View style={style.box2}>
        <Text style={{fontWeight:'bold',fontSize:Fonts.Size.FONT_SIZE_16}}>Linear Equation , Algebraic Expression</Text>
        </View>
        <View style={style.box3}>
            <View style={{flexDirection:'row'}}>
                <View style={{borderWidth:1,width:40,height:40,borderRadius:40,marginRight:10}}>
                <Image source={Images.profile_logo} style={{resizeMode:'stretch',width:40,height:40}}/>
                </View>
                <View >
                <Text style={{fontWeight:'600',fontSize:Fonts.Size.FONT_SIZE_16}}>Marcia Sacha</Text>
                <Rating  imageSize={10} style={{paddingRight:40,paddingTop:3}}/>
                </View>
            </View>
            <View>
                <Text style={{fontWeight:'bold',fontSize:Fonts.Size.FONT_SIZE_16}}>06 May 2020</Text>
                <Text>05:00 PM</Text>
            </View>
        </View>
    </TouchableOpacity>
  );

const demoScreen = () => {
    const [section,setSection] = useState(0);

const handleActiveBar =(id) => {
    setSection(id)
}
    const activeTabStyle = {borderBottomWidth:3,borderColor:'#063970'}

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

 return(
     <SafeAreaView style={style.container}>
         <StatusBar backgroundColor='orange'/>
      <View style={style.header}>
        <Icon name='left' size={Fonts.Size.FONT_SIZE_24}/>
        <Text style={{fontSize:Fonts.Size.FONT_SIZE_28,fontWeight:'bold',paddingTop:5}}>Search</Text>
        <SerachInput/>
      </View>
   
      <View style={style.menu}>
      <TopTabBar section={section} activeTabStyle={activeTabStyle} handleActiveBar={handleActiveBar}/>
      <View style={{height:70}}>
           <ScrollView   horizontal={true}>
              <Chip title='Elementary School'/>
              <Chip title='General Knowledge'/>
              <Chip title='Elementary School'/>
              <Chip title='General Knowledge'/>
          </ScrollView>
      </View>
      {section===1? 
      <FlatList
         data={DATA}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />:section===0?
        <FlatList
         data={DATA}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />:null}
        
      </View>
     </SafeAreaView>
 )
}


export default demoScreen;