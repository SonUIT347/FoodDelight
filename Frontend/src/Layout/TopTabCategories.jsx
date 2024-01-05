import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home_Items from '../Screen/Home_Items'
// import FoodAccept from '../Screen/FoodAccept'
// import FoodDeny from '../Screen/FoodDeny'
const Tab = createMaterialTopTabNavigator()
const TopTabCategories = ({naviagtion}) => {
  return (
    <Tab.Navigator initialRouteName='Đang chờ duyệt' >
        <Tab.Screen name='Món chính' component={Home_Items}/>
        <Tab.Screen name='Món tráng miệng' component={Home_Items}/>
        <Tab.Screen name='Món ăn vặt' component={Home_Items}/>
    </Tab.Navigator>
  )
}

export default TopTabCategories