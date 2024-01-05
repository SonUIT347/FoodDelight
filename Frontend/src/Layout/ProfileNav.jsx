import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../Screen/Profile'
import Address from '../Screen/Address'
import MyStore from '../Screen/MyStore'
import CartNav from './CartNav'
import Bills from '../Screen/Bills'
const stack = createStackNavigator()
const ProfileNav = () => {
  return (
    <stack.Navigator initialRouteName='Profile' screenOptions={{
        headerShown:true
    }}>
        <stack.Screen name='Profile' component={Profile}/>
        <stack.Screen name='Address' component={Address}/>
        <stack.Screen name='Store' component={MyStore}/>
        <stack.Screen name='Cart' component={CartNav}/>
        <stack.Screen name='Bill' component={Bills}/>
    </stack.Navigator>
  )
}

export default ProfileNav