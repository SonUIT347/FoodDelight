import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';

  const local_data = [
    'An Giang',
    'Bà Rịa-Vũng Tàu',
    'Bạc Liêu',
    'Bắc Kạn',
    'Bắc Giang',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Dương',
    'Bình Định',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cao Bằng',
    'Cần Thơ (TP)',
    'Đà Nẵng (TP)',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Nội (TP)',
    'Hà Tây',
    'Hà Tĩnh',
    'Hải Dương',
    'Hải Phòng (TP)',
    'Hòa Bình',
    'Hồ Chí Minh (TP)',
    'Hậu Giang',
    'Hưng Yên',
    'Khánh Hòa',
    'Kiên Giang',
    'Kon Tum',
    'Lai Châu',
    'Lào Cai',
    'Lạng Sơn',
    'Lâm Đồng',
    'Long An',
    'Nam Định',
    'Nghệ An',
    'Ninh Bình',
    'Ninh Thuận',
    'Phú Thọ',
    'Phú Yên',
    'Quảng Bình',
    'Quảng Nam',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Bình',
    'Thái Nguyên',
    'Thanh Hóa',
    'Thừa Thiên – Huế',
    'Tiền Giang',
    'Trà Vinh',
    'Tuyên Quang',
    'Vĩnh Long',
    'Vĩnh Phúc',
    'Yên Bái',
  ];


  const provincesAndCities = local_data.map((province, index) => ({
    value: (index + 1).toString(),
    label: province,
  }));
  const Home_Address = ({size, height, valueProvince, valueIndex}) => {
    const [value, setValue] = useState(null);
    const [province, setProvince] = useState(null);

    return (
      <View style={{flex: 1, color: 'red'}}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}

          // visibleSelectedItem={true}
          // RenderSelectedItem={true}
          autoScroll={false}
          showsVerticalScrollIndicator={false}
          

          data={provincesAndCities}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Chọn tỉnh thành"
          searchPlaceholder="Tìm kiếm ..."
          // activeColor="red"
          value={value}
          onChange={item => {
            setValue(item.value);
            valueIndex(item.value)
            setProvince(item.label)
            valueProvince(item.label)
          }}
          renderLeftIcon={() => (
            <AntDesign name="enviromento" size={25} color="white" style={styles.icon}/>
          )}
        />
      </View>
  );
};

export default Home_Address;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    borderBottomColor: 'gray',
    // backgroundColor: 'red',
    // alignSelf: 'flex-end'
    // color: 'red'
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
    color: 'white'
  },
  placeholderStyle: {
    fontSize: 14,
    textAlign: 'right',
    paddingRight: 10,
    height: 50,
    textAlignVertical: 'center'
  },
  selectedTextStyle: {
    fontSize: 14,
    textAlign: 'right',
    paddingRight: 10,
    height: 50,
    textAlignVertical: 'center'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});