import React from 'react'
import { StyleSheet, TouchableOpacity,  View, Text } from 'react-native';
import Colors  from '../constants/colors';


function CustomButton({customStyle, children, customHandleClick}) {
  return (
    <View>
        <TouchableOpacity 
          activeOpacity={0.6}
          style={{...styles.button, ...customStyle}}
          onPress={customHandleClick}
        >
          <Text style={styles.textButton}>{children}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton


const styles = StyleSheet.create({
    button:{
      backgroundColor: Colors.danger,
      padding:5,
      height: 40,
      width: 70,
      borderRadius:5
    },
    textButton:{
      color: 'white',
      margin: 'auto'
    }
});
