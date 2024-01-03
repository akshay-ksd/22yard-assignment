import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import { department } from '../../../components/constants/department'
import { useNavigation } from '@react-navigation/native'
const UserSingleContainer:FC<{item:employeeType}> = ({item}) => {
  const navigation:any = useNavigation()

  const editUser = ()=> {
    navigation.navigate("AddEditEmployee", { type: "update",data:item})
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={editUser}>
          <Image source={{uri:"https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"}} style={styles.image}/>
          <View style={styles.detailsView}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.details}>{item?.email_id}</Text>
            <Text style={styles.details}>{item?.phone_number}</Text>
            <Text style={[styles.details,{fontWeight:"600"}]}>{department.find((x:departmentType)=>x.id == item?.department_id)?.name }</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default UserSingleContainer