import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const data={
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà xối mỡ',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 9000
}

const Product=() => {
    
    const [count, setCount] = useState(1)
    const formattedAmount=(item)=>{
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return
    }

    const handleOnPlus = () => {
        // console.log(index)
        // Tăng giá trị đếm của phần tử tại chỉ số index
        setCount(count+1)
    };

    const handleOnMinus = () => {
        // console.log(index)
        if (count != 1)
            setCount(count-1)
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
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Chi tiết sản phẩm</Text>
            </View>

        </View>

        <Image source={{uri:data.img}}  style={{width: 250, height: 250, borderRadius: 0}}/>

        <Text style={{backgroundColor: '#EDF9E9', padding: 10, borderRadius: 10, alignSelf: 'flex-start', marginTop: 10}}>Món chính</Text>

        <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 10, width: '100%'}} numberOfLines={1}>
            {data.name}
        </Text>

        <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: '#F5FBF3', flex: 1, marginRight: 25, borderRadius: 10, borderWidth: 1, borderColor: 'green', padding: 10}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: '#6AC949'}}>Giá bán</Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>{formattedAmount(data.price)} đ</Text>
            </View>
            <View style={{backgroundColor: '#F5FBF3', alignItems: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: 'green'}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: '#6AC949'}}>Còn hàng</Text>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'gray'}}>100</Text>
            </View>
        </View>

        <ScrollView style={{backgroundColor: '#EDF9E9', marginVertical: 20, flex: 1}}>
            <Text style={{padding: 10}}>{data.description}</Text>
            <Text style={{padding: 10}}>{data.description}</Text>
            <Text style={{padding: 10}}>{data.description}</Text>
            <Text style={{padding: 10}}>{data.description}</Text>
        </ScrollView>

        <View style={{justifyContent: 'flex-end', width: '100%'}}>
            <View style={{ backgroundColor:'#EDF9E9', width: '100%', 
                flexDirection: 'row', alignItems: 'center', borderRadius: 10, height: 40}}
            >
                <TouchableOpacity style={{flex: 1,}} onPress={()=>handleOnMinus()}>
                    <AntDesign name="minus" size={24} color="#6AC949" style={{textAlign: 'center'}}/>
                </TouchableOpacity>
                <Text style={{flex: 1, fontSize: 18, textAlign: 'center'}}>{count}</Text>
                <TouchableOpacity style={{flex: 1,}} onPress={()=>handleOnPlus()}>
                    <AntDesign name="plus" size={24} color="#6AC949" style={{textAlign: 'center'}} />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginTop: 10}}>
                <TouchableOpacity onPress={()=>{}} style={styles.closeButton1}>
                    <Text style={styles.closeButtonText}>Mua</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}} style={styles.closeButton2}>
                    {/* <Text style={styles.closeButtonText}>Thêm vào giỏ hàng</Text> */}
                    <AntDesign name="shoppingcart" size={35} color="white" style={{textAlign: 'center'}}/>
                </TouchableOpacity>
            </View>
        </View>

        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
    // justifyContent: 'center',
    },
    closeButton1: {
        backgroundColor: '#6AC949',
        padding: 10,
        width: '40%',
        borderRadius: 5,
        marginTop: 10,
        height: 60,
        justifyContent: 'center'
    },

    closeButton2: {
      backgroundColor: '#6AC949',
      padding: 10,
      width: '40%',
      borderRadius: 5,
      marginTop: 10,
      height: 60,
      justifyContent: 'center'
    },

    closeButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default Product