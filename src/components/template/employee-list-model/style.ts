import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"98%",
        backgroundColor:colors.bgColor,
        position:"absolute",
        bottom:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    closeButton:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-end",
        margin:"5%",
        elevation:5
    },
    createButton:{
        width:"100%",
        height:100,
        alignItems:'center',
        justifyContent:"center",
        position:"absolute",
        bottom:0
    },
    button:{
        width:'90%',
        height:50,
        borderRadius:5,
        backgroundColor:colors.blue,
        alignItems:'center',
        justifyContent:"center"
    },
    bTitle:{
        fontSize:16,
        fontWeight:"600",
        color:colors.white
    }
});

export default styles