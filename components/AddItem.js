import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react';
import { useState } from 'react';
import CustomButton from './CustomButton';
const AddItem = ({handleSubmit}) => {

  const [item, setItem]= useState("");
  const inputHandler =  val =>{setItem(val)} 
  const handleClick = () => {
    handleSubmit(item);
    setItem("");
  }
  const customHandleClick = () =>{
    setItem("");
  }
  
  return (

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Add an item'
          value= {item}
          placeholderTextColor="white" // Change the placeholder text color
          onChangeText={inputHandler}
        />
        <View style={styles.buttonBox}>
          <CustomButton
            customStyle={styles.buttonStyle}
            customHandleClick={handleClick}
          >SUBMIT</CustomButton>
          <CustomButton
            customHandleClick={customHandleClick}
          >CANCEL</CustomButton>
        </View>
      </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer:{
      backgroundColor: "purple",
      width: "100%",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    textInput:{
      color:"white",
      opacity: 1,
      margin:10,
      marginVertical: 6,
      width:'50%'
    },
    buttonStyle:{
      backgroundColor:"blue",
      padding:5
    },
    buttonBox:{
      flexDirection:"row",
    }
})