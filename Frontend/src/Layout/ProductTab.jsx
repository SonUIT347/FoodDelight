import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTab from './TopTab'
import CollabMain from '../Screen/CollabMain'
const Stack = createStackNavigator()
const ProductTab = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='TopTab' component={TopTab}/>
        <Stack.Screen name='Main' component={CollabMain}/>
    </Stack.Navigator>
  )
}

export default ProductTab