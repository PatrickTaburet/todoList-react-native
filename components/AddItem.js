import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react';
import { useState } from 'react';
const AddItem = ({handleSubmit}) => {

  const [item, setItem]= useState("");
  const inputHandler =  val =>{setItem(val)} 
  const handleClick = () => {
    handleSubmit(item);
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
        <Button 
          style={styles.buttonStyle}
          title="Submit"
          value={item}
          onPress={handleClick}
        />
      </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor: "purple",
        width: "80%",
        flexDirection:"row",
        justifyContent:"space-between"
      },
   
      textInput:{
        color:"white",
        opacity: 1,
        margin:10,
        marginVertical: 6,
      },
    buttonStyle:{
        backgroundColor:"red",
        padding:150
    },
})