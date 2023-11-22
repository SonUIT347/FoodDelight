import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const  No_Products=()=>{
    return(
        <View style={styles.container}>
            <MaterialIcons name="remove-shopping-cart" size={50} color="gray" />
            <Text style={{fontSize: 18, textAlign: 'center', paddingTop: 10, color: 'gray'}}>Hiện chưa có sản phẩm nào!</Text>
        </View>
    )

}

export default No_Products

const styles=StyleSheet.create({
    container:{
        // flex: 1,
        width: '100%',
        // marginTop: Platform.OS === 'android' ? 30 : 0,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
});