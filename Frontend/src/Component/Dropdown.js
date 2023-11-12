import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { label: 'Món chính', value: '1', isSelected: false },
    { label: 'Tráng miệng', value: '2', isSelected: false },
    { label: 'Khai vị', value: '3', isSelected: false },
    { label: 'Thịt', value: '4', isSelected: false },
    { label: 'Cá', value: '5', isSelected: false },
    { label: 'Ăn sáng', value: '6', isSelected: false },
    { label: 'Ăn trưa', value: '7', isSelected: false },
    { label: 'Ăn tối', value: '8', isSelected: false },
    { label: 'Healthy', value: '8', isSelected: false },
];

const Dropdown = () => {
    const [data1, setData] = useState([...data])
    const [selected, setSelected] = useState([]);
    const [selectIcon, setSelectIcon] = useState(false)
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                {!item.isSelected ? (<AntDesign style={styles.icon} color="black" name="Safety" size={20} />) : (<AntDesign style={styles.icon} color="green" name="Safety" size={20} />)}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data1}
                labelField="label"
                valueField="value"
                placeholder="Chọn hạng mục"
                value={selected}
                search
                searchPlaceholder="Search..."
                onChange={item => {
                    setSelected(item), setSelectIcon(!selectIcon);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
                renderItem={renderItem}
                renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity onPress={() => unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    container: { padding: 10},
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    },
});