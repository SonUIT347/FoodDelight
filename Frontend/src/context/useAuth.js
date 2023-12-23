import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { authContext } from './AuthContext'

const useAuth = () => {
  return (
    useContext(authContext)
  )
}

export default useAuth