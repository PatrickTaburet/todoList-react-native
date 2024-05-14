import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';

function Products({name, handleDelete, idString}) {
  return (
    <Pressable
      onPress={()=>handleDelete(idString)}
      style={({pressed}) => [
        {
          backgroundColor : pressed ? "#9c27b0" : "#673ab7",
        }
      ]}
    >
      <View style={styles.itemContainer}>
          <Text style={styles.item}>{name}</Text>
      </View>
    </Pressable>
  )
}

export default Products

const styles = StyleSheet.create({

    item:{
        textAlign:"center",
        backgroundColor: "pink",
        color: "black",
        fontSize: 20,
        marginVertical: 6,
        width: "100%"
        
      },
      itemContainer:{
        width:220
        
      },
});
