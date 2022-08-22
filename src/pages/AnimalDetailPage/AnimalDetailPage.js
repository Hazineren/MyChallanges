import React, { useState } from "react";
import { View,Text, TouchableOpacity, FlatList, Modal,Image, TextInput, Alert } from 'react-native';
import styles from './AnimalDetailPage.styles';
import CardAnimalDetail from '../../Cards/CardAnimalDetail';
import { AppContext } from "../../contex/AppContex";



const ModalPopup = ({visible,children}) =>{
    const [showModal, setShowModal] = React.useState(visible);
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal=()=>{
        if(visible){
            setShowModal(true);
        }else{
            setShowModal(false)
        }
    }
    
    return <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
            <View style={styles.modalContainer}>{children}</View>
        </View>
    </Modal>
};


function AnimalDetailPage(){
    const [patTur,setPatTur]=useState("")
    const [patName,setPatName]=useState()
    const [missionName,setMissionName]=useState()
    const [missionStartTime,setMissionStartTime]=useState()
    const [missionEndTime,setMissionEndTime]=useState()

    const {patCategoryDetail, setPatCategoryDetail}=React.useContext(AppContext)

    const [visible, setVisible] = useState(false);
    const completeTask =(index)=>{
        Alert.alert("Uyarı!!",'Seçili görevi silmek istediğiniz emin misiniz ?',
        [{
            text:'Cancel',
            onPress:()=>{
                
            },
            style:'cancel'
        },
        {text:'Yes',
    onPress:()=>{
            let itemsCopy = [...bookCategoryDetail];
            itemsCopy.splice(index,1);
            setBookCategoryDetail(itemsCopy);
            Alert.alert('Başarılı','Silme İşlemi Gerçekleşti !');
            }
        }    
    ])
        
    }
    
    const renderPatCardDetail = ({item})=><CardAnimalDetail pat={item} onClose={() => {completeTask(index)}}></CardAnimalDetail>
   

    return(
        <View style={styles.bottomContainer}>
            <ModalPopup visible={visible}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=> setVisible(false)}>
                            <Image style={{height:50, width:50}} source={require('../../../assets/x.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:20,fontWeight:'bold', color:'black',alignSelf:'center'}}>Pet Görevi İçin Bilgileri Giriniz !</Text>
                    </View>
                    <TextInput onChangeText={ setPatTur } style={styles.txtInput} placeholder="Pat Türü"></TextInput>
                    <TextInput onChangeText={setPatName} style={styles.txtInput} placeholder="Pat Name"></TextInput>
                    <TextInput onChangeText={setMissionName} style={styles.txtInput} placeholder="Mission Name"></TextInput>
                    <TextInput onChangeText={setMissionStartTime} style={styles.txtInput} placeholder="Mission Start Time"></TextInput>
                    <TextInput onChangeText={setMissionEndTime} style={styles.txtInput} placeholder="Misson End Time"></TextInput>
                    <TouchableOpacity onPress={()=>{
                        if (!patTur || !patName || !missionName || !missionStartTime || !missionEndTime) {
                            Alert.alert('Uyarı !!','Bilgi alanları boş bırakılamaz!');
                            return;
                        } setPatCategoryDetail([...patCategoryDetail,  {patCategory:patTur,
                            patName:patName,missionName:missionName,missionStartTime:missionStartTime,missionEndTime:missionEndTime,patId:'2'}
                            ]);console.log(patTur,"mnbnmöç");
                            setPatTur(''),setPatName(''),setMissionName(''),setMissionStartTime(''),setMissionEndTime('')
                            setVisible(!visible)}}>
                        <View style={styles.btnItemKaydet}>
                            <Text style={styles.btnKaydetTxt}>Kaydet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ModalPopup>
            <View style={styles.topContainer}>
                <Text style={styles.callName}>Hey, Eren!</Text>
                <Text style={styles.txtCheck}>Check your</Text>
                <View style={styles.topContainerBottom}>
                    <Text style={styles.txtPlanAnimal}>Plan's for Animals</Text>
                    <TouchableOpacity onPress={()=> setVisible(true)}>
                        <View style={styles.addBtn}>
                            <Text style={styles.addBtnTxt}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <FlatList data={patCategoryDetail} renderItem={renderPatCardDetail}></FlatList> 
        </View>
    )
}


export default AnimalDetailPage;