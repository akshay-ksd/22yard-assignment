import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import styles from './style'
import { getAllTeam } from '../../../database/releamInstence'
import { useIsFocused,useNavigation } from '@react-navigation/native'
interface propsType {
  selectedDepartment: number
}
const TeamList: FC<propsType> = ({ selectedDepartment }) => {
  const [team, setTeam] = useState<any>([])
  const isFocus = useIsFocused()
  const navigation:any = useNavigation()

  useEffect(() => {
    if(isFocus){
      getData()
    }
  }, [selectedDepartment,isFocus])

  const getData = () => {
    const data = getAllTeam();
    const filterData = data.filter((x) => x.department_id == selectedDepartment);

    setTeam(filterData)
  }

  const openTeam =(item:any)=> {
    navigation.navigate("AddEditTemMembers",{departmentId:selectedDepartment,type:"update",team:item})
  }

  const renderItem = ({item,index}:any) => {
    return (
      <TouchableOpacity style={styles.singleContainer} onPress={()=>openTeam(item)}>
          <Text style={styles.teamName}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.teamTitle}>Team List</Text>
      </View>
      <FlatList data={team} renderItem={renderItem} keyExtractor={(x, i) => i.toString()} numColumns={2} contentContainerStyle={{alignItems:"center",flexGrow:1}}/>
    </View>
  )
}

export default TeamList