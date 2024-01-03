
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    width:"100%",
    alignItems:"center"
  },
  box:{
    width:"90%",
    backgroundColor:"white",
    elevation:2,
    borderRadius:5,
    marginTop:"5%",
    alignItems:"center",
  },
  selectedView:{
    width:"100%",
    height:50,
    backgroundColor:"white",
    borderRadius:5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:"5%"
  },
  text:{
    fontSize:14,
    fontWeight:"500",
    color:"black"
  }
});

export default styles;
