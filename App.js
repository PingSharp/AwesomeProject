import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigblue}>Home!</Text>
      </View>
    );
  }
}
class Cart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigblue}>cart!</Text>
      </View>
    );
  }
}

class Products extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    )
  }
}
class Me extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Me</Text>
      </View>
    )
  }
}
export default createBottomTabNavigator({
  Home:{
    screen: App,
    navigationOptions: {
      tabBarLabel:'Home',
        tabBarIcon: ({tintColor}) => <Icon name='home' size={25} color={tintColor}></Icon>
      
    }
  },
  Products:{
    screen: Products,
    navigationOptions: {
      tabBarLabel:'Products',
        tabBarIcon: ({tintColor}) => <Icon name='list' size={25} color={tintColor}></Icon>
      
    }
  },
  Cart:{
    screen: Cart,
    navigationOptions: {
      tabBarLabel:'Cart',
        tabBarIcon: ({tintColor}) => <Icon name='shopping-cart' size={25} color={tintColor}></Icon>
      
    }
  },
 Me:{
   screen: Me,
   navigationOptions: {
    tabBarLabel:'Me',
      tabBarIcon: ({tintColor}) => <Icon name='face' size={25} color={tintColor}></Icon>
    
  }
 }
},{tabBarOptions: {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 15,
  },
  style: {
    backgroundColor: 'blue',
  },
}})

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
    fontSize: 50,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'red'
  },
});
