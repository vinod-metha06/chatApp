import React, {useEffect, useReducer, useState} from 'react';
import {View, Image, Text, Pressable, ActivityIndicator} from 'react-native';
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
import {getData} from '../utils/localdata';
import {authReducer, authState} from '../redux/reducer/authReducer';
import {navigationRef} from './rootNavigation';
import { EcomAction } from '../constants/actionConstants';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator();
export const navigationContainerRef = createNavigationContainerRef();

function Navigation() {
  const [authstate, dispatch] = useReducer(authReducer, authState);
  let routeName;

  useEffect(() => {
    const getUserDetail = async () => {
      const value = await getData('email');
      if (value == null || value == undefined) {
        routeName = 'Login';
        dispatch({type: EcomAction.AUTH_TOKEN_NULL});
      }
      if (value != null) {
        routeName = 'HomeScreen';
        dispatch({type: EcomAction.AUTH_TOKEN, payload: value});
      }
    };
    getUserDetail();
  }, []);

  if (authstate.loading) {
    return <SplashScreen/>;
  }

  if (authstate.authToken != null) {
    console.log(authstate.authToken);
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={authstate.authToken == null ? 'Login' : 'HomeScreen'}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({route, navigation}) => ({
            headerRight: props => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 100,
                }}>
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
