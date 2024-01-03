
import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../components/constants/colors';
const {width,height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"20%",
    paddingHorizontal:"2%",
  },
  singleList:{
    height: width/4,
    backgroundColor:colors.bgColor,
    borderRadius:5,
    paddingHorizontal:"5%",
    alignItems:"center",
    justifyContent:"center",
    width:width/2.5,
    marginHorizontal:5
  },
  title:{
    fontSize:14,
    fontWeight:"500",
    color:colors.black
  }
});

export default styles;
