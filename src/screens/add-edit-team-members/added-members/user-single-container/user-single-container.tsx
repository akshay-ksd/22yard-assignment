import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import { department } from '../../../../components/constants/department'
import Icons from "react-native-vector-icons/Ionicons"

const UserSingleContainer:FC<{item:employeeType,removeMember:any,changeTeam:any}> = ({item,removeMember,changeTeam}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
          <Image source={{uri:"https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"}} style={styles.image}/>
          <View style={styles.detailsView}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.details}>{item?.email_id}</Text>
            <Text style={styles.details}>{item?.phone_number}</Text>
            <Text style={[styles.details,{fontWeight:"600"}]}>{department.find((x:departmentType)=>x.id == item?.department_id)?.name }</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={()=>removeMember(item)}>
                  <Icons name={"close-circle-outline"} size={22} color={"red"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>changeTeam(item)}>
                  <Icons name={"swap-vertical-outline"} size={20} color={"black"}/>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
  )
}

export default UserSingleContainer