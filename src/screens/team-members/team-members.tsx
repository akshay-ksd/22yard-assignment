import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import DepartmentList from './department-list'
import TeamList from './team-list'
import Button from '../../components/molecules/button/button'
import { useNavigation } from '@react-navigation/native'
const TeamMembers = () => {
  const [selectedDepartment,setDep] = useState(1)
  const navigation:any = useNavigation()

  const selectDepartment =(d:number)=> {
    setDep(d)
  }
  const addNewTeam =()=> {
    navigation.navigate("AddEditTemMembers",{departmentId:selectedDepartment,type:"add"})
  }
  return (
    <View style={styles.container}>
      <DepartmentList selectDepartment={selectDepartment}/>
      <TeamList selectedDepartment={selectedDepartment}/>
      <Button type="add" onPress={addNewTeam}/>
    </View>
  )
}

export default TeamMembers