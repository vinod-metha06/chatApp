import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const CartItem = ({ item, onIncrement, onDecrement }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
      <Image source={{uri:item.image}} style={{ width: 50, height: 50 }} />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={{ fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: '#888' }}>
          ${item.price} x {item.qty}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={onDecrement}>
          <Text style={{ fontSize: 20, color: 'red' }}>-</Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
          {item.qty}
        </Text>
        <TouchableOpacity onPress={onIncrement}>
          <Text style={{ fontSize: 20, color: 'green' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
