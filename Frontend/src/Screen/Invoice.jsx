import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import InvoiceComponent from '../Component/InvoiceComponent'
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import useAuth from '../context/useAuth';
import No_Products from '../Component/No_Products';

const Invoice = ({ navigation }) => {
    const { ip } = useAuth();
    const [invoiceData, setInvoiceData] = useState([]);
    const [invoiceId, setInvoiceId] = useState([]);
    const [tongtien, setTongTien] = useState([])
    const macb = 'MC0001';

    const getHoaDonID = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/invoice/${macb}`);
            const invoices = response.data;
            // Extract invoice IDs
            const invoiceIds = invoices.map(invoice => invoice.MaHD);
            const invoiceSum = invoices.map(invoice => invoice.TongTien);
            setInvoiceId(invoiceIds);
            setTongTien(invoiceSum)
            console.log(invoiceId)
            const invoiceDetailsPromises = invoices.map(async (invoice) => {
                const response = await axios.get(`http://${ip}:8080/invoiceid/${invoice.MaHD}`);
                return response.data;
            });

            const invoiceDetails = await Promise.all(invoiceDetailsPromises);

            setInvoiceData(invoiceDetails);
        } catch (error) {
            console.error('Error fetching invoice details:', error);
        }
    };

    useEffect(() => {
        getHoaDonID();
    }, []);

    const handleAccept = async (hoadon_id) => {
        try {
            await axios.put(`http://${ip}:8080/update/invoiceaccept/${hoadon_id}`);
            // Now you can directly use hoadon_id without relying on invoiceId
            getHoaDonID();
        } catch (error) {
            console.error('Error accepting invoice:', error);
        }
    };
    const handleDeny = async (hoadon_id) => {
        try {
            await axios.put(`http://${ip}:8080/update/invoicedeny/${hoadon_id}`);
            // Now you can directly use hoadon_id without relying on invoiceId
            getHoaDonID();
        } catch (error) {
            console.error('Error accepting invoice:', error);
        }
    };

    return (
        <React.Fragment>
            {invoiceData.length > 0 ? (
                <SafeAreaView style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {invoiceData.map((invoice, index) => (
                            <View key={invoice[0].MaHD}>
                                <View style={styles.invoiceId}>
                                    <FontAwesome5 name="file-invoice" size={20} color="#45BC1B" />
                                    <Text style={{ fontSize: 20, marginLeft: 10 }}>{invoiceId[index]}</Text>
                                </View>
                                {invoice.map((data) => (
                                    <InvoiceComponent key={data.mama} food={data} />
                                ))}
                                <Text style={styles.invoiceText}>Hình thức thanh toán COD</Text>
                                <Text style={styles.invoiceText}>Mặt hàng: {invoice.length}</Text>
                                {/* Assuming 'TongTien' is a property of each invoice object */}
                                <Text style={styles.invoiceText}>Tổng hóa đơn: {invoice[0].TongTien} VND</Text>
                                <View style={styles.touch}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => handleAccept(invoiceId[index])}>
                                        <Text style={styles.buttonText}>Nhận đơn</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.button, styles.cancelButton]}
                                        onPress={() => handleDeny(invoiceId[index])}
                                    >
                                        <Text style={styles.buttonText}>Hủy đơn</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            ) : (
                <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                    <No_Products />
                </View>

            )}
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto'
    },
    scrollViewContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    invoiceId: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        height: 30,
        alignItems: 'center',
    },
    invoiceText: {
        fontSize: 20,
    },
    touch: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#45BC1B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#F80C0C',
    },
});

export default Invoice;
