import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FoodPending from '../Screen/FoodPending'
import FoodAccept from '../Screen/FoodAccept'
import FoodDeny from '../Screen/FoodDeny'
const Tab = createMaterialTopTabNavigator()
const TopTab = ({naviagtion}) => {
  return (
    <Tab.Navigator initialRouteName='Đang chờ duyệt' >
        <Tab.Screen name='Đang chờ duyệt' component={FoodPending}/>
        <Tab.Screen name='Thành công' component={FoodAccept}/>
        <Tab.Screen name='Thất bại' component={FoodDeny}/>
    </Tab.Navigator>
  )
}

export default TopTab

