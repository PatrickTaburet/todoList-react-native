import React from 'react'
import { StyleSheet } from 'react-native';
import { Pressable, View, Text } from 'react-native';

function CustomButton({title, customHandleClick, customStyle}) {
  return (
    <View>
        <Pressable 
          style={{...styles.button, ...customStyle}}
          title={title}
          onPress={customHandleClick}
        >
          <Text style={styles.textButton}>{title}</Text>
        </Pressable>
    </View>
  )
}

export default CustomButton


const styles = StyleSheet.create({
    button:{
      backgroundColor: 'red',
      padding:5,
      height: 40,
      width: 70
    },
    textButton:{
      color: 'white',
      margin: 'auto'
    }
});
