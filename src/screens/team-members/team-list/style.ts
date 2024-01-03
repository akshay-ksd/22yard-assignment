import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";
const {height,width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"80%",
    },
    heading:{
        width:"100%",
        height:50,
        justifyContent:"center",
        paddingLeft:"5%"
    },
    teamTitle:{
        fontSize:16,
        fontWeight:"600",
        color:"black"
    },
    singleContainer:{
        width:width/2.2,
        height:width/2.2,
        backgroundColor:colors.white,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        elevation:2,
        margin:3
    },
    teamName:{
        fontSize:16,
        fontWeight:"400",
        color:"black"
    }
});

export default styles