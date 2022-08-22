import { View, Text,Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './CardHomeDetail.styles'
import CheckBox from '@react-native-community/checkbox';
import { AppContext } from '../../contex/AppContex';

const CardHomeDetail = ({props}) => {
    const [bgColor, setBgColor]=useState('');
    const [bRadius, setBRadius]=useState(0);
    const [data, setData]=useState(props.workList)
    
    const onSelected=(item,index)=>{
      const newData = data.map(newItem=>{
        if(newItem.id==item.id){
          newItem.status=!item.status;
          return newItem;
        }
        return newItem;
      })
      setData(newData)
    }

    
    useEffect(() => {
        if(props.id==1){
            setBgColor('#5c007a')
        }else if(props.id==2){
            setBgColor('#9c27b0')
        }else if(props.id==3){
            setBgColor('#aa00ff')
        }else{
            setBgColor('#7200ca')
        }
        setBRadius(12)
      return () => {
        bgColor,bRadius,console.log(props.workList,'workList gelio mu')
      }
      
    })
    
  return (
    
    <View style={[{backgroundColor:bgColor,borderRadius:bRadius},styles.container]}>
        <Text style={styles.workNameTxt}>{props.workName}</Text>
        <Image style={styles.workImg} source={props.image}></Image>
        <Text style={styles.worksTxt}>{props.works}</Text>
        <View style={styles.innerWork}>
            <FlatList data={data} renderItem={({item,index})=>(
              <View style={styles.cBoxTxt}>
                <CheckBox onAnimationType='fill' offAnimationType='fade' disabled={false} onValueChange={()=>onSelected(item,index)}  value={item.status}></CheckBox>
              <Text style={[styles.workTxt,{textDecorationLine: item.status? 'line-through':'none'}]}>{item.name}</Text>
            </View>
        
        )}></FlatList>
            
            
            
            
        </View>
    </View>
  )
}

export default CardHomeDetail