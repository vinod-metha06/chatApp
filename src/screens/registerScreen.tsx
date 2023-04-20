import { useNavigation } from '@react-navigation/native';
import React, {  useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingBar } from '../components/LoadingBar';
import { EcomAction } from '../constants/actionConstants';
import { dispatchRegister } from '../redux/action';
import Reducer from '../types/reducer';


const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch();

  interface  State{
    registerReducer:Reducer;
  }

  const navigation=useNavigation();
  const response=useSelector((state:State)=>state.registerReducer);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    dispatch( dispatchRegister({name:name,email:email,password:password}));
    // if (response.data == EcomAction.SUCCESS) {
    //   navigation.navigate('HomeScreen');
    // } else if (response.data == EcomAction.FAIL) {
    //   Alert.alert('Inavalid Credentials');
    // }
  };

  if (response.isLoading) {
    return <LoadingBar/>;
  }

  if (response.data!= "" && response.data !=EcomAction.FAIL) {
    navigation.navigate('HomeScreen');
 }

  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Text style={styles.toggleButtonText}>
          {showPassword ? 'Hide' : 'Show'}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={confirmPassword}
        secureTextEntry={!showPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Text style={styles.toggleButtonText}>
          {showPassword ? 'Hide' : 'Show'}
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
      <Text style={styles.loginButtonText}>Register</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.forgotButton}
      onPress={() => navigation.navigate('Login')}>
      <Text style={styles.navButtonText}>
        Already have an acount? Click here
      </Text>
    </TouchableOpacity>
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 20,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  toggleButton: {
    padding: 10,
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#555555',
  },
  loginButton: {
    backgroundColor: '#5DB075',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default RegisterScreen;
