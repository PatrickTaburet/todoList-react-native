import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';
import Home from './components/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
           <Header style={styles.header}></Header>

    <Tab.Navigator
        initialRouteName="Home"
        activeColor="orange"
        inactiveColor="white"
        barStyle={{ backgroundColor: '#694fad' }}
        backBehavior="history" 
        shifting={true}
        labeled={true}  
    >
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                tabBarColor:"red",
              }}        
        />
        <Tab.Screen 
            name="TodoList" 
            component={TodoList} 
            options={{
                tabBarLabel: 'Todo List',
                sceneContainerStyle: { backgroundColor: 'blue' },
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="octagram-outline" color={color} size={26} />
                ),
            }}   
        
        />
        <Tab.Screen 
            name="Gallery" 
            component={Gallery} 
            options={{
                tabBarLabel: 'Gallery',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="panorama-outline" color={color} size={26} />
                ),
            tabBarColor:"yellow",
            }}   
        />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header:{
    width: "100%",
    position: 'absolute',
    top: 0,
    height: 150,
},
})


