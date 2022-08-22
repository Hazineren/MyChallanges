import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#795548',
        paddingBottom:11
    },
    cardBody:{
        flexDirection:'row',
        borderWidth:1,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#37474f',
        height:180,
        justifyContent:'center',
        width:'85%',
        marginTop:10,
        alignSelf:'flex-start',
        marginRight:5
    },
    cardTxt:{
        fontSize:28,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        marginLeft:165
    },
    imgCard:{
        width:50,
        height:50,
        marginLeft:40,
        marginRight:10,
        alignSelf:'center'
    }
})