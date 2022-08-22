import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './MainPage.styles'
import { AppContext } from "../../contex/AppContex";

function MainPage({navigation}){
    const {category,setCategory}=React.useContext(AppContext)

 
    function goToDetailsPage(id){
        if(id==1){
            navigation.navigate('AnimalDetailPage',{id})
        }else if(id==2){
            navigation.navigate('BooksDetailPage',{id})
        }else if(id==3){
            navigation.navigate('HomeDetailPage',{id})
        }else if(id==4){
            navigation.navigate('PlantDetailPage',{id})
        }else if(id==5){
            navigation.navigate('GameDetailPage',{id})
        }
        
    }

    return(
        <View style={styles.container}>
            <FlatList keyExtractor={(item) =>item.id} data={category} renderItem={({item})=>(
            <TouchableOpacity onPress={()=>goToDetailsPage(item.id)}>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTxt}>{item.name}</Text>
                    <Image style={styles.imgCard} source={item.image}></Image>
                </View>
            </TouchableOpacity>
        
        )}></FlatList></View>
        
    )
}



export default MainPage;