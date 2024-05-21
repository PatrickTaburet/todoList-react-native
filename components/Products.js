import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors  from '../constants/colors';

function Products({name, handleDelete, idString}) {
  return (
    <View style={{ margin: 4 }}>
      <Pressable
        onPress={()=>handleDelete(idString)}
        // style={({pressed}) => [
        //   {
        //     backgroundColor : pressed ? "#9c27b0" : "#673ab7",
        //   }
        // ]}
      >
        <View style={styles.itemContainer}>
            <FontAwesome
              name='remove'
              size={30}
              color={Colors.white}
              style={{marginRight: 10}} 
            />
            <Text style={styles.item}>{name}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({

    item:{
        textAlign:"center",
        backgroundColor: "pink",
        color: "black",
        fontSize: 20,
        // marginVertical: 6,
        width: "100%",
      },
      itemContainer:{
        width:220,
        flexDirection:"row",
        
      },
});
