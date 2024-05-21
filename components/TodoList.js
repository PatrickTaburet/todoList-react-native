
import { useState } from 'react';
import {
  StyleSheet, Text, 
  TextInput, View, 
  Button, ScrollView, 
  FlatList, Alert, 
  Modal, Pressable, 
  Image,
  ImageBackground} 
from 'react-native';
import Products from './Products';
import AddItem from './AddItem';
import Header from './Header';

const TodoList = () =>{
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (item) => {
    if (item !== ""){
      const idString = Date.now().toString();
      setItems(currentItems=> [{key: idString, name: item}, ...currentItems]);
    } else {
      setShowModal(true)

      // Alert.alert("Warning", "Please enter a valid item",[
      //   {text: "Ok",
      //   onPress : () => console.warn("Refused")
      //   },
      //   {
      //     text: "Understand",
      //     onPress: () => console.warn("Understood")
      //   }
      // ], {cancelable: true});
    }
  }
  
 const handleDelete = (key) =>{
  setItems(currentItems => {
    return currentItems.filter(item=> item.key !=key)
  })
 }
  return (

    <ImageBackground style={styles.background} source={require('../assets/image/background.jpg')}>
     <View style={styles.container}>
      <Modal
        visible={showModal}
        onRequestClose={()=>setShowModal(false)}
        animationType='slide'
        transparent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Hello world !</Text>
            </View>
            <View style={styles.modalBody}>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image
                  style={styles.modalImg}
                  source={require('../assets/image/cross.png')}
                />
              <Text style={styles.modalBodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa praesentium delectus numquam maxime voluptate aut, neque debitis assumenda reiciendis earum, excepturi officia architecto. Incidunt reprehenderit minus blanditiis tenetur assumenda?</Text>
              </ScrollView>
            </View>
            <View style={styles.modalFooter}>
              <Pressable
                style={styles.pressableBtnModal}
                onPress={()=>setShowModal(false)}
                >
                <Text style={styles.modalBtn}>
                  Ok
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
        <AddItem
          handleSubmit={handleSubmit}
        />
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={items}
          renderItem={({item}) => 
            <Products
              name={item.name}
              idString={item.key}
              handleDelete={handleDelete}
            />
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
    </ImageBackground>
  );
}

export default TodoList

const styles = StyleSheet.create({

  background:{
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  scrollViewList:{
    margin: 10,
    justifyContent:"center"
  },

  contentContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)'
},
modalContent:{
  backgroundColor: '#fff',
  width: '80%',
  height: '60%',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
},
modalHeader:{
  width: '100%',
  padding: 16,
  alignItems: 'center',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomWidth: 1,
  borderBottomColor: 'lightgray'
},
modalHeaderText:{
  color:'grey',
  fontSize: 18
},
modalBody:{
  width: '100%',
  flex:1,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  alignItems: 'center',
  justifyContent: 'center'
},
modalBodyText:{
  fontSize:17,
},
modalFooter:{
  width: '100%',
},
pressableBtnModal:{
  borderBottomRightRadius: 15,
  borderBottomLeftRadius: 15,
  backgroundColor: 'lightseagreen'
},
modalBtn:{
  fontSize: 17,
  color: '#fff',
  textAlign: 'center',
  padding: 16
},
modalImg:{
  width: 150,
  height: 150,
  margin: 10
},

});


