
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:"100%",
    position:"absolute",
    bottom:0,
    backgroundColor:colors.bgColor,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  closeButton:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
  },
  box:{
    width:"100%",
    height:50,
    justifyContent:"center",
    paddingLeft:"10%",
    backgroundColor:"white",
    marginVertical:5,
    borderRadius:5
  },
  title:{
    fontSize:14,
    fontWeight:"600",
    color:"black"
  },
  header:{
    width:"100%",
    height:50,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:"6%",
    top:"1%"
  },
  heading:{
    fontSize:14,
    fontWeight:"600",
    color:"black"
  }
});

export default styles;
