import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Invoice from '../Screen/Invoice'
import InvoiceComplete from '../Screen/InvoiceComplete'
import InvoiceDetail from '../Screen/InvoiceDetail'
const Stack = createStackNavigator()
const InvoiceNav = () => {
  return (
    <Stack.Navigator initialRouteName='Invoice' screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Invoice' component={Invoice}/>
        <Stack.Screen name='InvoiceComplete' component={InvoiceComplete}/>
        <Stack.Screen name='InvoiceDetail' component={InvoiceDetail} />
    </Stack.Navigator>
  )
}

export default InvoiceNav