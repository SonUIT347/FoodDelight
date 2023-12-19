import { View, Text } from 'react-native'
import React from 'react'
import CollabMain from '../Screen/CollabMain'
import Profile from '../Screen/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductTab from './ProductTab'
import TopTab from './TopTab'
import HomeCollabNav from './HomeCollabNav'
import Invoice from '../Screen/Invoice'
import InvoiceNav from './InvoiceNav'
const Tab = createBottomTabNavigator()
const BottomTabCollab = () => {
  return (
    <Tab.Navigator initialRouteName='CollabMain' screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='CollabMain' component={HomeCollabNav}/>
        <Tab.Screen name='Profile' component={Profile}/>
        <Tab.Screen name='Invoice' component={InvoiceNav} />
    </Tab.Navigator>
  )
}

export default BottomTabCollab