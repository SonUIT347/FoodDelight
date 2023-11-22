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


const data=[
  {
  img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
  name: 'Cơm gà xối mỡ',
  description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
  price: 20000,
  quantitySold: 2100,
  sale: true,
  priceReduced: 1000,
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
}, 
]

export default function App() {
  return (
    // <CollabProduct/>
    // <FlashSaleShow/>
    // <CreateSale />
    // <ChooseFood/>
    // <NavigatorContainer>
    <NavigationContainer>
    <TopTab/>
    </NavigationContainer>

    // </NavigatorContainer>

    // <Dropdown/>
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
