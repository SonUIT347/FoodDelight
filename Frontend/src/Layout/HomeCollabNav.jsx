import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CollabMain from '../Screen/CollabMain'
import StatusNav from './StatusNav'
import TopTab from './TopTab'
import CollabProduct from '../Screen/CollabProduct'
import CreateSale from '../Screen/CreateSale'
import SaleNav from './SaleNav'
const Stack = createStackNavigator()
const HomeCollabNav = () => {
  return (
    <Stack.Navigator initialRouteName='CollabMain' screenOptions={{
        headerShown:true
    }}>
        <Stack.Screen name='CollabMain' options={{
            headerShown:false
        }} component={CollabMain} />
        <Stack.Screen name='StatusNav' options={{ title:'Mon an'}} component={TopTab}/>
        <Stack.Screen name='AddFood' component={CollabProduct} />
        {/* <Stack.Screen name='CreateSale' component={SaleNav} /> */}
    </Stack.Navigator>
  )
}

export default HomeCollabNav