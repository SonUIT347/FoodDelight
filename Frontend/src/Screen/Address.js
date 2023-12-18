import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, Alert, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Home_Address from '../Component/Home_Address';

const Address=() => {
    const [data, setData] = useState([]);
    const [isModalAddVisible, setModalAddVisible] = useState(false);
    const [isModalEditVisible, setModalEditVisible] = useState(false);
    const [province, setProvince] = useState('');
    const [indexItem, setIndexItem] = useState(null);
    const [indexClicked, setIndexClicked] = useState(0);
    const [indexProvince, setIndexProvince] = useState(null);
    const [text, setText] = useState('');
    const [numericValue, setNumericValue] = useState('');

    const toggleModalAdd = () => {
      setModalAddVisible(!isModalAddVisible);
    };

    const toggleModalEdit = (index) => {
        setModalEditVisible(!isModalEditVisible);
        setIndexItem(index)
        setText(data[index].address)
        setNumericValue(data[index].sdt)
    };

    const HandleCancel = () => {
        setModalEditVisible(!isModalEditVisible);
        setIndexItem(null)
        setText('')
        setNumericValue('')
        setProvince('')
    };

    const handleSetIndexClicked = (index) => {
        setIndexClicked(index)
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
            setModalAddVisible(!isModalAddVisible);
            const newData = {
                address: text,
                province: province,
                sdt: numericValue,
            }
            setData((prevData)=>[...prevData, newData])
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
            const newData = [...data];
      
      // Thay đổi giá trị của đối tượng cụ thể trong bản sao của mảng
            newData[indexItem] = {
                ...newData[indexItem],
                address: text,
                province: province,
                sdt: numericValue,
            };
            setModalEditVisible(!isModalEditVisible);
            setData(newData)
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
                        const updatedData = data.filter((item, index) => index !== indexItem);
                        // const updateArrCount = arrCount.filter((item, index) => index !== index_0);
                        setModalEditVisible(!isModalEditVisible);
                        setData(updatedData)
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
            <TouchableOpacity onPress={()=>handleSetIndexClicked(index)}>
                <View 
                    style={{margin: 5, borderWidth: 4, borderRadius: 20, borderColor: '#6B6D7B',
                    width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}
                >
                    {
                        index == indexClicked ? (
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
                <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 5}} >{item.province}</Text>
                <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 5}} >{item.address}</Text>
                <Text>SĐT: {item.sdt}</Text>
            </View>
            
            <TouchableOpacity onPress={()=>toggleModalEdit(index)}>
                <AntDesign 
                    name="setting" 
                    size={33} color="black" 
                    style={{borderRadius: 20, width: 35,
                    height: 35, textAlign: "center", textAlignVertical: 'center', margin: 5}}
                />
            </TouchableOpacity>
        </View>

    )


  return (
    <View style={styles.container}>
        <View 
            style={{flexDirection: "row", justifyContent: "space-between", height: 85,
            alignItems: 'center', width: '100%', position: 'relative', alignSelf: 'flex-start'}}
        >
            <AntDesign 
                name="arrowleft" 
                size={30} color="black" 
                style={{backgroundColor: 'green', borderRadius: 20, width: 35,
                height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"}}
            />
            <View style={{width: '100%'}}>
                {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Địa chỉ của bạn</Text>
            </View>

        </View>

        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Địa chỉ</Text>

        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1} // Số cột bạn muốn hiển thị
            />
        </View>



        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>toggleModalAdd()}>
            <AntDesign 
                name="plus" 
                size={33} color="#6AC949" 
                style={{borderRadius: 20, width: 35,
                height: 35, textAlign: "center", textAlignVertical: 'center', margin: 5}}
            />
            <Text style={{fontSize: 18, color: '#6AC949'}}>Thêm địa chỉ mới</Text>
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
                        <Home_Address valueProvince={handleValueProvince} valueIndex={handlerValueIndex}/>
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
                        <Home_Address valueProvince={handleValueProvince} valueIndex={handlerValueIndex}/>
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
    marginHorizontal: 20
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