
import { View, Text, FlatList, Alert } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import UserSingleContainer from './user-single-container/user-single-container';
import { deleteTeamMemberData,addTeamMembersData } from '../../../database/releamInstence';
import TeamList from '../../../components/organization/team-list';
const AddedMembers: FC<any> = ({ teamMembers, updatedData }) => {
  const [showList,setShowList] = useState(false)
  const [employee,setEmployee] = useState<any>()
  const removeMember = (item: any) => {
    Alert.alert(
      'Remove Member',
      'Are you sure you want to remove the member?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            deleteTeamMemberData(item?._id,item?.team_id)
            updatedData()
            // Handle the removal action here
            // You can add your setLead and setEmpList logic here
          },
        },
      ],
      { cancelable: false }
    );
  }

  const changeTeam = (item: any) => {
    setEmployee(item)
    setShowList(true)
  }

  const renderItem = ({ item, index }: any) => {
    return (
      <UserSingleContainer item={item} removeMember={removeMember} changeTeam={changeTeam} />
    )
  }

  const removeAndAdd =(item:any)=> {
    Alert.alert(
      'Change Team',
      `Are you sure you want to move ${employee?.name} to ${item?.name} Team?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Move',
          onPress: () => {
            const data = {
              team_id: item?._id,
              employee_id: employee?._id,
            }
            const output = addTeamMembersData(data)
            if(output){
              deleteTeamMemberData(employee?._id,employee?.team_id)
              updatedData()
              setShowList(false)
            }
            // Handle the removal action here
            // You can add your setLead and setEmpList logic here
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={teamMembers}
        renderItem={renderItem}
        keyExtractor={(x, i) => i.toString()} />
        {showList && <TeamList employee={employee} close={()=>setShowList(false)} removeAndAdd={removeAndAdd}/>}
    </View>
  );
};

export default AddedMembers;
