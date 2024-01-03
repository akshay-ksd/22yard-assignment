
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import Icons from "react-native-vector-icons/Ionicons";
import { getAllTeam } from '../../../database/releamInstence';
const TeamList: FC<any> = ({ employee, close, removeAndAdd }) => {
  const [teamData, setTeam] = useState<any>([])

  useEffect(() => {
    const department_id = employee?.department_id
    const team = getAllTeam();
    let filterTem = team.filter((x) => x?.department_id == department_id && x?._id.toString() !== employee?.team_id.toString())
    setTeam(filterTem)
  }, [])

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity style={styles.box} onPress={() => removeAndAdd(item)}>
        <Text style={styles.title}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Change Team</Text>
        <TouchableOpacity style={styles.closeButton} onPress={close}>
          <Icons name={"close-outline"} size={28} color={"black"} />
        </TouchableOpacity>
      </View>

      <FlatList data={teamData} renderItem={renderItem} contentContainerStyle={{ padding: "5%" }} />
    </View>
  );
};

export default TeamList;
