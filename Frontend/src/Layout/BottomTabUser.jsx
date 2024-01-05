import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screen/Home'
import Sale from '../Screen/Sale'
import Profile from '../Screen/Profile'
import Personal from '../Screen/Personal'
import Cart from '../Screen/Cart'
import CartNav from './CartNav'
const Tab = createBottomTabNavigator()
const BottomTabUser = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown:false
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Sale" component={Sale} />
          <Tab.Screen name='CartNav' component={CartNav} initialParams={{ screen: 'Cart' }}/>
          <Tab.Screen name='Profile' component={Profile} />

        </Tab.Navigator>
      );
}

export default BottomTabUser