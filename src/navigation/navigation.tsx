
import React,{useEffect,useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from '../screens/registerScreen';


const Stack = createNativeStackNavigator();

function Navigation() {

  const [isUserLoggedIn, setUserLoggedIn] = React.useState<boolean>();
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('email').then(value => {
      if (value == null) {
     
        setUserLoggedIn(false);
      } else {
        setUserLoggedIn(true);
      }
    });
  }, []);
  //console.log(isUserLoggedIn);
  if (isUserLoggedIn === null) {
    return null;
  } else if (isUserLoggedIn === true) {
    routeName = 'Home';
  } else {
    routeName = 'Login';
  }
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={routeName}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;