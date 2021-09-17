import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../screen/Home';
import DetailScreen from '../screen/Details';
import OrderScreen from '../screen/Order';
import OtherScreen from '../screen/Other';
import ShopScreen from '../screen/Shop';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Order') {
              iconName = focused ? 'coffee' : 'coffee';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'shopping-search' : 'shopping-search';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'cart-plus' : 'cart-plus';
            } else if (route.name === 'Other') {
              iconName = focused ? 'menu' : 'menu';
            }
            return <Material name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#f2ae30',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { height: 60, justifyContent: 'space-between' },
          tabBarLabelStyle: { fontSize: 15, marginBottom: 5 },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Trang chủ' }} />
        <Tab.Screen name="Order" component={OrderScreen} options={{ tabBarLabel: 'Đặt Hàng' }} />
        <Tab.Screen name="Shop" component={ShopScreen} options={{ tabBarLabel: 'Cửa hàng' }} />
        <Tab.Screen name="Detail" component={DetailScreen} options={{ tabBarLabel: 'Giỏ hàng' }} />
        <Tab.Screen name="Other" component={OtherScreen} options={{ tabBarLabel: 'Khác' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
