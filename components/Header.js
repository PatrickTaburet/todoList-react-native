import { useFonts, Aldrich_400Regular } from '@expo-google-fonts/aldrich';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


const Header = () => {
    const [fontsLoaded, error] = useFonts({
        Aldrich_400Regular : Aldrich_400Regular
      })
      
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.headerContainer}>
         <Image
            style={styles.headerLogo}
            source={require('../assets/image/logo.jpg')}
        />
        <Text style={styles.headerText}>My Todo List</Text>  
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent:"center",
        height: 90,
        width:"100%",
        flexDirection: "row"
    },
    headerText:{
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        fontFamily: 'Aldrich_400Regular',
    },
    headerLogo:{
        width:50,
        height:50,
        position:"absolute",
        left: 0,
        top: 30,
        marginLeft: 20,
    }


})