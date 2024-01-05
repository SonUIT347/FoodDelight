import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'
import useAuth from '../context/useAuth'
const data = [
    {
        macb: '320',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '35',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '38',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
    {
        macb: '20',
        name: 'cua hang 1',
        tenuser: 'son',
    },
]
const Item = ({ item, handleAccept, handleDeny }) => (
    <View style={{ flexDirection: 'column', flex: 1, height: 'auto', width: "90%", borderWidth: 1, marginBottom: 15, marginLeft: 20, borderRadius: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80 }} source={require('../../../assets/jam_store.png')}></Image>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', height: 'auto', width: 250 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.TenUser}</Text>
                {/* <Text>{item.tenuser}</Text> */}
                <Text style={{ marginBottom: 2 }}>Địa Chỉ: {item.DiaChi}</Text>
                <Text style={{ marginBottom: 2 }} >Email: {item.Email}</Text>
                <Text style={{ marginBottom: 2 }} >SDT: {item.Sdt}</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity
                style={{ backgroundColor: '#4ECB71', padding: 3, borderRadius: 6, margin: 5 }}
                onPress={() => handleAccept(item.MaCollaborator)}
            >
                <Text style={{ color: 'white', fontSize: 15 }}>Chấp nhân</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: '#F80C0C', padding: 3, borderRadius: 6, margin: 5 }}
                onPress={() => handleDeny(item.MaCollaborator)}
            >
                <Text style={{ color: 'white', fontSize: 15 }}>Từ chối</Text>
            </TouchableOpacity>
        </View>
    </View>

)
const renderItem = ({ item, handleAccept, handleDeny }) => {
    return (
        <Item item={item} handleAccept={handleAccept} handleDeny={handleDeny} />
    )
}
const AdminStore = () => {
    const {
        ip
    } = useAuth()
    const [collab, setCollab] = useState([])
    const getAllCollabPending = async () => {
        await axios.get(`http://${ip}:8080/allcollab`).then(response => {
            setCollab(response.data)
        })
    }
    const handleAccept = async (macb) => {
        try {
            console.log(macb);
            await axios.put(`http://${ip}:8080/update/accept/collabpending/${macb}`);
            getAllCollabPending()
        } catch (error) {
            console.error('Error accepting collaborator:', error);
        }
    }
    
    const handleDeny = async (macb) => {
        try {
            await axios.put(`http://${ip}:8080/update/deny/collabpending/${macb}`);
            getAllCollabPending()
        } catch (error) {
            console.error('Error denying collaborator:', error);
        }
    }
    
    useEffect(() => {
        getAllCollabPending()
    }, [])
    return (
        <FlatList
            data={collab}
            renderItem={({ item }) => renderItem({ item, handleAccept, handleDeny })}
            keyExtractor={item => item.MaCollaborator}
        />

    )
}

export default AdminStore