import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function CustomButton(props) {
  const {
    text,
    onPress,
    width,
    height,
    top,
    bottom,
    backgroundColor,
    borderRadius,
    alignSelf,
    textStyle,
    isShadow,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      style={
        {
          width: width,
          height: height,
          marginTop: top,
          marginBottom: bottom,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          alignSelf: alignSelf,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }
      onPress={() => onPress()}
      disabled={disabled != null ? disabled : false}>
      <Text style={textStyle != null ? textStyle : styles.textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'white',
    //fontFamily: Fonts.Type.poppinsSemiBold,
    fontSize: 16,
  },
});

export default CustomButton;
