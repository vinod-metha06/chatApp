import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingBar} from '../components/LoadingBar';
import {dispatchGetUser} from '../redux/action';
import {handleLogout} from '../service/service';
import Reducer from '../types/reducer';
import auth from '@react-native-firebase/auth';
import {getData} from '../utils/localdata';

interface State {
  getUserReducer: Reducer;
}
const AccountScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.getUserReducer);
  const navigation = useNavigation();

  useEffect(() => {
    const getUserDetail = async () => {
      const d = await getData('email');
      dispatch(dispatchGetUser(d));
    };
    getUserDetail();
  }, []);

  const onHandleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('Logged out');
        AsyncStorage.removeItem('email');
        navigation.navigate('Login');
      })
      .catch((error: any) => {
        console.log('Error:', error.message);
      });
  };

  if (user.isLoading) {
    return <LoadingBar />;
  }

  if (user.data.length == 0) {
    return <LoadingBar />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/account-icon.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.data[0].name}</Text>
        <Text style={styles.email}>{user.data[0].email}</Text>
      </View>
      <View style={styles.cartContainer}>
        <Text style={styles.cartText}>Your Cart</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            navigation.navigate('CartScreen');
          }}>
          <Text style={styles.cartButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={onHandleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccountScreen;
