import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';



interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  value:any
 
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price,value }) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      console.log(value+"log")
     //return  navigation.navigate('HomeStackScreen',{screen:'Details',params:value},{value});
     navigation.navigate('DetailsScreen',{value})
    }}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name.substring(0,16)}</Text>
        <Text style={styles.price}>Rs: {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    marginLeft:8
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    resizeMode:'contain'
    
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ProductCard;
