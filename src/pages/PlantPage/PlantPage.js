import { View, Text, Image,Button, TouchableOpacity } from 'react-native'
import React,{useContext, useState,useEffect} from 'react'
import styles from './PlantPage.styles'
import DatePicker from 'react-native-date-picker'
import { AppContext } from '../../contex/AppContex'

const PlantPage = () => {
  const [date, setDate] = useState(new Date())

  const {plantWaterTime,setPlantWaterTime} = useContext(AppContext)

  const btnClick = ()=>{
    setDate(new Date()),
    setPlantWaterTime(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`)
    setDate(new Date())
    console.log(date.getMinutes(),'********')
  }
  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <DatePicker modal testID='dateTimePicker' maximumDate={new Date()} is24hourSource='device' date={date}/>
        <TouchableOpacity onPress={btnClick}>
          <View style={styles.btnSula}>
            <Text style={styles.txtSula}>Sula</Text>
          </View>
        </TouchableOpacity>
      <Text style={styles.txtSulamaTime}><Text style={styles.txtInfo}>Son Sulama Zamanı:</Text> {plantWaterTime}</Text>
      
      </View>
      <View style={styles.bottom}>
        <Image style={styles.imgPlant} source={require('../../../assets/plantt.png')}></Image>
        <Text style={styles.txtInfo}>Gün içinde en az 2 kez sulamalısınız !</Text>
        <Text style={styles.txtSoz}>İnsanlar gibi, bitkiler de ekstra ilgiye yanıt verir.</Text>
        <Text style={styles.txtAuthor}>H. Peter Loewer</Text>
      </View>
    </View>
  )
}

export default PlantPage