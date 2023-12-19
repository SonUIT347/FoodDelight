import { View, Text, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, StyleSheet, TextInput, ScrollView, Image, Alert, Platform } from 'react-native'
import React, { useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react'
import Line from '../Component/Line';
import PercentInput from '../Component/PercentInput';
import SaleInput from '../Component/SaleInput';
import MoneyInput from '../Component/MoneyInput';
import { MaterialIcons } from '@expo/vector-icons';
import SaleSetUp from '../Component/SaleSetUp';
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
const CreateSale = ({navigation}) => {
    const [food, setFood] = useState([])
    const [isDisplay, setIsDisplay] = useState(false)
    const [isChoose, setIsChoose] = useState('percent')
    const [saleName, setSaleName] = useState('')
    const [percent, setPercent] = useState(0)
    const [money, setMoney] = useState(0)
    const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
    console.log(saleName)
    const datetime = () => {
        console.log('aaa')
        setIsDisplay(true)
        // return(
        //     <DateTimePicker value={date}/>
        // )
    }
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePickerStart, setShowTimePickerStart] = useState(false)
    const [showTimePickerEnd, setShowTimePickerEnd] = useState(false)
    const [selectedTimeEnd, setSelectedTimeEnd] = useState(new Date())
    const [selectDate, setSelectedDate] = useState(new Date());
    const [selectedTimeStart, setSelectedTimeStart] = useState(new Date());
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')

    // const timestamp = Date.parse(selectDateStart);
    // const dateObject = new Date(timestamp);
    // const isTargetTimeReached = currentTime.getTime() <= dateObject.getTime();
    // console.log(isTargetTimeReached)
    // console.log('seletec ' + dateObject.getHours())

    // const showDateTimePickerEnd = () => {
    //     setShowDatePickerEnd(true);
    // };

    const handleDateChange = (event, selectDate) => {
        const currentDate = selectDate
        console.log('Selected Date:', date);
        setSelectedDate(currentDate);
        setShowDatePicker(false);

    };
    const handleDateChangeTimeEnd = (event, selectDate) => {
        const currentDate = selectDate
        console.log('Selected Date:', date);
        setSelectedTimeEnd(currentDate);
        setShowTimePickerEnd(false);

    };
    const handleDateChangeTimeStart = (event, selectDate) => {
        const currentDate = selectDate
        console.log('Selected Date:', date);
        setSelectedTimeStart(currentDate);
        setShowTimePickerStart(false);

    };
    const showMode = (currentMode, flag) => {
        switch (flag) {
            case 'timestart': {
                setShowTimePickerStart(true)
                setMode(currentMode)
            }
            case 'timeend': {
                setShowTimePickerEnd(true)
                setMode(currentMode)
            }
            case 'date': {
                setShowDatePicker(true)
                setMode(currentMode)
            }
        }
        setShowDatePicker(true)
        setMode(currentMode)
    }

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
        if (selectedTimeStart.getTime() > selectedTimeEnd.getTime()) {
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
                <TouchableWithoutFeedback onPress={() => showMode('date', flag = 'date')}>
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ngày giảm giá</Text>
                        <Text>{selectDate.getDate()}/{selectDate.getMonth() + 1}/{selectDate.getFullYear()}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Line />
                <TouchableWithoutFeedback onPress={() => showMode('time', flag = 'timestart')}>
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Thời gian bắt đầu</Text>
                        <Text>{selectedTimeStart.getHours()}:{selectedTimeStart.getMinutes()}:00</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Line />
                <TouchableWithoutFeedback onPress={() => showMode('time', flag = 'timeend')}>
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Thời gian kết thúc</Text>
                        <Text>{selectedTimeEnd.getHours()}:{selectedTimeEnd.getMinutes()}:00</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Line />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ChooseFood', {chooseData:food, setChooseData: setFood})} >
                    <View style={styles.sale_name}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Chọn sản phẩm</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <MaterialIcons name="navigate-next" size={24} color="black" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <Line />
                {showDatePicker ? (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={selectDate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />
                ) : null}
                {showTimePickerEnd ? (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={selectedTimeEnd}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChangeTimeEnd}
                    />
                ) : null}
                {showTimePickerStart ? (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={selectedTimeStart}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChangeTimeStart}
                    />
                ) : null}
                {/* {showDatePickerEnd ? (
                <DateTimePicker
                    value={selectDateEnd}
                    mode="datetime"
                    is24Hour={true}
                    display="default"
                    onChange={handleDateChangeEnd}
                />
            ) : null} */}
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
                    {data.map((food) => (
                        <SaleSetUp
                            Info={food}
                            percent={percent}
                            money={money}
                            isChoose={isChoose}
                        />
                    ))}
                </ScrollView>
                {/* </View> */}

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