import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import DrawerTab from './DrawerTab'
const Stack = createStackNavigator()
const AuthNav = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Drawer' component={DrawerTab} />
    </Stack.Navigator>
  )
}

export default AuthNav