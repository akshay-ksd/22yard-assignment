import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import List from './list/List'
const EmployeeList = () => {
  return (
    <View style={styles.container}>
      <List/>
    </View>
  )
}

export default EmployeeList