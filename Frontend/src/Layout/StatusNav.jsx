import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import FoodAccept from '../Screen/FoodAccept'
import FoodDeny from '../Screen/FoodDeny'
import FoodPending from '../Screen/FoodPending'
const stack = createStackNavigator()
const StatusNav = () => {
  return (
    <stack.Navigator initialRouteName='Accept' screenOptions={{
        headerShown:false
    }}>
        <stack.Screen name='Accept' component={FoodAccept}/>
        <stack.Screen name='Deny' component={FoodDeny}/>
        <stack.Screen name='Pending' component={FoodPending}/>
    </stack.Navigator>
  )
}

export default StatusNav