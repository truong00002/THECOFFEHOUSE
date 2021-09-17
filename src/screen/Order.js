import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { getMenu } from '../sevices/api';
import { useDispatch } from "react-redux";


export default function Order() {
  const [product, setProduct] = useState([]);
  const windowHeight = Dimensions.get('window').height;

  dispatch = useDispatch()

  const onAddToCart = item => () => {
    dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } });
  };

  useEffect(() => {
    const callGetMenu = async () => {
      try {
        const response = await getMenu();
        console.log('rs', response.data.data); // data tu api tra ve
        setProduct(response.data.data)

      } catch (error) {
        console.error(error);
      }
    }

    callGetMenu()
  }, [])

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }} onPress={onAddToCart(item)}>
          <View style={styles.content}>
            <Text style={styles.textHeading}>{item.product_name}</Text>
            <Text style={styles.textTitle} ellipsizeMode='tail' numberOfLines={3}>{item.description}</Text>
            <Text style={styles.textPrice}>{item.base_price} vnd</Text>
          </View>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const titleListItem = () => {
    return (
      <View style={styles.content1}>
        <Text style={styles.textContent1}>Cà phê gói cà phê uống liền</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ height: windowHeight - 50 }}>
      <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#ffffff' }}>
        <View>
          <Image
            source={require('../Images/delivery.png')}
            style={{ height: 30, width: 30, marginHorizontal: 15, marginVertical: 5 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: '500', marginTop: 5 }}>Giao đến</Text>
            <Fontisto name='angle-down' size={12} color='#7a7a7a'
              style={{ marginTop: 8, marginLeft: 5 }}
            />
          </View>
          <Text style={{ fontWeight: '400', color: '#7a7a7a' }}>Vân Canh, Hoài Đức, Hà Nội</Text>
        </View>
      </View>
      <View style={styles.Header}>
        <View style={styles.Option1}>
          <Text>Cà phê gói - Cà phê uống liền</Text>
          <Ionicons name='ios-chevron-down-sharp' size={20} color='#555' />
        </View>
        <Ionicons name='search' size={20} color='#555' style={styles.icon} />
        <Ionicons name='heart-outline' size={20} color='#555' style={styles.icon} />
      </View>
      <FlatList
        data={product}
        renderItem={RenderItem}
        keyExtractor={item => item._id}
        style={{ marginBottom: 0 }}
        ListHeaderComponent={titleListItem}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  content1: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textContent1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon: {
    padding: 7,
    borderRadius: 5,
    backgroundColor: '#d4d4d4'
  },
  Header: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingBottom: 15
  },
  Option1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#d4d4d4'
  },
  item: {
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15
  },
  content: {
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'space-between'
  },
  textHeading: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textTitle: {
    fontSize: 15,
    color: '#555'
  },
  textPrice: {
    fontSize: 16,

  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
});