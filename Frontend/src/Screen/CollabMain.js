import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather, Foundation, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Line from '../Component/Line';

const CollabMain = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5
                    name="store"
                    size={24}
                    color="#4ECB71"
                />
                <Text style={styles.header_text}>Shop com ga</Text>
            </View>
            <TouchableWithoutFeedback style={{ width: '100%' }}>
                <View style={styles.dailyoverview}>
                    <View style={styles.dailyoverview_title}>
                        <EvilIcons
                            name="chart"
                            size={28}
                            color="#4ECB71"
                        />
                        <Text style={styles.dailyoverview_text}>Tong quan ngay</Text>
                    </View>
                    <View style={styles.dailyoverview_element}>
                        <View style={styles.income}>
                            <Text>58</Text>
                            <Text>Doanh thu</Text>
                        </View>
                        <View style={styles.income}>
                            <Text>58</Text>
                            <Text>Doanh thu</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.product}>
                <View style={styles.product_title}>
                    <Feather
                        name="box"
                        size={24}
                        color="#4ECB71"
                    />
                    <Text style={styles.product_text}>Sản phẩm</Text>
                </View>
                <View style={styles.product_element}>
                    <View >
                        <TouchableOpacity style={styles.income} onPress={() => navigation.navigate('StatusNav')}>
                            <Text>58</Text>
                            <Text style={{ fontSize: 12 }}>Đang hoạt động</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.income}>
                            <Text>58</Text>
                            <Text style={{ fontSize: 12 }}>Đang chờ duyệt</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.income}>
                            <Text>58</Text>
                            <Text style={{ fontSize: 12 }}>Từ chối</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.addProduct} onPress={() => navigation.navigate('AddFood')}>
                <Line />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <EvilIcons
                        name="plus"
                        size={28}
                        color="#699BF7"
                        style={{ alignItems: 'center' }}
                    />
                    <Text style={{ fontSize: 20 }}>Thêm sản phẩm</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.createsale} onPress={() => navigation.navigate('CreateSale')}>
                <Foundation
                    name="burst-sale"
                    size={24}
                    color="red"
                />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>Tạo khuyến mãi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createsale}>
                <AntDesign
                    name="totop"
                    size={24}
                    color="#4ECB71"
                />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>Sản phẩm bán chạy</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%",
        height: 30,
    },
    header_text: {
        fontWeight: 'bold',
        width: "auto",
        height: 30,
        fontSize: 20,
        margin: 10
    },
    dailyoverview: {
        flexDirection: 'column',
        // justifyContent:'center',
        // alignItems:'center',
        width: '100%',
        height: 100,
    },
    product: {
        flexDirection: 'column',
        // justifyContent:'center',
        // alignItems:'center',
        width: '100%',
        height: 100,
    },
    dailyoverview_title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    product_title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    dailyoverview_text: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 20,
    },
    product_text: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 20,
    },
    dailyoverview_element: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#daeddf',
        margin: 10,
        borderRadius: 10,
        height: 80
    },
    product_element: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#daeddf',
        margin: 10,
        borderRadius: 10,
        height: 80
    },
    income: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    addProduct: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 30,
        marginTop: 40,

    },
    createsale: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10
    }
})
export default CollabMain