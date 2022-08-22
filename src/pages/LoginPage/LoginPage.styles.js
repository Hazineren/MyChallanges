import { StyleSheet } from "react-native";


export default StyleSheet.create({
    mainPage:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#4527a0',
        height:'100%'
    },
    innerPage:{
        height:'70%',
        backgroundColor:'white',
        borderWidth:2,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    topTexts:{
        padding:40
    },
    txtAccountAskContainer:{
        flexDirection:'row'
    },
    txtWelcome:{
        fontSize:30,
        fontWeight:'bold',
        color:'#4a0072'
    },
    txtSignUp:{
        color:'red',
        marginLeft:5
    },
    txtInputContainer:{
        padding:40,
        paddingTop:20
    },
    inputEmail:{
        borderBottomWidth:1,
        borderColor:'black',
        marginBottom:15
    },
    inputPassword:{
        borderBottomWidth:1,
        borderColor:'black',
        marginBottom:15,
    },
    label:{
        flex:1
    },
    checkboxContainer:{
        flexDirection:'row'
    },

    btnSignContainer:{
        flexDirection:'row',
        alignSelf:'center',
    },
    signBtn:{
        alignSelf:'center',
        backgroundColor:'#38006b',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:85,
        paddingRight:85,
        borderRadius:40
    },
    signBtnTxt:{
        color:'white',
        fontSize:20
    },
    txtLoginWith:{
        alignSelf:'center',
        margin:20,

    },
    faceBtn:{
        backgroundColor:'#000063',
        borderWidth:1,
        padding:10,
        borderRadius:50
    },
    faceBtnTxt:{
        color:'white',
        fontSize:20,
        padding:3
    },
    googleBtn:{
        backgroundColor:'#e53935',
        marginHorizontal:30,
        padding:10,
        borderRadius:50
    },
    googleBtnTxt:{
        color:'white',
        fontSize:20,
        padding:3
    },
    twitterBtn:{
        backgroundColor:'#2196f3',
        padding:10,
        borderRadius:50
    },
    twitterBtnTxt:{
        color:'white',
        fontSize:20,
        padding:3
    }
    


})