import { StyleSheet } from "react-native";
import colors from "../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:colors.white
    },
    teamNameView:{
        width:"100%",
        height:100,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        width:"90%",
        height:60,
        backgroundColor:colors.white,
        borderRadius:5,
        elevation:2,
        paddingHorizontal:"5%",
        color:colors.black
    },
    leadBox:{
        height:60,
        width:"90%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        elevation:2,
        backgroundColor:"white",
        borderRadius:5
    },
    lead:{
        fontSize:14,
        fontWeight:"600",
        color:colors.black
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