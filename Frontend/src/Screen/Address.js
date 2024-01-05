import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, Alert, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Home_Address from '../Component/Home_Address';
import useAuth from '../context/useAuth';
import axios from "axios";

const username = 'tranvanson'
// const maKH = 'KH0002'
const diachi = 'ktx khu B'
const tinh = 'Bình Dương'
const sdt = '0914702979'

const Address=({navigation, route}) => {
    const sum = route.params.sum;
    const [data, setData] = useState([]);
    const [isModalAddVisible, setModalAddVisible] = useState(false);
    const [isModalEditVisible, setModalEditVisible] = useState(false);
    const [province, setProvince] = useState('');
    const [indexItem, setIndexItem] = useState(null);
    const [indexClicked, setIndexClicked] = useState(0);
    const [indexProvince, setIndexProvince] = useState(null);
    const [text, setText] = useState('');
    const [numericValue, setNumericValue] = useState('');
    const [maKH, setMaKH] = useState('');
    const [idAddress, setIdAddress] = useState('');

    const {
        ip
    } = useAuth()

    useEffect(() => {
        console.log(username)
        // getUserId()
        getDataAddress()
        // console.log(maKH + 'o useEffect')
        console.log(data)
    }, []);

    const getDataAddress = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getUserId/${username}`);
            const dt = response.data;
            console.log(dt)
            setMaKH(dt[0].IdUser)
        } catch (error) {
            console.error('Error fetching data userId', error.message);
        }

        try {
            const response = await axios.get(`http://${ip}:8080/address/${username}`);
            const dt = response.data;
            console.log(dt)
            setData(dt)
        } catch (error) {
            console.error('Error fetching data address', error.message);
        }
        
    };

    // const getUserId = async () => {
    //     try {
    //         const response = await axios.get(`http://${ip}:8080/getUserId/${username}`);
    //         const dt = response.data;
    //         console.log(dt)
    //         setMaKH(dt[0].IdUser)
    //     } catch (error) {
    //         console.error('Error fetching data userId', error.message);
    //     }
    // };

    const insertNewAddress = async () => {
        console.log(ip)
        console.log("check insert: " + maKH)
        try {
            const response = await fetch(`http://${ip}:8080/InsertAddress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ maKH, text, province, numericValue}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Login failed. Please check your credentials.');
                console.log('Login failed');
            }
        } catch (error) {
            console.log('Login error:', error);
        }
    };

    const deleteAddress = async () => {
        console.log(ip)
        console.log("check insert: " + maKH)
        try {
            const response = await fetch(`http://${ip}:8080/DeleteAddress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({idAddress}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Delete failed. Please check address.');
                console.log('Delete failed');
            }
        } catch (error) {
            console.log('Delete error:', error);
        }
    };

    const updateAddress = async () => {
        console.log(ip)
        console.log("check update: " + "id:" + idAddress +  "text: " + text + province + numericValue)
        try {
            const response = await fetch(`http://${ip}:8080/UpdateAddress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({idAddress, text, province, numericValue}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Update failed. Please check address.');
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Update error:', error);
        }
    };

    const updateValue0Address = async (idAddress) => {
        console.log(ip)
        // console.log("check update: " + "id:" + idAddress +  "text: " + text + province + numericValue)
        try {
            const response = await fetch(`http://${ip}:8080/UpdateValue0Address`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({idAddress, maKH}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Update failed. Please check address.');
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Update error:', error);
        }
    };

    const updateValue1Address = async (idAddress) => {
        console.log(ip)
        // console.log("check update: " + "id:" + idAddress +  "text: " + text + province + numericValue)
        try {
            const response = await fetch(`http://${ip}:8080/UpdateValue1Address`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({idAddress}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Update failed. Please check address.');
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Update error:', error);
        }
    };


    const toggleModalAdd = () => {
      setModalAddVisible(!isModalAddVisible);
    };

    const toggleModalEdit = (item, index) => {
        setModalEditVisible(!isModalEditVisible);
        setIndexItem(index)
        setIdAddress(item.id)
        setText(item.diachi)
        setNumericValue(data[index].sdt)
    };

    const HandleCancel = () => {
        setModalEditVisible(!isModalEditVisible);
        setIndexItem(null)
        setText('')
        setNumericValue('')
        setProvince('')
    };

    const handleSetIndexClicked = (id,index) => {
        // setIdAddress(id)
        Alert.alert(
            'Chọn địa chỉ',
            'Bạn có chắc muốn chọn địa chỉ này làm địa chỉ mặc định không?',
            [
              {
                text: 'Không',
                style: 'cancel',
              },
              {
                text: 'Có',
                onPress: () => {
                    // const updatedData = data.filter((item, index) => index !== indexItem);
                    // const updateArrCount = arrCount.filter((item, index) => index !== index_0);
                    updateValue1Address(id)
                    updateValue0Address(id)
                    // setModalEditVisible(!isModalEditVisible);
                    getDataAddress()

                    // setData(updatedData)
                    // setText('')
                    // setProvince('')
                    // setNumericValue('')
                },
              },
            ],
            { cancelable: false }
        );

    }

    const handleValueProvince=(valueProvince)=>{
        setProvince(valueProvince)
    }

    const handlerValueIndex=(index)=>{
        setIndexProvince(index)
    }

    const handleTextChange = (inputText) => {
        setText(inputText);
    };

    const handleNumericChange = (inputText) => {
        // Kiểm tra xem inputText có phải là số hay không
        if (/^\d+$/.test(inputText) || inputText === '') {
          setNumericValue(inputText);
        }
    };

    const handleAddAddress = () => {
        if (province == '' || text == '' || numericValue == '')
        {
            Alert.alert(
                'Thông báo',
                'Vui lòng nhập đủ thông tin',
                [
                  {
                    text: 'OK',
                    style: 'cancel',
                  }
                ],
                { cancelable: false }
            );
        }
        else
        {
            insertNewAddress()
            getDataAddress()
            setModalAddVisible(!isModalAddVisible);
            
            // const newData = {
            //     address: text,
            //     province: province,
            //     sdt: numericValue,
            // }
            // setData((prevData)=>[...prevData, newData])
            setText('')
            setProvince('')
            setNumericValue('')
        }
    }

    const handleEditAddress = () => {
        if (province == '' || text == '' || numericValue == '')
        {
            Alert.alert(
                'Thông báo',
                'Vui lòng nhập đủ thông tin',
                [
                  {
                    text: 'OK',
                    style: 'cancel',
                  }
                ],
                { cancelable: false }
            );
        }
        else
        {
            updateAddress()
            setModalEditVisible(!isModalEditVisible);
            getDataAddress()
            // setModalAddVisible(!isModalAddVisible);
            setText('')
            setProvince('')
            setNumericValue('')
        }
    }

    const handleDeleteAddress = () => {
            Alert.alert(
                'Xác nhận xóa',
                'Bạn có chắc muốn xóa địa chỉ này không?',
                [
                  {
                    text: 'Không',
                    style: 'cancel',
                  },
                  {
                    text: 'Có',
                    onPress: () => {
                        // const updatedData = data.filter((item, index) => index !== indexItem);
                        // const updateArrCount = arrCount.filter((item, index) => index !== index_0);
                        deleteAddress()
                        setModalEditVisible(!isModalEditVisible);
                        getDataAddress()

                        // setData(updatedData)
                        setText('')
                        setProvince('')
                        setNumericValue('')
                    },
                  },
                ],
                { cancelable: false }
            );
    }

    const renderItem = ({ item, index }) => (
        <View 
            style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', 
            alignItems: 'center', backgroundColor: '#F5FBF3', borderRadius: 20, marginVertical: 10}}
        >
            <TouchableOpacity onPress={()=>handleSetIndexClicked(item.id, index)}>
                <View 
                    style={{margin: 5, borderWidth: 4, borderRadius: 20, borderColor: '#6B6D7B',
                    width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}
                >
                    {
                        item.value==1 ? (
                            <AntDesign 
                                name="checkcircle" 
                                size={27} color="#6AC949" 
                                style={{borderRadius: 20, width: 35,
                                height: 35, textAlign: "center", textAlignVertical: 'center', }}
                            /> 
                        ) : (
                            <View></View>
                        )
                    }

                </View>
                
            </TouchableOpacity>

            <View style={{flex: 1, padding: 5}}>
                <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 5}} >{item.tinh}</Text>
                <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 5}} >{item.diachi}</Text>
                <Text>SĐT: {item.sdt}</Text>
            </View>
            
            <TouchableOpacity onPress={()=>toggleModalEdit(item, index)}>
                <AntDesign 
                    name="setting" 
                    size={33} color="black" 
                    style={{borderRadius: 20, width: 35,
                    height: 35, textAlign: "center", textAlignVertical: 'center', margin: 5}}
                />
            </TouchableOpacity>
        </View>

    )

    const handleBack=()=>{
        navigation.navigate('Pay', { sum: sum, key: "pay" });
    }


  return (
    <View style={styles.container}>
        <View 
            style={{flexDirection: "row", justifyContent: "space-between", height: 85,
            alignItems: 'center', width: '100%', position: 'relative', alignSelf: 'flex-start'}}
        >
            <TouchableOpacity
                style={{backgroundColor: 'green', borderRadius: 20, width: 35,
                height: 35, textAlign: "center", textAlignVertical: 'center'}}
                onPress={()=>handleBack()}
            >
                <AntDesign 
                    name="arrowleft" 
                    size={30} color="white" 
                    style={{borderRadius: 20, width: 35,
                    height: 35, textAlign: "center", textAlignVertical: 'center'}}
                />
            </TouchableOpacity>

            <View style={{width: '100%'}}>
                {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Địa chỉ của bạn</Text>
            </View>

        </View>

        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Địa chỉ</Text>

        <View style={{flex: 1}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1} // Số cột bạn muốn hiển thị
            />
        </View>



        <TouchableOpacity style={{justifyContent: 'flex-start', marginTop: 10, height: 70}} onPress={()=>toggleModalAdd()}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign 
                    name="plus" 
                    size={33} color="#6AC949" 
                    style={{borderRadius: 20, width: 35,
                    height: 35, textAlign: "center", textAlignVertical: 'center', margin: 5}}
                />
                <Text style={{fontSize: 18, color: '#6AC949'}}>Thêm địa chỉ mới</Text>
            </View>
            
        </TouchableOpacity>

        <Modal
        // style = {{backgroundColor: 'red'}}
            animationType="slide"
            transparent={true}
            visible={isModalAddVisible}
            onRequestClose={toggleModalAdd}
            statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={{fontWeight: 'bold'}}>Thêm địa chỉ mới</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Tỉnh/Thành Phố</Text>
                        {/* <View style={{backgroundColor: 'red', flex: 1, height: 50, justifyContent: 'center'}}><Home_Address valueProvince={handleValueProvince}/></View> */}
                        <Home_Address valueProvince={handleValueProvince}/>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                        <Text>SĐT</Text>
                        <View style={{borderWidth: 1, flex: 1, marginLeft: 130, borderRadius: 10, borderColor: 'green', backgroundColor: '#F5FBF3'}}>
                            <TextInput
                                style={{padding: 5, paddingHorizontal: 20, textAlign: 'right'}}
                                keyboardType="numeric"
                                // multiline={true}
                                value={numericValue}
                                onChangeText={handleNumericChange}
                                placeholder='Số điện thoại'
                                numberOfLines={1}
                            />
                        </View>
                    </View>

                    <View style={{backgroundColor: '#F5FBF3', borderWidth: 1, borderColor: 'green', borderRadius: 10, height: 90}}>
                        <TextInput
                            style={{padding: 10}}
                            // multiline={true}
                            value={text}
                            onChangeText={handleTextChange}
                            placeholder='Địa chỉ'
                            numberOfLines={3}
                        />
                    </View>

                    <View style={{width: '100%', alignItems: 'center', paddingVertical: 20}}>
                        <FontAwesome5 name="map-marked-alt" size={70} color="#6AC949" />
                    </View>

                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                        <TouchableOpacity onPress={toggleModalAdd} style={styles.closeButton1}>
                            <Text style={styles.closeButtonText}>Hủy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleAddAddress} style={styles.closeButton2}>
                            <Text style={styles.closeButtonText}>Thêm</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </View>

            {console.log(indexProvince)}
        </Modal>

        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalEditVisible}
            onRequestClose={toggleModalEdit}
            statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={{fontWeight: 'bold'}}>Chỉnh sửa địa chỉ</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Tỉnh/Thành Phố</Text>
                        {/* <View style={{backgroundColor: 'red', flex: 1, height: 50, justifyContent: 'center'}}><Home_Address valueProvince={handleValueProvince}/></View> */}
                        <Home_Address valueProvince={handleValueProvince}/>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                        <Text>SĐT</Text>
                        <View style={{borderWidth: 1, flex: 1, marginLeft: 130, borderRadius: 10, borderColor: 'green', backgroundColor: '#F5FBF3'}}>
                            <TextInput
                                style={{padding: 5, paddingHorizontal: 20, textAlign: 'right'}}
                                keyboardType="numeric"
                                // multiline={true}
                                value={numericValue}
                                onChangeText={handleNumericChange}
                                placeholder='Số điện thoại'
                                numberOfLines={1}
                            />
                        </View>
                    </View>

                    <View style={{backgroundColor: '#F5FBF3', borderWidth: 1, borderColor: 'green', borderRadius: 10, height: 90}}>
                        <TextInput
                            style={{padding: 10}}
                            // multiline={true}
                            value={text}
                            onChangeText={handleTextChange}
                            placeholder='Địa chỉ'
                            numberOfLines={3}
                        />
                    </View>

                    <View style={{width: '100%', alignItems: 'center', paddingVertical: 20}}>
                        <FontAwesome5 name="map-marked-alt" size={70} color="#6AC949" />
                    </View>

                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                        <TouchableOpacity onPress={HandleCancel} style={styles.closeButton_Huy}>
                            <Text style={styles.closeButtonText}>Hủy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleDeleteAddress} style={styles.closeButton_Xoa}>
                            <Text style={styles.closeButtonText}>Xóa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleEditAddress} style={styles.closeButton_Sua}>
                            <Text style={styles.closeButtonText}>Sửa</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </View>

            {console.log(province)}
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
    paddingHorizontal: 20
    // justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    closeButton1: {
        backgroundColor: 'gray',
        padding: 10,
        width: '40%',
        borderRadius: 5,
        marginTop: 10,
        height: 90,
        justifyContent: 'center'
    },

    closeButton2: {
      backgroundColor: '#6AC949',
      padding: 10,
      width: '40%',
      borderRadius: 5,
      marginTop: 10,
      height: 90,
      justifyContent: 'center'
    },

    closeButton_Huy: {
        backgroundColor: 'gray',
        padding: 10,
        width: '30%',
        borderRadius: 5,
        marginTop: 10,
        height: 90,
        justifyContent: 'center'
    },

    closeButton_Xoa: {
        backgroundColor: 'red',
        padding: 10,
        width: '30%',
        borderRadius: 5,
        marginTop: 10,
        height: 90,
        justifyContent: 'center'
    },

    closeButton_Sua: {
        backgroundColor: '#6AC949',
        padding: 10,
        width: '30%',
        borderRadius: 5,
        marginTop: 10,
        height: 90,
        justifyContent: 'center'
    },

    closeButtonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold'
    },
});

export default Address