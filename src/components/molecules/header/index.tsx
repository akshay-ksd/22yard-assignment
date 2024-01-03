
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
const header = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icons name={"chevron-back-outline"} size={28} color={"black"}/>
      </TouchableOpacity>
    </View>
  );
};

export default header;
