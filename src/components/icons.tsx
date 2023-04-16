import { Image, Pressable } from 'react-native';

export  function CartIcon({navigation}) {
    return (
      <Pressable onPress={() => navigation.navigate('CartScreen')}>
        <Image
          source={require('../assets/cart-icon.jpg')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            marginRight: 10,
            resizeMode: 'contain',
          }}
        />
      </Pressable>
    );
  }

 export function UserIcon({navigation}) {
    return (
      <Pressable onPress={() => navigation.navigate('AccountScreen')}>
        <Image
          source={require('../assets/account-icon.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            marginRight: 10,
            resizeMode: 'contain',
          }}
        />
      </Pressable>
    );
  }