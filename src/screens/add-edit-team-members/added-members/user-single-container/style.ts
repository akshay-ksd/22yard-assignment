import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height / 5.5,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: "90%",
        height: "95%",
        borderRadius: 5,
        elevation: 2,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "5%"
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 70
    },
    detailsView: {
        width: "70%",
        paddingLeft: "5%"
    },
    name: {
        fontSize: 14,
        fontWeight: "600",
        color: "black"
    },
    details: {
        fontSize: 12,
        fontWeight: "400",
        color: "gray",
        marginTop: "2%"
    },
    buttonView: {
        width: "100%",
        flexDirection:"row",
        paddingTop:"5%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    button:{
        padding:"3%"
    }
});

export default styles