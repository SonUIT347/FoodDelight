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
