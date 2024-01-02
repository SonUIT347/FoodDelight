
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
import ImageStack from './Frontend/test';


export const Data = [
  {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà xối mỡ a a a a a a a a a a a a a a a a a',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 10000,
    sold: 210
    // id: 1,
  }, {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà xối mỡ',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 10000,
    sold: 210
    // id: 1,
  }, {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 18000,
    sold: 210
    // id: 1,
  }, {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 18000,
    sold: 210
    // id: 1,
  }, {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 18000,
    sold: 210
    // id: 1,
  }, {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 18000,
    sold: 210
    // id: 1,
  }, {
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 18000,
    sold: 210
    // id: 1,
  },
]

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
      {/* <Register /> */}
      {/* <Home/> */}
      {/* <Cart/ x> */}
      {/* <Address/> x*/}
      {/* <MyStore/> */}
      {/* <Pay/> x*/}
      {/* <Sale/> x*/}
      {/* <Sale_Items/> */}
      {/* <Personal/> */}
      {/* <Profile/> */}
      <Product/>
      {/* <ImageStack/> */}
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
