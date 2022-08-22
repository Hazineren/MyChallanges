import { View, Text,Image } from 'react-native'
import React from 'react';
import styles from './CardGameDetail.styles'

const CardGameDetail = ({props}) => {
  return (
    
    
    <View style={styles.cardContainer}>
        <View style={styles.cardBody}>
            <Image style={styles.imgAgent} source={props.image}/>
            <View style={styles.cardInfo}>
                <Text style={styles.txtInfo}>Adı: {props.characterName}</Text>
                <Text style={styles.txtInfo}>Ajan Rolü: {props.characterRole}</Text>
                <Text style={styles.txtInfo}>Cinsiyet: {props.gender}</Text>
                <Text style={styles.txtInfo}>Ülke: {props.countryOfCharacter}</Text>
                <Text style={styles.txtInfo}>Bilgi: {props.agentInfo}</Text>
            </View>
        </View>
    </View>
    
  )
}

export default CardGameDetail