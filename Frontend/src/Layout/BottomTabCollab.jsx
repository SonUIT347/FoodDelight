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
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../Screen/Home'
const Tab = createBottomTabNavigator()
const BottomTabCollab = () => {
  return (
    <Tab.Navigator initialRouteName='CollabMain' screenOptions={{
      headerShown: false
    }}>

      {/* <Tab.Screen name='Profile' component={MyStore}/> */}
      <Tab.Screen name='CollabMain' component={CollabMain}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="home"
                size={24}
                color={focused ? 'blue' : 'black'} />
            )
          },
          //  20521850
        }}
      />
      <Tab.Screen name='Invoice' component={InvoiceNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="file-invoice"
                size={24}
                color={focused ? 'blue' : 'black'} />
            )
          },
          //  20521850
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabCollab