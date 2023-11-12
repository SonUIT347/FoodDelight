import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageShow = ({ image, id, handleAlert }) => {
    console.log(id)
    return (

        <>
            {/* <Text >{images}</Text> */}
            <TouchableOpacity onPress={() => handleAlert(id)}>
                <Image source={{ uri: image }}
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: 5
                    }}
                />
            </TouchableOpacity>
        </>
    )
}

export default ImageShow