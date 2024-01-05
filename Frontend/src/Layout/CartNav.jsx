import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cart from '../Screen/Cart.js'
import Pay from '../Screen/Pay.js'
import Address from '../Screen/Address.js'

const Stack = createStackNavigator()
const CartNav = () => {
  return (
    <Stack.Navigator initialRouteName='StackPayCart' screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Pay' component={Pay}/>
        <Stack.Screen name='Address' component={Address}/>
        {/* <Stack.Screen name='ChooseFood' component={ChooseFood}/> */}
    </Stack.Navigator>
  )
}

export default CartNav