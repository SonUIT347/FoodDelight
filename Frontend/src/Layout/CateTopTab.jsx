import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Category from '../Screen/Category'
const Tab = createMaterialTopTabNavigator()
const CateTopTab = () => {
    return (
        <Tab.Navigator initialRouteName='monchinh'>
          <Tab.Screen
            name='Món Chính'
            component={Category}
            initialParams={{ category: 'monchinh' }}
          />
          <Tab.Screen
            name='Tráng miệng'
            component={Category}
            initialParams={{ category: 'trangmieng' }}
          />
          <Tab.Screen
            name='Khai vị'
            component={Category}
            initialParams={{ category: 'khaivi' }}
          />
        </Tab.Navigator>
      );
}

export default CateTopTab