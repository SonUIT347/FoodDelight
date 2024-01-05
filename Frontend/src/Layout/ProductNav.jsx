import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Product from '../Screen/Product'
import Pay from '../Screen/Pay'
const stack = createStackNavigator()
const ProductNav = () => {
  return (
    <stack.Navigator initialRouteName='Product' screenOptions={{headerShown:true}}>
        <stack.Screen name='Product' component={Product}/>
        <stack.Screen name='Pay' component={Pay}/>
    </stack.Navigator>
  )
}

export default ProductNav