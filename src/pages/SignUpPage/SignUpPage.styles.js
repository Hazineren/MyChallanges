import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8eaf6'
    },
    innerPage:{
        flex:1,
        backgroundColor:'#49599a',
        borderWidth:1,
        borderBottomLeftRadius:115
    },
    registerContainer:{
        flex:1.25,
        padding:40
    },
    imageStyle:{
        width:120,
        height:120,
        alignSelf:'center',
        marginVertical:'17%'
    },
    pageSlogan:{
        textAlign:'right',
        marginRight:20,
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    inputNameStyle:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:20,
        padding:10
    },
    inputEmailStyle:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:20,
        padding:10,
        marginVertical:10
    },
    inputNumberStyle:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:20,
        padding:10
    },
    inputPasswordStyle:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:20,
        padding:10,
        marginVertical:10
    },
    registerBtn:{
        alignSelf:'center',
        marginTop:10,
        borderWidth:1,
        borderColor:'black',
        padding:10,
        paddingHorizontal:40,
        backgroundColor:'#283593',
        borderRadius:20
    },
    registerBtnTxt:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }

})