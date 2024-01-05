import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Cart from '../Screen/Cart.js'
import Pay from '../Screen/Pay.js'
import Address from '../Screen/Address.js'

const Stack = createStackNavigator()
const CartNav = ({route, navigation}) => {

  // const { name } = route;

  // useEffect(() => {
  //   // Thực hiện các hành động cần thiết dựa trên tên màn hình mới
  //   if (name === 'Pay') {
  //     // Thực hiện hành động khi chuyển đến trang 'Pay'
  //     console.log('Chuyển đến trang Pay');
  //     // Gọi các hàm hoặc thực hiện các tác vụ cần thiết ở đây
  //   }
  // }, [name]);
  return (
    <Stack.Navigator initialRouteName='StackPayCart' screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Pay' component={Pay}/>
        <Stack.Screen name='Address' component={Address}/>
        {/* <Stack.Screen name='ChooseFood' component={ChooseFood}/> */}
    </Stack.Navigator>
  )
}

export default CartNav