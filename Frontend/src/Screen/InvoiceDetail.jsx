import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo, AntDesign } from '@expo/vector-icons';
import InvoiceComponent from '../Component/InvoiceComponent';
const Invoice =
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
        {
            id: 3,
            foodName: 'Cơm chiên cá mặn',
            stock: 10,
            img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
            price: 100000
        },
        {
            id: 3,
            foodName: 'Cơm chiên cá mặn',
            stock: 10,
            img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
            price: 100000
        },
        {
            id: 3,
            foodName: 'Cơm chiên cá mặn',
            stock: 10,
            img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
            price: 100000
        },
        {
            id: 3,
            foodName: 'Cơm chiên cá mặn',
            stock: 10,
            img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
            price: 100000
        },
        {
            id: 3,
            foodName: 'Cơm chiên cá mặn',
            stock: 10,
            img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
            price: 100000
        },
        {
            id: 3,
            foodName: 'Cơm chiên cá mặn',
            stock: 10,
            img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
            price: 100000
        },
    ],
    sumPrice: 0,
}

const InvoiceDetail = () => {
    return (
        <View style={styles.container}>
            
                <View style={styles.status}>
                    <FontAwesome name="motorcycle" size={24} color="red" />
                    <Text style={{ marginLeft: 10, color: 'red', fontSize: 25, fontWeight: 'bold' }}>Chua Van Chuyen</Text>
                </View>
                <View style={styles.info}>
                    <Entypo name="location-pin" size={24} color="#4ECB71" />
                    <Text style={{ marginLeft: 18, fontSize: 25 }}>Thong tin lien he</Text>
                </View>
                <Text style={{ marginLeft: 18, fontSize: 20 }}>Dia chi: 1459/13, tan phuoc, tan binh, di an, binh duong</Text>
                <Text style={{ marginLeft: 18, fontSize: 20 }}>So dien thoai: 0355729961</Text>
                <View style={styles.info}>
                    <AntDesign name="user" size={24} color="#4ECB71" />
                    <Text style={{ marginLeft: 18, fontSize: 20 }}>Nguoi dung dep trai</Text>
                </View>
                <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {Invoice.data.map((data) => (
                        <InvoiceComponent
                            key={data.id}
                            food={data}
                        />
                    ))}
                </View>

            </ScrollView>

            <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.invoiceText}>Mặt hàng: {Invoice.data.length}</Text>
                <Text style={styles.invoiceText}>Tổng hóa đơn: {Invoice.sumPrice} VND</Text>
            </View>
            <View style={styles.touch}>
                <TouchableOpacity style={{ width: 100, height: 30, backgroundColor: '#45BC1B', justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 5 }}>
                    <Text style={{ color: 'white' }}>Nhận đơn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 100, height: 30, backgroundColor: '#F80C0C', justifyContent: 'center', alignItems: 'center', borderRadius: 5, margin: 5 }}>
                    <Text style={{ color: 'white' }}>Hủy đơn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // justifyContent:'center',
        // alignItems:'center'
    },
    status: {
        flexDirection: 'row',
        height: 50
    }, info: {
        flexDirection: 'row',
    },
    invoiceText: {
        fontSize: 20
    },
    touch:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default InvoiceDetail