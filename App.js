
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Frontend/src/Component/Dropdown';
import TopTab from './Frontend/src/Layout/TopTab';
import ChooseFood from './Frontend/src/Screen/ChooseFood';
import CollabMain from './Frontend/src/Screen/CollabMain';
import CollabProduct from './Frontend/src/Screen/CollabProduct';
import CreateSale from './Frontend/src/Screen/CreateSale';
import FlashSaleShow from './Frontend/src/Screen/FlashSaleShow';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
// 

import Home from './Frontend/src/Screen/Home';
import Home_Items from './Frontend/src/Screen/Home_Items';
import Sale from './Frontend/src/Screen/Sale';
import Sale_Items from './Frontend/src/Screen/Sale_Items';
import Invoice from './Frontend/src/Screen/Invoice';
import InvoiceAccept from './Frontend/src/Screen/InvoiceAccept';
import InvoiceComplete from './Frontend/src/Screen/InvoiceComplete';
import Cart from './Frontend/src/Screen/Cart';
import Test from './Frontend/test';
import Address from './Frontend/src/Screen/Address';
import Pay from './Frontend/src/Screen/Pay';
import Profile from './Frontend/src/Screen/Profile';
import Personal from './Frontend/src/Screen/Personal';
import BottomTabUser from './Frontend/src/Layout/BottomTabUser';
import DrawerTab from './Frontend/src/Layout/DrawerTab';
import Post from './Frontend/src/Component/Post';
import Product from './Frontend/src/Screen/Product';
import MyStore from './Frontend/src/Screen/MyStore';
import Login from './Frontend/src/Screen/Login';
import Register from './Frontend/src/Screen/Register';
import AuthNav from './Frontend/src/Layout/AuthNav';
import AuthContext from './Frontend/src/context/AuthContext';
import FoodPending from './Frontend/src/Screen/FoodPending';
import FoodStatus from './Frontend/src/Component/FoodStatus';
import Bills from './Frontend/src/Screen/Bills';


export default function App() {
  return (
    // <CollabProduct/>
    // <FlashSaleShow/>
    // <CreateSale />
    // <ChooseFood/>
    // <NavigatorContainer>
    <AuthContext>
      {/* <CollabProduct /> */}
      {/* {/* <NavigationContainer>
        <AuthNav />
      </NavigationContainer> */} 
      <NavigationContainer>
        {/* <AuthNav/> */}
        {/* <TopTab/> */}
        {/* <FoodPending/> */}
        {/* <FoodStatus/> */}
        {/* <TopTab/> */}
        {/* <CreateSale/> */}
        {/* <Address/> */}
      {/* <Register /> */}
      <Home/>
      {/* <Cart/> */}
      {/* <Address/> */}
      {/* <MyStore/> */}
      {/* <Pay/> */}
      {/* <Bills/> */}
      {/* <Test/> */}
      {/* <Sale/> */}
      {/* <Sale_Items/> */}
      {/* <Personal/> */}
      {/* <Profile/> */}
      {/* <Product/> */}
       {/* <Home_Items/> */}
      </NavigationContainer>
    </AuthContext>

    // <InvoiceComplete/>
    // <MyStore/>
    // <Login/>

    // <View style={styles.container}>
    // <CollabProduct/>


    // <Sale/>
    // <Home_Items/>
    // <Sale_Items/>
    // <Test/>
    // <Home/>
    // <Pay/>
    // <Profile/>
    // <Personal/>
    // <MyStore/>
    // <Post/>
    // <Product/>
    // <Cart />
    // <Address/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
