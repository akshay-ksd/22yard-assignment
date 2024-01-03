
import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import Icons from "react-native-vector-icons/Ionicons";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { department } from '../../constants/department';

interface propsType {
  dep: string;
  selectDepartment: (d:string,id:number|undefined)=>void;
}

const departmentList:FC<propsType> = ({selectDepartment,dep}) => {
  const AnimatedIcon: any = Animated.createAnimatedComponent(Icons)
  
  const height = useSharedValue(50)
  const iconAngle = useSharedValue("0deg")
  const opacity = useSharedValue(0)
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value
    }
  })
  
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: iconAngle.value }]
    }
  });
  
  const listStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })
  
  const openList = () => {
    height.value = withTiming(height.value == 50 ? 250 : 50)
    iconAngle.value = withTiming(height.value == 50 ? "180deg" : "0deg")
    opacity.value =  withTiming(height.value == 50? 1 : 0,{duration:opacity.value == 0 ?1000:100})
  }
  
  const select =(d:string)=>{
    const id = department.find((x:departmentType)=>x.name == d)?.id
    selectDepartment(d,id)
    openList()
  }
  
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <TouchableOpacity style={styles.selectedView} onPress={openList}>
          <Text style={styles.text}>{dep}</Text>
          <AnimatedIcon name={"chevron-down-outline"} size={23} color={"black"} style={iconStyle} />
        </TouchableOpacity>
        <Animated.View style={[{ width:"100%"},listStyle]}>
        {
            department.map((x: departmentType) => (
              <TouchableOpacity style={styles.selectedView} onPress={()=>select(x.name)} key={x.id}>
                <Text style={styles.text}>{x?.name}</Text>
              </TouchableOpacity>
            ))
        }
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default departmentList;
