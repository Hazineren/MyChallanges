import React, {useEffect, useState} from "react";
import { TextInput, View, Text,Image, TouchableOpacity, Linking, Alert } from 'react-native';
import styles from './LoginPage.styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import materialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function LoginPage({navigation,route}){

    // const user = route?.params?.user 
    const user = {userPass:"1"}

    const [userPassword,setUserPassword] = useState('');
    
    function goToMainPage(){
        if(userPassword === user?.userPass){
            navigation.navigate('MainPage')
        }
    }

    function goSignUpPage(){
        navigation.navigate('SignUpPage');
    }
    
    
    return(
        
            <View style={styles.mainPage}>
                
                <Image source={require('../../../assets/logo2.png')} style={{width: 160,alignSelf:'center',marginBottom:40, height: 160}}/>
                
                <View style={styles.innerPage}>
                    <View style={styles.topTexts}>
                        <Text style={styles.txtWelcome}>Hoşgeldiniz {user?.userName}</Text>
                        <View style={styles.txtAccountAskContainer}>
                            <Text style={styles.txtAccountAsk}>Hesabınız yok mu ?</Text>
                            <TouchableOpacity onPress={goSignUpPage}>
                                <Text style={styles.txtSignUp} onPress={null}>Hemen Kaydol</Text>
                            </TouchableOpacity>
                            
                        </View>
                        
                    </View>
                    <View style={styles.txtInputContainer}>
                        <View style={styles.userEmailContainer}>
                            <TextInput value={user?.userEmail}  placeholder="E-mail adresiniz" style={styles.inputEmail}></TextInput>
                        </View>
                        <View style={styles.userPasswordContainer}>
                            <TextInput onChangeText={setUserPassword} secureTextEntry={true} placeholder="Şifreniz.." style={styles.inputPassword}></TextInput>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.label}>Beni Hatırla</Text>
                            <Text>Şifremi Unuttum!</Text>
                        </View>
                    </View>
                    <View style={styles.btnsContainer}>
                            <TouchableOpacity onPress={goToMainPage}>
                                <View style={styles.signBtn}>
                                    <Text style={styles.signBtnTxt}>Giriş Yap</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.txtLoginWith}>Or Login With</Text>
                        <View style={styles.btnSignContainer}>
                            <TouchableOpacity>
                                <View style={styles.faceBtn}>
                                    <Text style={styles.faceBtnTxt}><Ionicons name="logo-facebook" color={'white'} size={25}></Ionicons></Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View  style={styles.googleBtn}>
                                    <Text style={styles.googleBtnTxt}><Ionicons name="logo-google" color={'white'} size={25}></Ionicons></Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.twitterBtn}>
                                    <Text style={styles.twitterBtnTxt}><Ionicons name="logo-twitter" color={'white'} size={25}></Ionicons></Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    

                </View>
            </View>
        
    )
}


export default LoginPage;