import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateSale from '../Screen/CreateSale'
import ChooseFood from '../Screen/ChooseFood'
import ChooseNav from './ChooseNav'
import FlashSaleShow from '../Screen/FlashSaleShow'
const Stack = createStackNavigator()
const SaleNav = () => {
  return (
    <Stack.Navigator initialRouteName='CreateSale' screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='FlashSaleShow' component={FlashSaleShow}/>
        <Stack.Screen name='CreateSale' component={CreateSale}/>
        <Stack.Screen name='ChooseFood' component={ChooseFood}/>
    </Stack.Navigator>
  )
}

export default SaleNav