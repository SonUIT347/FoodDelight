import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screen/Home'
import Sale from '../Screen/Sale'
import Profile from '../Screen/Profile'
import Personal from '../Screen/Personal'
import Cart from '../Screen/Cart'
import CartNav from './CartNav'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import HomeNav from './HomeNav'
import ProfileNav from './ProfileNav'
import CateTopTab from './CateTopTab'
const Tab = createBottomTabNavigator()
const BottomTabUser = () => {
  return (
    // <Tab.Navigator initialRouteName='Home' screenOptions={{
    //     headerShown:false
    // }}>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Sale" component={Sale} />
    //   <Tab.Screen name='CartNav' component={CartNav} initialParams={{ screen: 'Cart' }}/>
    //   <Tab.Screen name='Profile' component={Profile} />

    // </Tab.Navigator>
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: true
    }}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarLabel: 'Home',
          headerLeft: ({ color, size, focused }) => {
            return (
              <View style={{ paddingLeft: 10 }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <EvilIcons
                    name="navicon"
                    size={28}
                    color="black"
                  />
                  {/* 20521850 */}
                </TouchableOpacity>
              </View>
            )
          },
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="home"
                size={24}
                color={focused ? 'blue' : 'black'} />
            )
          },
          //  20521850
        }}
      />
      <Tab.Screen name='Categories' component={CateTopTab}
        initialParams={{ screen: 'Cart' }}
        options={{
          tabBarLabel: 'Categories',
          headerShown: true,
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="category"
                size={24}
                color={focused ? 'blue' : 'black'}
              />

            )
          },
          // 20521850
        }}
      />
      <Tab.Screen name='Favourites' component={CartNav} initialParams={{ screen: 'Cart' }}
        options={{
          tabBarLabel: 'Cart',
          headerShown: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="shopping-cart"
                size={24}
                color={focused ? 'blue' : 'black'}
              />
            )
          },
          // 20521850
        }}
      />
      <Tab.Screen name='Profile' component={ProfileNav} initialParams={{ screen: 'Profile' }}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="user"
                size={24}
                color={focused ? 'blue' : 'black'} />
            )
          },
          // 20521850
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabUser