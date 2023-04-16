// import { useNavigation } from '@react-navigation/native';
// import React, { useEffect } from 'react';
// import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { dispatchGetUser } from '../redux/action';
// import Reducer from '../types/reducer';
// import { getData } from '../utils/localdata';

// const DATA = [
//   {
//     id: '1',
//     name: 'John Doe',
//     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     time: '2:30 PM',
//     avatar: 'https://bit.ly/3L3zt2o',
//   },
//   {
//     id: '2',
//     name: 'Jane Doe',
//     message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//     time: '1:45 PM',
//     avatar: 'https://bit.ly/3L3zt2o',
//   },
//   {
//     id: '3',
//     name: 'Bob Smith',
//     message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     time: '12:20 PM',
//     avatar: 'https://bit.ly/3L3zt2o',
//   },
//   {
//     id: '4',
//     name: 'Bob Smith',
//     message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     time: '12:20 PM',
//     avatar: 'https://bit.ly/3L3zt2o',
//   },
//   {
//     id: '5',
//     name: 'Bob Smith',
//     message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     time: '12:20 PM',
//     avatar: 'https://bit.ly/3L3zt2o',
//   },
// ];

// const Item = ({ name, message, time, avatar }) => (
 
//     <View style={styles.item}>
//     <Image style={styles.avatar} source={{uri:avatar}} />
//     <View style={styles.textContainer}>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.message}>{message.substring(0, 20)}</Text>
//     </View>
  
//     <View style={styles.badgeContainer}>
//       {4 > 0 && <Text style={styles.badge}>{4}</Text>}
//       <Text style={styles.time}>{time}</Text>
//     </View>
//   </View>
 
  
// );

// const App = () => {


//   interface State {
//     getUserReducer: Reducer;
//   }
//   const dispatch = useDispatch();
//   const response=useSelector((state:State)=>state.getUserReducer)
//   const navigation=useNavigation();

// useEffect(()=>{
//   const email=getData('email');
//   console.log(email);
//   dispatch(dispatchGetUser('methavinod06@gmail.com'))
// },[])

//   const renderItem = ({ item }) => (
//     <Pressable onPress={()=>navigation.navigate('ChatScreen')}>
//     <Item name={item.name} message={'item.message'} time={'item.time'} avatar={'https://bit.ly/3L3zt2o'} />
//     </Pressable>
//   );

//   if (response.isLoading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={response.data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   badgeContainer: {
//     alignItems: 'flex-end',
//   },
//   badge: {
//     backgroundColor: 'green',
//     color: '#fff',
//     padding: 3,
//     borderRadius: 10,
//     marginRight: 5,
//   },
//   message: {
//     fontSize: 16,
//     color: '#888',
//   },
//   time: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default App;
