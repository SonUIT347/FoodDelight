import { View, Text } from 'react-native'
import React from 'react'
import CollabMain from '../Screen/CollabMain'
import Profile from '../Screen/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductTab from './ProductTab'
const Tab = createBottomTabNavigator()
const BottomTabCollab = () => {
  return (
    <Tab.Navigator initialRouteName='CollabMain' screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='CollabMain' component={CollabMain}/>
        <Tab.Screen name='Profile' component={Profile}/>
        <Tab.Screen name='ProductTab' component={ProductTab} />
    </Tab.Navigator>
  )
}

export default BottomTabCollab