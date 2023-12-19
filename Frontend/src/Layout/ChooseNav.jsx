import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChooseFood from '../Screen/ChooseFood'
const Stack = createStackNavigator()
const ChooseNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ChooseFood' component={ChooseFood}/>
    </Stack.Navigator>
  )
}

export default ChooseNav