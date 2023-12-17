import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Home_Address from '../Component/Home_Address';

const Address=() => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };


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

        <View 
            style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', 
            alignItems: 'center', backgroundColor: '#F5FBF3', borderRadius: 20, marginVertical: 10}}
        >
            <TouchableOpacity>
                <View 
                    style={{margin: 5, borderWidth: 4, borderRadius: 20, borderColor: '#6B6D7B',
                    width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}
                >
                    <AntDesign 
                        name="checkcircle" 
                        size={27} color="#6AC949" 
                        style={{borderRadius: 20, width: 35,
                        height: 35, textAlign: "center", textAlignVertical: 'center', }}
                    />
                </View>
                
            </TouchableOpacity>

            <View style={{flex: 1, padding: 5}}>
                <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 5}} numberOfLines={1}>KTX Khu A, DHQG asdfafads</Text>
                <Text>SĐT: 0914708797</Text>
            </View>
            
            <TouchableOpacity>
                <AntDesign 
                    name="setting" 
                    size={33} color="black" 
                    style={{borderRadius: 20, width: 35,
                    height: 35, textAlign: "center", textAlignVertical: 'center', margin: 5}}
                />
            </TouchableOpacity>
        </View>

        <View 
            style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', 
            alignItems: 'center', backgroundColor: '#F5FBF3', borderRadius: 20, marginVertical: 10}}
        >
            <TouchableOpacity>
                <View 
                    style={{margin: 5, borderWidth: 4, borderRadius: 20, borderColor: '#6B6D7B',
                    width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}
                >
                    <AntDesign 
                        name="checkcircle" 
                        size={27} color="#6AC949" 
                        style={{borderRadius: 20, width: 35,
                        height: 35, textAlign: "center", textAlignVertical: 'center', }}
                    />
                </View>
                
            </TouchableOpacity>

            <View style={{flex: 1, padding: 5}}>
                <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 5}} numberOfLines={1}>CNTT  </Text>
                <Text>SĐT: 0914708797</Text>
            </View>
            
            <TouchableOpacity>
                <AntDesign 
                    name="setting" 
                    size={33} color="black" 
                    style={{borderRadius: 20, width: 35,
                    height: 35, textAlign: "center", textAlignVertical: 'center', margin: 5}}
                />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>toggleModal()}>
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
            visible={isModalVisible}
            onRequestClose={toggleModal}
            statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={{fontWeight: 'bold'}}>Thêm địa chỉ mới</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Tỉnh/Thành Phố</Text>
                        <Home_Address/>
                    </View>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Đóng màn hình mới</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    closeButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      height: 500
    },
    closeButtonText: {
      color: 'white',
      textAlign: 'center',
    },
});

export default Address