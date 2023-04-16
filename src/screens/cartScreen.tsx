import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingBar} from '../components/LoadingBar';
import showSnackbar from '../components/snackBar';
import {
  dispatchGetCartItem,
  dispatchGetCartItemLoading,
  dispatchUpdateQty,
} from '../redux/action';
import {removeCartItem, updateQty} from '../service/service';
import Reducer from '../types/reducer';
import {getData} from '../utils/localdata';

interface State {
  getCartItemReducer: Reducer;
}

const CartScreen = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: State) => state.getCartItemReducer);
  const [cartItems, setCartItems] = useState<[]>([]);
  const [r, setr] = useState<boolean>();

  let cartList = [];
  let totalPrice = 0;

  useEffect(() => {
    const getUserDetail = async () => {
      const value = await getData('email');
      dispatch(dispatchGetCartItem(value));
    };
    getUserDetail();
  }, [r]);

  const updateInApi = async (id, qty) => {
    const data = {
      id: id,
      qty: qty,
    };
    await updateQty(data);
  };

  const removeInApi = async id => {
    await removeCartItem(id);
  };

  const handleRemoveItem = (item: any) => {
    removeInApi(item.id);
    setr(true);
  };

  const handleQuantityChange = (item: any, type) => {
    const newCartItems = [...data.data];
    // console.log(newCartItems);
    const index = newCartItems.findIndex(cartItem => cartItem.id === item.id);
    if (type === 'increment') {
      if (newCartItems[index].qty! < 5) {
        updateInApi(item.id, newCartItems[index].qty + 1);
        newCartItems[index].qty++;
      }

      if (newCartItems[index].qty == 5) {
        showSnackbar('Maximum quantity reached');
      }
    } else {
      if (newCartItems[index].qty! > 1) {
        updateInApi(item.id, newCartItems[index].qty - 1);

        newCartItems[index].qty--;
      }
      if (newCartItems[index].qty == 1) {
        showSnackbar('Manimum quantity reached');
      }
    }
    setCartItems(newCartItems);
    console.log(cartItems, 'update');

    const total = newCartItems.reduce((acc, item) => {
      return acc + parseInt(item.price) * item.qty;
    }, 0);

    totalPrice = total;
    console.log('Total', total);
  };

  const renderItem = ({item, index}) => {
    // console.log(index);
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: item.image}} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>Rs: {item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(item, 'decrement')}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.qty}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(item, 'increment')}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <View style={styles.removeContainer}>
              <TouchableOpacity onPress={() => handleRemoveItem(item)}>
                <Text style={styles.remove}>remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  if (data.isLoading) {
    return <LoadingBar />;
  }

  if (data.data.length == 0) {
    return <LoadingBar />;
  }
  if (!data.isLoading) {
    cartList = data.data;
    const totalvalue = cartList.reduce((acc, item) => {
      return acc + parseInt(item.price) * item.qty;
    }, 0);
    totalPrice = totalvalue;
  }

  return (
    <>
      {cartList.length > 0 ? (
        <View style={{flex: 1}}>
          <View style={styles.cartContainer}>
            <FlatList
              data={cartList}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.total}>Total Price </Text>
            <Text style={styles.totalprice}>Rs: {totalPrice}/-</Text>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 0.9,
  },
  totalContainer: {
    flex: 0.1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'lightblue',
    borderRadius: 20,
  },
  removeContainer: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  remove: {
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalprice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
  },
});

export default CartScreen;
