import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabUser from './BottomTabUser'
import BottomTabCollab from './BottomTabCollab'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AdminTopTab from './AdminTopTab';
import HomeNav from './HomeNav';
const Drawer = createDrawerNavigator()
const DrawerTab = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    getRole();
  }, []);

  const getRole = async () => {
    try {
      const userRole = await AsyncStorage.getItem('role');
      setRole(userRole);
    } catch (error) {
      console.error('Error getting role from AsyncStorage:', error);
    }
  };
  return (
    <Drawer.Navigator initialRouteName='User' screenOptions={{
      headerShown: false
    }}>

      <Drawer.Screen name='User' component={HomeNav} />
      {role === '1' ? (<Drawer.Screen name='Collaborator' component={BottomTabCollab} />) : (null)}
      {role === '2' ? (<Drawer.Screen name='Admin' component={AdminTopTab} />) : (null)}

    </Drawer.Navigator>
  )
}

export default DrawerTab