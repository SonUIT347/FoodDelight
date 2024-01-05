import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AdminStore from '../Screen/AdminStore'
import AdminProduct from '../Screen/AdminProduct'
const tab = createMaterialTopTabNavigator()
const AdminTopTab = () => {
  return (
    <tab.Navigator initialRouteName='store' style={{top:50}}>
        <tab.Screen name='store' component={AdminStore}/>
        <tab.Screen name='product' component={AdminProduct} />
    </tab.Navigator>
  )
}

export default AdminTopTab