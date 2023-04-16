import React, {useEffect, useState} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigationContainerRef,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from '../screens/registerScreen';
import ChatScreen from '../screens/chatScreen';
import DetailsScreen from '../screens/detailScreen';
import CartScreen from '../screens/cartScreen';
import {Icon} from 'react-native-elements';
import CategoriesScreen from '../screens/categoriesScreen';
import {CartIcon, UserIcon} from '../components/icons';
import AccountScreen from '../screens/accountScreen';

const Stack = createNativeStackNavigator();
export const navigationContainerRef = createNavigationContainerRef();

function Navigation() {
  const [isUserLoggedIn, setUserLoggedIn] = React.useState<boolean>();
  const [routeName, setrouteName] = React.useState<string>();
  //  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('email').then(value => {
      console.log(value, 'login value');
      if (value == null) {
        console.log('login value null');

        setrouteName('Login');
      }
      if (value != null) {
        console.log('login value true');
        setrouteName('HomeScreen');
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({route, navigation}) => ({
            headerRight: props => (
              <View style={{flexDirection: 'row',justifyContent: 'space-between', marginLeft: 100}}>
                <CartIcon {...props} navigation={navigation} />
                <UserIcon {...props} navigation={navigation} />
              </View>
            ),
            title: 'Shop',
            headerStyle: {
              backgroundColor: 'white',
            },
          })}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
