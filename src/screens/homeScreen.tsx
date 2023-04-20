import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CategoryList from '../components/categories';
import ProductList from '../components/productList';
import {useDispatch, useSelector} from 'react-redux';
import { Header, Icon } from 'react-native-elements';


import Reducer from '../types/reducer';
import { dispatchGetCartItem, getBestSellingPhones } from '../redux/action';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

const categories = [
  {
    id: 1,
    name: 'Mobile',
    imageUrl:require('../assets/mobile.png'),
  },

  {
    id: 2,
    name: 'Laptop',
    imageUrl: require('../assets/laptop.png'),
  },
  {
    id: 3,
    name: 'HeadPhone',
    imageUrl: require('../assets/headphone.png'),
  },
  {
    id: 4,
    name: 'TV',
    imageUrl: require('../assets/TV.jpg'),
  },
  {
    id: 5,
    name: 'Camera',
    imageUrl: require('../assets/camera.png'),
  },
];

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface HomeScreenProps {
  categories: Category[];
  bestSellingProducts: Product[];
  onProductPress: (product: Product) => void;
}

interface State {
  bestSellingPhonereducer: Reducer;
}

const HomeScreen = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: State) => state.bestSellingPhonereducer);

  useEffect(() => {
    dispatch(getBestSellingPhones());
 
  }, []);


 

  useEffect(() => {
    //console.log(data);
  }, [data.isLoading]);

  return (
    
   
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>

        <CategoryList categories={categories} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Selling Products</Text>
        {data.isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ProductList products={data.data} />
        )}
      </View>
      </>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
