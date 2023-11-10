import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather, Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

const CollabMain = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5
                    name="store"
                    size={24} c
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

            <View style={styles.dailyoverview}>
                <View style={styles.dailyoverview_title}>
                    <Feather
                        name="box"
                        size={24}
                        color="#4ECB71"
                    />
                    <Text style={styles.dailyoverview_text}>Sản phẩm</Text>
                </View>
                <View style={styles.dailyoverview_element}>
                    <View >
                        <TouchableOpacity style={styles.income}>
                            <Text>58</Text>
                            <Text>Doanh thu</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.income}>
                            <Text>58</Text>
                            <Text>Doanh thu</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.income}>
                            <Text>58</Text>
                            <Text>Doanh thu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.addProduct}>
                <EvilIcons
                    name="plus"
                    size={28}
                    color="#699BF7"
                    style={{ alignItems: 'center' }}
                />
                <Text style={{ fontSize: 20 }}>Thêm sản phẩm</Text>
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
        fontSize: 20,
        margin: 10
    },
    dailyoverview: {
        flexDirection: 'column',
        // justifyContent:'center',
        // alignItems:'center',
        width: '100%',
        height: 100
    },
    dailyoverview_title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    dailyoverview_text: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    dailyoverview_element: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    income: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    addProduct: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 30
    }
})
export default CollabMain