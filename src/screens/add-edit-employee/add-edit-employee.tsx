import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Header from '../../components/molecules/header'
import EmployeeForm from './employee-form'
const AddEditEmployee: FC<any> = (props) => {
  const type = props.route.params.type;
  const data = props.route.params.data
  return (
    <View style={styles.container}>
      <Header />
      <EmployeeForm type={type} data={data}/>
    </View>
  )
}

export default AddEditEmployee