import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SubmitBtn = ({text, press}) => {
    return (
        <View>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => press()} >
                <Text style={styles.btnSubmit_text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btnSubmit:{
        width:340,
        backgroundColor:'#45BC1B',
        height:54,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:15
    },
    btnSubmit_text:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})
export default SubmitBtn