import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#b39ddb',
        height:'100%',
    },
    pageHeader:{
        padding:10,
        marginBottom:10,
        backgroundColor:'#6a0080',
        borderRadius:12,
        borderWidth:1,
        borderColor:'black'
    },
    categoryBtn:{
        width:105,
        height:105,
        marginHorizontal:10,
        borderWidth:2.5,
        borderColor:'black',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    txtWorkName:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#e1bee7'
    },
    workImg:{
        height:100,
        width:100,
        borderRadius:100
    }
})