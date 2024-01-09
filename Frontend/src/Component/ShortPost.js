import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



// console.log(provincesAndCities.length())

const ShortPost = ({ data, navigation }) => {

    const HanderSold = () => {
        return data.sold >= 1000 ? ("Đã bán " + (data.sold / 1000).toFixed(1) + "k") : ("Đã bán " + data.LuotBan + "")
    }

    const formattedAmount = (item) => {
        if (item == null)
            return
        else
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const handlePress = () => {
        // console.log(item)
        // console.log('data' + JSON.stringify(data.MaMA))
        navigation.navigate('HomeDetails', (data.MaMA))
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress()}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8EAED', borderRadius: 12 }}>
                    <Image source={{ uri: data.Url }} style={{ width: 140, height: 140, borderRadius: 9 }} />
                    {/* <Image source={{uri:data.img}}></Image> */}
                </View>

                <View style={{ alignItems: "flex-start", width: '100%' }}>
                    <Text style={{ padding: 5, fontWeight: 600, fontSize: 14 }} numberOfLines={1}>{data.TenMA}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: '100%', paddingHorizontal: 5 }}>
                    <Text style={{ fontSize: 11}}>{formattedAmount(data.GiaTien)}đ</Text>
                    <Text style={{ fontSize: 11}}>{HanderSold()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ShortPost

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 150,
        height: 210,
        backgroundColor: '#F5FBF3',
        borderRadius: 12
    },
});