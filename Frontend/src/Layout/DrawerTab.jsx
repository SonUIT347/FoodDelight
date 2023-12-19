import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabUser from './BottomTabUser'
import BottomTabCollab from './BottomTabCollab'
const Drawer = createDrawerNavigator()
const DrawerTab = () => {
  return (
    <Drawer.Navigator initialRouteName='Collaborator' screenOptions={{
        headerShown: false
    }}>
        <Drawer.Screen name='User' component={BottomTabUser}/>
        <Drawer.Screen name='Collaborator' component={BottomTabCollab} />
    </Drawer.Navigator>
  )
}

export default DrawerTab