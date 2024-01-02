import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, StyleSheet, TextInput, ScrollView, Image, Alert, Platform, Modal } from 'react-native'
import React, { useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react'
import Line from '../Component/Line';
import PercentInput from '../Component/PercentInput';
import SaleInput from '../Component/SaleInput';
import MoneyInput from '../Component/MoneyInput';
import { MaterialIcons } from '@expo/vector-icons';
import SaleSetUp from '../Component/SaleSetUp';
import ChooseFood from './ChooseFood';
import Food from '../Component/Food';
import useAuth from '../context/useAuth';
import axios from 'axios';
export const data = [
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
        id: 4,
        foodName: 'Cơm chiên cá mặn7',
        stock: 10,
        img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
        price: 200000
    },
    {
        id: 5,
        foodName: 'Cơm chiên cá mặn10',
        stock: 10,
        img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
        price: 3000000
    },
    {
        id: 6,
        foodName: 'Cơm chiên cá mặn',
        stock: 10,
        img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
        price: 3000000
    }, {
        id: 7,
        foodName: 'Cơm chiên cá mặn',
        stock: 10,
        img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
        price: 3000000
    }, {
        id: 8,
        foodName: 'Cơm chiên cá mặn',
        stock: 10,
        img: 'https://i.ebayimg.com/images/g/WGMAAOSwtnRgtOux/s-l1600.jpg',
        price: 3000000
    }
]
const CreateSale = ({ navigation }) => {
    const [food, setFood] = useState([])
    // const [isDisplay, setIsDisplay] = useState(false)
    const [isChoose, setIsChoose] = useState('percent')
    const [saleName, setSaleName] = useState('')
    const [percent, setPercent] = useState(0)
    const [money, setMoney] = useState(0)
    const [date, setDate] = useState(new Date())
    const [timeStart, setTimeStart] = useState(new Date());
    const [timeEnd, setTimeEnd] = useState(new Date());
    const [showPickerDate, setShowPickerDate] = useState(false);
    const [showPickerStart, setShowPickerStart] = useState(false);
    const [showPickerEnd, setShowPickerEnd] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false)
    const [chooseData, setChooseData] = useState([])
    const [dataModal, setDataModal] = useState([])
    const {
        ip
    } = useAuth()
    const macb = 'MC0001'
    const getDataModal = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/foodapprove/${macb}`);
            // console.log('Data from API:', response.data);
            setDataModal(response.data);
        } catch (error) {
            console.error("Error fetching food pending:", error);
        }
    }
    useEffect(() => {
        getDataModal()
    }, [])
    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPickerDate(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate || timeStart;
        setShowPickerStart(Platform.OS === 'ios');
        setTimeStart(currentDate);
    };
    const handleChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || timeStart;
        setShowPickerEnd(Platform.OS === 'ios');
        setTimeEnd(currentDate);
    };

    const showDatePickerDate = () => {
        setShowPickerDate(true);
    };

    const showTimePickerStart = () => {
        setShowPickerStart(true);
    };
    const showTimePickerEnd = () => {
        setShowPickerEnd(true);
    };
    const choose = (active) => {
        setIsChoose(active)
        console.log(isChoose)
    }
    const checkPrice = () => {
        const array = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].price < money) {
                array.push(data[i].foodName)
            }
        }
        if (array.length > 0) {
            Alert.alert(
                'Giá tiền giảm phải bé hơn giá tiền sản phẩm'
            )
        }
    }
    const handleSubmit = () => {
        checkPrice()
        if (timeStart.getTime() > timeEnd.getTime()) {
            Alert.alert('Thời gian bắt đầu phải trước thời gian kết thúc')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ height: 800 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tên khuyến mãi</Text>
                <TextInput
                    title={'Tên khuyến mãi'}
                    placeholder={'Tên khuyến mãi'}
                    onChangeText={(text) => setSaleName(text)}
                />
                <Line />
                <TouchableWithoutFeedback onPress={() => showDatePickerDate()}>
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ngày giảm giá</Text>
                        <Text>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Line />
                <TouchableWithoutFeedback onPress={() => showTimePickerStart()}>
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Thời gian bắt đầu</Text>
                        <Text>{timeStart.getHours()}:{timeStart.getMinutes()}:00</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Line />
                <TouchableWithoutFeedback onPress={() => showTimePickerEnd()}>
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Thời gian kết thúc</Text>
                        <Text>{timeEnd.getHours()}:{timeEnd.getMinutes()}:00</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Line />
                <TouchableWithoutFeedback onPress={() => setIsShowModal(!isShowModal)} >
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Chọn sản phẩm</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <Line />
                {showPickerDate && (
                    <DateTimePicker
                        value={date}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
                {showPickerStart && (
                    <DateTimePicker
                        value={timeStart}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleChangeStart}
                    />
                )}
                {showPickerEnd && (
                    <DateTimePicker
                        value={timeEnd}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleChangeEnd}
                    />
                )}
                {isChoose === 'percent' ? (
                    <>
                        <View style={styles.discountChose}>
                            <TouchableOpacity style={styles.discountPercent1}
                                onPress={() => choose('percent')}>
                                <Text>Giảm phần trăm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.discountPercent2}
                                onPress={() => choose('money')}>
                                <Text>Giảm giá tiền</Text>
                            </TouchableOpacity>
                        </View>
                        <PercentInput
                            percent={percent}
                            setPercent={setPercent}
                            isChoose={isChoose}
                        />
                    </>
                ) : (
                    <>
                        <View style={styles.discountChose}>
                            <TouchableOpacity style={styles.discountPercent2}
                                onPress={() => choose('percent')}>
                                <Text>Giảm phần trăm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.discountPercent1}
                                onPress={() => choose('money')}>
                                <Text>Giảm giá tiền</Text>
                            </TouchableOpacity>
                        </View>
                        <MoneyInput
                            money={money}
                            setMoney={setMoney}
                            isChoose={isChoose}
                        />
                    </>
                )}
                {/* <View style={styles.food}> */}
                <ScrollView style={{ width: '95%', height: 430 }} nestedScrollEnabled={true}>
                    {console.log(chooseData)}
                    {chooseData.map((food) => (
                        <SaleSetUp
                            Info={food}
                            percent={percent}
                            money={money}
                            isChoose={isChoose}
                        />
                    ))}
                </ScrollView>
                {/* </View> */}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={isShowModal}
                    statusBarTranslucent={true}
                >
                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
                            <ScrollView style={{ width: '100%', height: 500 }}>
                                <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                    {dataModal.map((food, index) => (
                                        <Food
                                            // key={food.mama}
                                            food={food}
                                            id={food.mama}
                                            chooseData={chooseData}
                                            setChooseData={setChooseData}
                                        />
                                    ))}
                                </View>
                            </ScrollView>
                            <TouchableOpacity style={styles.submitBtn} onPress={() => setIsShowModal(!isShowModal)}>
                                <Text style={styles.btnSubmit_text}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={styles.submitBtn} onPress={() => handleSubmit()}>
                    <Text style={styles.btnSubmit_text}>Xác nhận</Text>
                </TouchableOpacity>
            </ScrollView>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center'

    },
    sale_name: {
        flexDirection: 'column',
        // justifyContent:'flex-start'
        marginLeft: 10,
        marginRight: 10,
        width: '90%',
        height: 50
    },
    name_input: {
        width: '98%',
        height: 40,
        marginLeft: 10
    },
    discountChose: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 355,
        height: 30,
        margin: 10
    },
    discountPercent1: {
        borderWidth: 2,
        borderColor: '#45BC1B',
        width: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
    discountPercent2: {
        borderWidth: 2,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtn: {
        width: '90%',
        backgroundColor: '#45BC1B',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15
    },
    btnSubmit_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default CreateSale