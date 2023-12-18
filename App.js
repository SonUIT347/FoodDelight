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


const data=[
  {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà xối mỡ a a a a a a a a a a a a a a a a a',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 10000,
  // id: 1,
},    {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà xối mỡ',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 10000,
  // id: 1,
},    {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 18000,
  // id: 1,
}, {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 18000,
  // id: 1,
}, {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 18000,
  // id: 1,
}, {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 18000,
  // id: 1,
}, {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 18000,
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
    // <NavigationContainer>
    // <TopTab/>
    // </NavigationContainer>
    // <InvoiceComplete/>

    // <View style={styles.container}>


    // <Sale data_Desserts={data} data_MainDishes={data}/>
    // <Sale_Items dataItem={data}/>
    // <Test/>
    <Home/>
    // <Cart Data={data}/>
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
