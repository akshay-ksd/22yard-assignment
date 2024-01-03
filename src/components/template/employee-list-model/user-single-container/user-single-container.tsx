import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import { department } from '../../../constants/department'
import Icons from "react-native-vector-icons/Ionicons"
interface propsType {
  item:employeeType,
  onPress:(id:employeeType,index:number)=>void;
  index:number,
  selection:"single"|"multiple"
}
const UserSingleContainer:FC<propsType> = ({item,onPress,index,selection}) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={()=>onPress(item,index)}>
          <Image source={{uri:"https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"}} style={styles.image}/>
          <View style={styles.detailsView}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.details}>{item?.email_id}</Text>
            <Text style={styles.details}>{item?.phone_number}</Text>
            <Text style={[styles.details,{fontWeight:"600"}]}>{department.find((x:departmentType)=>x.id == item?.department_id)?.name }</Text>
          </View>
          <Icons name={"checkmark-circle-outline"} color={item?.isSelected?"green":"white"} size={28}/>

      </TouchableOpacity>
    </View>
  )
}

export default UserSingleContainer