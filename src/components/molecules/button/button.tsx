import { View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
interface ButtonProps {
  type: "add" | "edit";
  onPress: (type: "add" | "edit") => void;
}

const Button: FC<ButtonProps> = ({ type, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(type)}
      >
        <Icons name={type == "add"?"add-outline":"create-outline"} size={32} color={"white"}/>
      </TouchableOpacity>
    </View>
  )
}

export default Button;
