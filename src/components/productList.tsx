import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ProductCard from './productCard';


interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  rate:string;
  des:string;
}

interface ProductListProps {
  products: Product[];
 // onProductPress: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products}) => {
  const navigation=useNavigation();
  const renderProduct = ({ item }: { item: Product }) => (
   
    <ProductCard
      imageUrl={item.image}
      name={item.name}
      price={item.price}
      value={item}
      
     
    />
  );

  return (
    <FlatList
      data={products}
     // horizontal={true}
      renderItem={renderProduct}
      numColumns={2}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ProductList;
