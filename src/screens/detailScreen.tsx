import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import showSnackbar from '../components/snackBar';
import {
  dispatchAddToCart,
  dispatchAddToCartLoading,
  dispatchAlreadyAddToCart,
  dispatchGetCartItem,
} from '../redux/action';
import {alreadyAddToCartAPI} from '../service/service';
import Reducer from '../types/reducer';

import {getData} from '../utils/localdata';

interface Product {
  id: string;
  product_name: string;
  product_price: number;
  product_rating: number;
  product_image: string;
}

interface Props {
  product: Product;
}

const DetailsScreen = ({route}) => {
  const {params} = route;
  const {value} = params;
  const {image, name, price, rate, id} = value;

  interface State {
    addToCartReducer: Reducer;
  }
  interface StateCheck {
    alreadyAddToCartReducer: Reducer;
  }
  const [alreadyAdded, setAlreadyAdded] = useState<boolean>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
 
  const response = useSelector((state: State) => state.addToCartReducer);

  const added = useSelector(
    (state: StateCheck) => state.alreadyAddToCartReducer,
  );

  useEffect(() => {
  
    check();
 //return() =>  check();
  }, []);

  const check = async () => {
    const value = await getData('email');
    const cartItemCheck = {
      id: id,
      email: value,
    };
   
    const res = await alreadyAddToCartAPI(cartItemCheck);
    setAlreadyAdded(res);
  };
  const handleOnPress = async () => {
    const value = await getData('email');
    const cartItem = {
      pid: id,
      name: name,
      price: price,
      image: image,
      rate: rate,
      qty: 1,
      email: value,
    };
    if (value != null) {
      console.log('adding', value);
      dispatch(dispatchAddToCart(cartItem));
      check();
    } else {
      navigation.navigate('login');
    }
  };

 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rs:{price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rate}</Text>
          <Text style={styles.ratingText}>out of 5</Text>
        </View>

        {alreadyAdded ? (
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Added to Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleOnPress}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}

       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
