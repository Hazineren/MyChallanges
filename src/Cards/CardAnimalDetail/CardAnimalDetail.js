import React,{useState} from 'react'
import {View,Text, TouchableOpacity,Image} from 'react-native';
import styles from './CardAnimalDetail.styles'

function CardAnimalDetail({pat,onSelected}) {
  const [isActive, setIsActive] = useState(true);
  const changeStyle=()=>{
    console.log('you just clicked');

    setIsActive(!isActive)
}
  // if({pat.patCategory=='Köpek'}){
  //   const imgUrl=require('../../assets/animals.png')
  // }
  return (
    <View style={[styles.container,{backgroundColor:isActive?'#26c6da':'gray'}]}>
        <View style={styles.cardTopContainer}>
          <Text style={styles.startEndTxt}>{pat.missionStartTime} - {pat.missionEndTime}</Text>
          <Text style={styles.missionNameTxt}>{pat.missionName}</Text>
          <Text style={styles.patNameTxt}>{pat.patName}</Text>
        </View>
        <View style={styles.cardBottomContainer}>
          <Image style={styles.patCardImage}></Image>
          <TouchableOpacity onPress={changeStyle}>
            <View style={[styles.btnCardCompleted, {backgroundColor: isActive?'#003c8f' : 'gray'}]}>
              <Text style={styles.btnTxt}>Tamamlandı</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CardAnimalDetail