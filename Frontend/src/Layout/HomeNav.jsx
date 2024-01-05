import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Product from '../Screen/Product'
import Home from '../Screen/Home'
import BottomTabUser from './BottomTabUser'
import DrawerTab from './DrawerTab'
import Pay from '../Screen/Pay'
const stack = createStackNavigator()
const HomeNav = () => {
  return (
    <stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
    }}>
        <stack.Screen name='Home' component={DrawerTab}/>
        <stack.Screen name='HomeDetails' component={Product}/>
        <stack.Screen name='Pay' component={Pay}/>
    </stack.Navigator>
  )
}

export default HomeNav