import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './GameDetailPage.styles'
import { AppContext } from '../../contex/AppContex'
import CardGameDetail from '../../Cards/CardGameDetail/CardGameDetail'

const GameDetailPage = () => {
    const {valoDetail,setValoDetail} = useContext(AppContext);
    const {agentCategory, setAgentCategory} = useContext(AppContext);

    const [agentRole, setAgentRole] = useState('All');
    const [dataList, setDataList] = useState(valoDetail);

    //ajanları filtreleme kodu
    const setAgentFilter = agentRole=>{
        if(agentRole !== 'All'){
            setDataList([...valoDetail.filter(e=>e.characterRole===agentRole)])
        }else{
            setDataList(valoDetail)
        }
        setAgentRole(agentRole)
    }

    const renderCardGame = ({item})=><CardGameDetail props={item}></CardGameDetail>
    const renderAgentCategory = ({item})=><TouchableOpacity onPress={()=> setAgentFilter(item.agentRole)}>
        {/* Kategori seçildiyse seçili butonu aktif bırakma kodu */}
        <View style={[styles.categoryBtn,agentRole===item.agentRole && styles.btnTabActive] }>
            <Text style={styles.categoryBtnTxt}>{item.agentRole}</Text>
        </View>
    </TouchableOpacity>
  return (
    <View style={styles.container}>
        <View style={styles.pageHeader}>
            <Text style={styles.txtValorant}>* VALORANT *</Text>
            <FlatList horizontal data={agentCategory} renderItem={renderAgentCategory}></FlatList>
        </View>
        <FlatList data={dataList} renderItem={renderCardGame}></FlatList>
    </View>
  )
}

export default GameDetailPage