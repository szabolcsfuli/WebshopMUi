import React, { useContext } from 'react'
import HomeScreen from './HomeScreen'
import Products from './product/Products'
import Cart from './cart/Cart'
import Icon from 'react-native-vector-icons/Ionicons'
import { CART_COLOR } from './../styles'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartContext from '../store/CartContext'

const Tab = createBottomTabNavigator()

export default () => {
  const ctx = useContext(CartContext)
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Products') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline'
            }
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: CART_COLOR,
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Products' component={Products} />
        <Tab.Screen
          options={{
            title: ctx.totalItems ? `Cart(${ctx.totalItems})` : `Cart`
          }}
          name='Cart'
          component={Cart}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
