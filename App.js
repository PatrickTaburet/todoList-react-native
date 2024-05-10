import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [item, setItem]= useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (item !== ""){
      const idString = Date.now().toString();
      setItems(currentItems=> [{key: idString, name: item}, ...currentItems]);
      setItem("");
    }
  }
  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Add an item'
          value= {item}
          placeholderTextColor="white" // Change the placeholder text color
          onChangeText={val => setItem(val)}
        />
        <Button 
          style={styles.buttonStyle}
          title="Submit"
          value={item}
          onPress={handleSubmit}
        />
      </View>
      
        <FlatList
          contentContainerStyle={styles.contentContainer
          }
          data={items}
          renderItem={({item}) => 
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          }
        />

      {/* <ScrollView style={styles.scrollViewList}>
        <View style={styles.itemList}>
          {
          items.map((item, index)=>{
            return(
              <Text key={index} style={styles.item}>{item}</Text>
            )
          })}
        </View>
      </ScrollView> */}
    </View>
 
  );
}

const styles = StyleSheet.create({
  item:{
    textAlign:"center",
    backgroundColor: "pink",
    color: "black",
    fontSize: 20,
    marginVertical: 6,
    width: "100%"
    
  },
  scrollViewList:{
    margin: 10,
    justifyContent:"center"
  },
  itemContainer:{
    width:220
    
  },
  buttonStyle:{
    backgroundColor:"red",
    padding:150
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    paddingTop: 60
  },
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
  contentContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
}
});
