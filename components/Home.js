import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

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