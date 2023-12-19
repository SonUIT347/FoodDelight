import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import React, { useState } from 'react'
import InvoiceComponent from '../Component/InvoiceComponent'
import { FontAwesome5 } from '@expo/vector-icons';
const Invoice = ({navigation}) => {

    var sumInvoice = 0
    const Invoice = [
        {
            InvoiceId: 1,
            data: [
                {
                    id: 1,
                    foodName: 'Cơm chiên cá mặn 11',
                    stock: 15,
                    img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
                    price: 1589666
                },
                {
                    id: 2,
                    foodName: 'Cơm chiên cá mặn3',
                    stock: 30,
                    img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
                    price: 1444558
                },
                {
                    id: 3,
                    foodName: 'Cơm chiên cá mặn',
                    stock: 10,
                    img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
                    price: 100000
                },
            ],
            sumPrice:0,
        },
        {
            InvoiceId: 2,
            data: [
                {
                    id: 1,
                    foodName: 'Cơm chiên cá mặn 11',
                    stock: 15,
                    img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
                    price: 1589666
                },
                {
                    id: 2,
                    foodName: 'Cơm chiên cá mặn3',
                    stock: 30,
                    img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
                    price: 1444558
                },
            ],
            sumPrice:0,
        },

    ]
    const [food, setFood] = useState(Invoice)
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <ScrollView style={{ width: '100%', height: 800 }}
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {food.map((Invoice) => (  
                    
                    <View key={Invoice.InvoiceId}>
                        <View style={styles.invoiceId}>
                            <FontAwesome5 name="file-invoice" size={20} color="#45BC1B" />
                            <Text style={{ fontSize: 20, marginLeft: 10 }}>{Invoice.InvoiceId}</Text>
                        </View>
                        {Invoice.data.map((data) => (
                            <InvoiceComponent
                                key={data.id} 
                                food={data}
                            />
                        ))}
                            <Text style={styles.invoiceText}>Hình thức thanh toán COD</Text>
                            <Text style={styles.invoiceText}>Mặt hàng: {Invoice.data.length}</Text>
                            <Text style={styles.invoiceText}>Tổng hóa đơn: {Invoice.sumPrice} VND</Text>
                            <View style={styles.touch}>
                                <TouchableOpacity style={{width:100, height: 30, backgroundColor:'#45BC1B', justifyContent:'center', alignItems:'center', borderRadius:5,margin:5}} onPress={() => navigation.navigate('InvoiceDetail')}>
                                    <Text style={{color:'white'}}>Nhận đơn</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:100, height: 30, backgroundColor:'#F80C0C', justifyContent:'center', alignItems:'center', borderRadius:5,margin:5}}>
                                    <Text style={{color:'white'}}>Hủy đơn</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    invoiceId: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        height: 30,
        alignItems: 'center'
    },
    invoiceText:{
        fontSize:20
    },
    touch:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})
export default Invoice