import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const handleLogin = async (data: any) => {
  console.log('Logged in as:');
  const email = data.email;
  const password = data.password;
  try {
  await  auth()
    .signInWithEmailAndPassword(email, password);
    return true;
  } catch (error:any) {
    console.log('Error:', error.message);
    return false;
  }
  // await auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
    
  //     const user = userCredential.user;
  //     // AsyncStorage.setItem('email',  user.email!);
  //     console.log('Logged in as:', user.email);
  //     return true;
  //   })
  //   .catch((error: any) => {
     
  //     console.log('Error:', error.message);
  //     return false;
  //   });
};

export const handleSignUp = async (data: any) => {
  const email = data.email;
  const password = data.password;
  const name=data.name;
 await  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential: any) => {
      // Signed up
      const user = userCredential.user;
      
      console.log('Signed up as:', user.email);
      return true;
    })
    // .then(
    //   ()=>{
    //     firestore()
    //     .collection('Users')
    //     .add({
    //       name: name,
    //       email: email,
    //       password: password,
    //     })
    //     .then(() => {
    //       return true;
    //       console.log('User added!');
    //       //AsyncStorage.setItem('email',  email);
         
    //     });
       
    //   }
    // )
    .catch(error => {
      console.log('Error:', error.message);
      return false;
    });
};

export const handleLogout = () => {
  auth()
    .signOut()
    .then(() => {
      console.log('Logged out');
    })
    .catch((error: any) => {
      console.log('Error:', error.message);
    });
};
