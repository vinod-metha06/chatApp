import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import showSnackbar from '../components/snackBar';
import {dispatchLogged} from '../redux/action';

export const handleLogin = async (data: any) => {
  console.log('Logged in as:');
  const email = data.email;
  const password = data.password;
  try {
    await auth().signInWithEmailAndPassword(email, password);
    await AsyncStorage.setItem('email', email);

    return true;
  } catch (error: any) {
    showSnackbar('Invalid credentials');
    console.log('Error:', error.message);
    return false;
  }
};

export const handleSignUp = async (data: any) => {
  const email = data.email;
  const password = data.password;
  const name = data.name;
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    await firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        console.log('User added!');
        // AsyncStorage.setItem('email',  email);
      });
    await AsyncStorage.setItem('email', email);
    return true;
  } catch (error) {
    return false;
  }


};

export const handleLogout =async () => {
  const navigation=useNavigation();
  await  auth()
    .signOut()
    .then(() => {
      console.log('Logged out');
       AsyncStorage.removeItem('email');
       navigation.navigate('Login')

      
    })
    .catch((error: any) => {
      console.log('Error:', error.message);
    });
};

export const getUserAPI = async (data: any) => {
  const snapshot = await firestore()
    .collection('Users')
    .where('email', '==', data)
    .get();
  const documents = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  console.log(documents);
  return documents;
};

export const getBestSellingPhoneAPI = async () => {
  const snapshot = await firestore().collection('Products').get();
  const documents = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  console.log(documents);
  return documents;
};



export const getCategoriesAPI = async (query:any) => {
  console.log(query)
  const snapshot = await firestore().collection('Products').where('cat', '==', query).get();
  const documents = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  console.log(documents);
  return documents;
};

export const addToCartAPI = async (data: any) => {
  try {
    await firestore().collection('Cart').add(data);
    showSnackbar('Added to Cart');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const alreadyAddToCartAPI = async (data: any) => {
  try {
    console.log(data.id)
  const snapshot=  await firestore()
    .collection('Cart')
    .where('email', '==', data.email)
    .where('pid', '==',data.id)
    .get();
    const documents = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    console.log(documents.length);
    if(documents.length ==1){
      return true;
    }
    if(documents.length ==0){
      return false;
    }
   
  } catch (error) {
    console.log(error);
    return false;
  }
};




export const getCartItemsAPI = async (data: any) => {
  try {
    console.log(data.id)
  const snapshot=  await firestore()
    .collection('Cart')
    .where('email', '==', data)
    .get();
    const documents = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    console.log(documents);
    return documents;
  } catch (error) {
    console.log(error);
    return [];
  }
};


export  const updateQty=async(data:any)=>{
  try {
   await firestore()
  .collection('Cart')
  .doc(data.id)
  .update({
    qty: data.qty,
  })
  .then(() => {
    console.log('Qty updated!');
  });
  } catch (error) {
    console.log(error)
  }
}

export const removeCartItem=async(id:string)=>{
  try {
    firestore()
  .collection('Cart')
  .doc(id)
  .delete()
  .then(() => {
    console.log('item deleted!');
  });
  } catch (error) {
    console.log(error)
  }

}