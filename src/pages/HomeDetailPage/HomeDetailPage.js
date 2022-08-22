import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React, { useContext,useState,useEffect } from 'react'
import styles from './HomeDetailPage.styles'
import CardHomeDetail from '../../Cards/CardHomeDetail/CardHomeDetail'
import { AppContext } from '../../contex/AppContex'

const HomeDetailPage = () => {
    const {homeDetail, setHomeDetail} = useContext(AppContext);

    const [workId, setWorkId] = useState(1);
    const [data, setData] = useState();
    //edit itemım bu
    const [dataList, setDataList] = useState([...homeDetail.filter(e=>e.id===workId)]);
    const [isRender, setIsRender] = useState(false)

    const setWorkFilter = workId=>{
        if(workId !== ''){
            setDataList([...homeDetail.filter(e=>e.id===workId)])
        }else{
            setDataList(homeDetail)
        }
        setWorkId(workId)
    }


    const renderWorkDetail = ({item})=><CardHomeDetail props={item}></CardHomeDetail>
    const renderWorkId = ({item})=><TouchableOpacity onPress={()=>setWorkFilter(item.id)}>
        <View style={[styles.categoryBtn,workId===item.id && styles.btnTabActive]}>
            <Image style={styles.workImg} source={item.image}></Image>
        </View>
        <Text style={styles.txtWorkName}>{item.workName}</Text>
    </TouchableOpacity>
    

   

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <FlatList horizontal data={homeDetail} renderItem={renderWorkId}></FlatList>
      </View>
      <FlatList data={dataList} renderItem={renderWorkDetail} extraData={isRender}></FlatList>
    </View>
  )
}

export default HomeDetailPage