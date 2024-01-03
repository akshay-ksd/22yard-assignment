
import { StyleSheet } from 'react-native';
import colors from '../../../components/constants/colors';

const styles = StyleSheet.create({
   container:{
    width:"100%",
    flexGrow:1,
    alignItems:"center"
   },
   title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:colors.white
  },
  input: {
    height: 60,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '90%', 
    borderRadius:5,
    elevation:1,
    backgroundColor:"white",
    marginTop:"5%",
    color:"black"
  },
  button:{
    width:"90%",
    height:60,
    backgroundColor:colors.blue,
    marginTop:"15%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default styles;
