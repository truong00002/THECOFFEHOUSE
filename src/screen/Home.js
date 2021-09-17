import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'


const DATA1 = [
  {
    id: "1",
    title: "Ưu đãi đặc biệt",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "02/09"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/236903713_3043429605931045_6642348340373543205_n_c7db024e43f94eb2bdc10c5e17f4cbbd_grande.jpeg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/236903713_3043429605931045_6642348340373543205_n_c7db024e43f94eb2bdc10c5e17f4cbbd_grande.jpeg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/236903713_3043429605931045_6642348340373543205_n_c7db024e43f94eb2bdc10c5e17f4cbbd_grande.jpeg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/blog__1__b18b5c42d3f04835a52152c368c63501_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/blog__1__b18b5c42d3f04835a52152c368c63501_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/file/blog__1__b18b5c42d3f04835a52152c368c63501_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/banner_web__1__44ad5bb4e39443a58119cdebc98ae31b_master.jpg",
    date: "23/08"
  },
];


const DATA2 = [
  {
    id: "1",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
];



const DATA3 = [
  {
    id: "1",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8276_grande.jpg",
    date: "23/08"
  },
  {
    id: "2",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8538_grande.jpg",
    date: "23/08"
  },
  {
    id: "3",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8276_grande.jpg",
    date: "23/08"
  },
  {
    id: "4",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8538_grande.jpg",
    date: "23/08"
  },
  {
    id: "5",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "6",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "7",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "8",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/img_8586_grande.jpg",
    date: "23/08"
  },
  {
    id: "9",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
  {
    id: "10",
    title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
    image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
    date: "23/08"
  },
];

export default function Home() {
  const windowHeight = Dimensions.get('window').height;
  const [dataList, setDataList] = useState(DATA1);

  const Body = () => {
    return (
      <View>
        <View style={styles.login}>
          <ImageBackground style={styles.imageBG}
            source={require('../Images/anhnen.jpg')}
            resizeMode='cover'
          >
            <View style={styles.loginBg}>
              <View style={styles.itemLogin1}>
                <Text style={styles.titleLogin1}>Đăng nhập</Text>
                <Text style={styles.titleLogin2}>Sử dụng app để tích điểm và đổi nhưng ưu đãi chỉ</Text>
                <Text style={styles.titleLogin4}>dành riêng cho thành viên bạn nhé !!</Text>
                <TouchableOpacity style={styles.btnLogin}>
                  <Text>Đăng nhập</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemLogin2}>
                <Text style={styles.titleLogin3}>The Coffee House's Reward</Text>
                <Fontisto style={styles.iconLogin} name='angle-right' size={18} />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <View style={{ flexDirection: 'row', height: 80, width: '95%', marginHorizontal: 10, borderRadius: 5, borderWidth: 1, borderColor: '#868786', backgroundColor: '#ffffff', paddingVertical: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#868786', }}>
              <Image style={styles.iconImage1}
                source={require('../Images/delivery.png')}
              />
              <Text>Giao hàng</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <Image style={styles.iconImage2}
                source={require('../Images/takeway.png')}
              />
              <Text>Mang đi</Text>
            </View>
          </View>
          <View style={{
            width: '95%', height: 180, marginHorizontal: 10, marginTop: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}>
            <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={3}>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/225547912_3043429712597701_1363688999489744489_n_ecf71de9ac524b29a1596646dc4aaf82_grande.jpeg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/236903713_3043429512597721_3240934949613314118_n_34e21bb2e40242eb877c5f10aa66bd2c_grande.jpeg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/article/blog_079b84707b0e4e4fa291d617d4184546_master.jpg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://file.hstatic.net/1000075078/file/notif-giahan-goiwfh_14855ba08c8b42c9bdb0c80432734dbc_grande.jpg" }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.slideImage} source={{ uri: "https://image.bnews.vn/MediaUpload/Org/2021/01/23/the-coffee-house2.jpg" }} />
              </View>
            </Swiper>
          </View>
          <View style={styles.content}>
            <View style={styles.mainContent}>
              <Text style={styles.textContent} >Khám phá thêm </Text>
            </View>
            <View style={styles.selectContent}>
              <View style={styles.Content1}>
                <Text style={styles.textContent1} onPress={() => setDataList(DATA1)}>Ưu đãi đặc biệt</Text>
              </View>
              <View style={styles.Content1}>
                <Text style={styles.textContent2} onPress={() => setDataList(DATA2)}>Cập nhật từ nhà hàng</Text>
              </View>
              <View style={styles.Content1}>
                <Text style={styles.textContent3} onPress={() => setDataList(DATA3)}>#CoffeeLover</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View>
          <Image style={styles.imageItem}
            source={{ uri: item.image }}
          />
        </View>
        <View>
          <Text style={styles.titleItem}>{item.title}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Icon name="calendar" size={14} color="black" style={styles.iconItem} />
          <Text style={styles.timeIcon}>{item.date}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.Header}>
        <View style={styles.Title}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.imageHeader}
              source={require('../Images/sun.png')}
            />
            <Text style={styles.titleHeader}>Chào bạn Trường Canh</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.iconRight1}>
              <Material name="ticket-confirmation-outline" size={18} />
            </View>
            <View style={styles.iconRight2}>
              <Fontisto name="bell" size={18} />
            </View>
          </View>
        </View>
      </View>
      <View style={{}}>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={Body}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    margin: 10,
  },
  imageItem: {
    height: 160,
    width: '100%',
    borderRadius: 10,

  },
  titleItem: {
    flexWrap: 'wrap',
    fontWeight: '500',
  },
  iconItem: {
    paddingTop: 3,
  },
  timeIcon: {
    marginLeft: 8,
    color: "#8f8f8f"
  },
  selectContent: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Content1: {

  },
  content: {
    margin: 10
  },
  mainContent: {

  },
  textContent: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  textContent1: {
    fontWeight: '500'
  },
  textContent2: {
    fontWeight: '500'
  },
  textContent3: {
    fontWeight: '500'
  },
  wrapper: {
    borderRadius: 10,
  },
  slide: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  iconImage1: {
    height: 40,
    width: 40,

  },
  iconImage2: {
    height: 40,
    width: 40,

  },
  Header: {
    backgroundColor: '#fcfcf5',
    height: 50,
    paddingHorizontal: 10
  },
  Title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
  },
  imageHeader: {
    height: 40,
    width: 40,
  },
  titleHeader: {
    fontWeight: '600',
    marginTop: 15,
    marginLeft: 15,
    fontSize: 14,
  },
  headerRight: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  iconRight1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 40,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  iconRight2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  login: {
    margin: 10,
    borderRadius: 50,
    height: 280,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  loginBg: {
    justifyContent: 'space-between',
  },
  itemLogin1: {

  },
  titleLogin1: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center'
  },
  titleLogin2: {
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
  },
  titleLogin4: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400'
  },
  titleLogin3: {

  },
  btnLogin: {
    backgroundColor: '#f79736',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 120,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: 130,
    marginVertical: 10
  },
  itemLogin2: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 80,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    width: '95%',
    height: 60,
    padding: 20,
    borderRadius: 10
  },
  iconLogin: {

  },
  imageBG: {
    height: 280,
    width: '100%',
  },

});