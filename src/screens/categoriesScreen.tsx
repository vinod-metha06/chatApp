import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { LoadingBar } from '../components/LoadingBar';
import ProductCard from '../components/productCard';
import {dispatchGetCategories} from '../redux/action';
import Reducer from '../types/reducer';
interface State {
  getCategoriesReducer: Reducer;
}
const CategoriesScreen = ({route}) => {
  console.log(route.params);
  const dispatch = useDispatch();

  const products = useSelector((state: State) => state.getCategoriesReducer);

  useEffect(() => {
    dispatch(dispatchGetCategories(route.params));
  }, []);

  if(products.isLoading){
    return <LoadingBar/>
  }
  return (
    <FlatList
      data={products.data}
      renderItem={({item}) => (
        <ProductCard
          imageUrl={item.image}
          name={item.name}
          price={item.price}
          value={item}
        />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
