
import { Dimensions, StyleSheet } from 'react-native';
const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height: height/12,
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:"5%"
  }
});

export default styles;
