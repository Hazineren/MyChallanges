import React,{useState} from "react";
import { View, Image,Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './SignUpPage.styles';


function SignUpPage({navigation}){
    const [userName, setUserName] = useState(null);
    const [userEmail,setUserEmail] = useState(null);
    const [userNumber, setUserNumber] = useState(null);
    const [userPass, setUserPass] = useState(null);



    function checkUserInfo(){
        let user = {
            userName,
            userEmail,
            userNumber,
            userPass
        }

        if(!userName || !userEmail || !userNumber || !userPass){
         Alert.alert('Uyarı !!','Bilgi alanları boş bırakılamaz!');
         console.log(user,'user geliyor mu')
            return;
        }

        navigation.navigate('LoginPage',{user});
    }
    return(
        <View style={styles.container}>
            <View style={styles.innerPage}>
                <Image style={styles.imageStyle} source={require('../../../assets/logo2.png')}></Image>
                <Text style={styles.pageSlogan}>My Challange</Text>
            </View>
            <View style={styles.registerContainer}>
                <TextInput onChangeText={setUserName} style={styles.inputNameStyle} placeholder="Fullname"/>
                <TextInput onChangeText={setUserEmail} style={styles.inputEmailStyle} placeholder="Email"></TextInput>
                <TextInput onChangeText={setUserNumber} style={styles.inputNumberStyle} placeholder="Phone Number"></TextInput>
                <TextInput onChangeText={setUserPass} style={styles.inputPasswordStyle} placeholder="Password"></TextInput>
                <TouchableOpacity  onPress={checkUserInfo}>
                    <View style={styles.registerBtn}>
                        <Text style={styles.registerBtnTxt}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SignUpPage;
