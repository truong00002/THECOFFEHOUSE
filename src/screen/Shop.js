import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { getShop } from '../sevices/api';


export default function shop() {
  const windowHeight = Dimensions.get('window').height;
  const [shop, setShop] = useState([]);

  useEffect(() => {
    const callGetShop = async () => {
      try {
        const response = await getShop();
        console.log('rs', response.data); // data tu api tra ve
        setShop(response.data)

      } catch (error) {
        console.error(error);
      }
    }

    callGetShop()
  }, [])


  const renderItem1 = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.item_row}>
          <Image
            source={{ uri: item.image_1 }}
            style={styles.image}
          />
          <View style={styles.textcontent}>
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text2}>{item.address.full_address}</Text>
            <Text style={styles.text3}></Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ height: windowHeight - 50 }}>
      <View style={styles.Header}>
        <View style={styles.itemHeader1}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cửa hàng</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              borderRadius: 15,
              backgroundColor: '#ffffff',
              paddingHorizontal: 10,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              width: 40,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}>
              <MaterialIcons name="ticket-confirmation-outline" size={18} color="black" style={styles.icon1} />
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              width: 30,
              borderColor: 'black',
              borderRadius: 30 / 2,
              backgroundColor: '#ffffff',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}>
              <Fontisto name='bell' size={18} color='black'
                style={styles.icon2}
              />
            </View>
          </View>
        </View>
        <View style={styles.itemHeader2}>
          <View style={{ flexDirection: 'row', height: 40, width: '65%', borderRadius: 10, backgroundColor: '#d4d4d4' }}>
            <Ionicons name='search' size={20} color='black'
              style={{ height: 40, width: 40, padding: 10 }}
            />
            <TextInput
              placeholder='Nhập tên đường.....'
              style={{ fontSize: 16 }}
            />
          </View>
          <Ionicons name='map-outline' size={18} color='black' />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bản đồ</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>Cửa hàng gần đây</Text>
      </View>
      <FlatList
        data={shop}
        renderItem={renderItem1}
        keyExtractor={item => item.id}
        style={{ marginBottom: 0 }}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  itemHeader2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  itemHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10
  },
  Header: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 10
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  item: {
    marginHorizontal: 15,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  item_row: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between'
  },
  textcontent: {
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'space-between'
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 15,
    color: '#555'
  },
  text3: {
    fontSize: 15,
  },
  icon1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  icon2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

  },
});