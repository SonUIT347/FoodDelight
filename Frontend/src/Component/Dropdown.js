import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { label: 'Món chính', value: 'Món chính', isSelected: false },
    { label: 'Tráng miệng', value: 'Tráng miệng', isSelected: false },
    { label: 'Khai vị', value: 'Khai vị', isSelected: false },
    { label: 'Thịt', value: 'Thịt', isSelected: false },
    { label: 'Cá', value: 'Cá', isSelected: false },
    { label: 'Ăn sáng', value: 'Ăn sáng', isSelected: false },
    { label: 'Ăn trưa', value: 'Ăn trưa', isSelected: false },
    { label: 'Ăn tối', value: 'Ăn tối', isSelected: false },
    { label: 'Healthy', value: 'Healthy', isSelected: false },
];

const Dropdown = ({ selected, setSelected, setPost, post }) => {
    const [data1, setData] = useState([...data])
    const [cate, setCate] = useState([])
    const [selectIcon, setSelectIcon] = useState(false)
    const getCategory = () => {
        const selectedCategories = data1.filter((item) => item.isSelected);
        const selectedCategoryValues = selectedCategories.map((item) => item.value);
        setPost((prevState) => ({
            ...prevState,
            category: selected,
        }));
        // console.log(post)
    };
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                {!item.isSelected ? (<AntDesign style={styles.icon} color="black" name="Safety" size={20} />)
                    : (<AntDesign style={styles.icon} color="green" name="Safety" size={20} />
                    )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* {console.log()} */}
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
                    setSelected(item), getCategory();
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
                    <TouchableOpacity onPress={() => (unSelect(item))}>
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
    container: { padding: 10 },
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