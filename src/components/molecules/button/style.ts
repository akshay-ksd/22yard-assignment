import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height: height/10,
        position:"absolute",
        bottom:0,
        alignItems:"flex-end",
        justifyContent:"center",
        paddingRight:"5%"
    },
    button:{
        width:60,
        height:60,
        borderRadius:60,
        backgroundColor:colors.blue,
        elevation:2,
        alignItems:"center",
        justifyContent:"center"
    }
});

export default styles