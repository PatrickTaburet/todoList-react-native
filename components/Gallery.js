import { StyleSheet, Text, View } from 'react-native'


const Page3 = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Gallery</Text>
  </View>
  )
}

export default Page3

const styles = StyleSheet.create({
  text:{
    fontSize: 50,
    textAlign:'center',
    marginVertical:'auto'
  },
  container:{
    flex:1,
    height:"100%",
    backgroundColor:"pink"
  }
})