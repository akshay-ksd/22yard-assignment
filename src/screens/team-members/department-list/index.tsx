
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import { department } from '../../../components/constants/department';
import colors from '../../../components/constants/colors';
interface propsType {
  selectDepartment:(d:number)=>void;
}
const departmentList:FC<propsType> = (props) => {
  const [selected, setSelected] = useState(0)

  const selectDepartment =(d:number,id:number)=> {
    setSelected(d)
    props.selectDepartment(id)
  }
  return (
    <View style={styles.container}>
      <FlatList data={department} renderItem={({ item, index }) => (
        <TouchableOpacity style={[styles.singleList, { backgroundColor: selected == index ? colors.blue : colors.white, elevation: selected == index ? 2 : 1 }]} onPress={()=>selectDepartment(index,item.id)}>
          <Text style={[styles.title,{color:selected == index? colors.white:colors.black}]}>{item?.name}</Text>
        </TouchableOpacity>
      )}
        horizontal
        keyExtractor={(i, index) => index.toString()}
        contentContainerStyle={{alignItems:"center"}}
      />

    </View>
  );
};

export default departmentList;
