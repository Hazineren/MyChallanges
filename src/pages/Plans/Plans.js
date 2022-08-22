import React, { useContext,useEffect, useState } from "react";
import { View, Text, ScrollView,Image, Button, TouchableOpacity } from 'react-native';
import { AppContext } from "../../contex/AppContex";
import styles from './Plans.styles'

function Plans(){

    const {patCategoryDetail, setPatCategoryDetail}=useContext(AppContext);
    const {bookCategoryDetail, setBookCategoryDetail}=useContext(AppContext);
    const {homeDetail, setHomeDetail}=useContext(AppContext)
    const [counter, setCounter] = useState(0);
    const [rCounter, setRCounter] = useState(0);
    const [gCounter, setGCounter] = useState(0);
    const [bCounter, setBCounter] = useState(0);

    const numbers = [0,1,2,3];
    const sayilar = [0,1,2];
    useEffect(() => {
        handleWorkName();
    
      return () => {}
    },)
    let counterKitchen=0;
    let counterRoom=0;
    let counterGarden=0;
    let counterBanyo=0;
    const listItem =homeDetail.map(item=>item.workList)[0];
    const listItem2 = homeDetail.map(item=>item.workList)[1];
    const listItem3 = homeDetail.map(item=>item.workList)[2];
    const listItem4 = homeDetail.map(item=>item.workList)[3];
    const listItemMain = homeDetail.map(item=>item.id);
    
    const handleWorkName=()=>{
        console.log(listItem,'ne buuyyyyyyy')
        numbers.map(number=> {sayilar.map(sayi=>{console.log(number,'  numberımmmmm'),console.log(sayi,' Sayim')
            if(listItemMain[number]==1){
                if((listItem[sayi].id==0) && (listItem[sayi].status==false)){
                    counterKitchen=counterKitchen+1;
                    return counterKitchen
                }   
                if((listItem[sayi].id==1) && (listItem[sayi].status==false)){
                    counterKitchen=counterKitchen+1;
                    return counterKitchen
                }
                if((listItem[sayi].id==2) && (listItem[sayi].status==false)){
                    counterKitchen=counterKitchen+1;
                    return counterKitchen;
                }
                return counterKitchen
            }else if(listItemMain[number]==2){
                if((listItem2[sayi].id==0) && (listItem2[sayi].status==false)){
                    counterRoom=counterRoom+1;
                    return counterRoom
                }   
                if((listItem2[sayi].id==1) && (listItem2[sayi].status==false)){
                    counterRoom=counterRoom+1;
                    return counterRoom
                }
                if((listItem2[sayi].id==2) && (listItem2[sayi].status==false)){
                    counterRoom=counterRoom+1;
                    return counterRoom;
                }
                return counterRoom
            }else if(listItemMain[number]==3){
                if((listItem3[sayi].id==0) && (listItem3[sayi].status==false)){
                    counterGarden=counterGarden+1;
                    return counterGarden
                }   
                if((listItem3[sayi].id==1) && (listItem3[sayi].status==false)){
                    counterGarden=counterGarden+1;
                    return counterGarden
                }
                if((listItem3[sayi].id==2) && (listItem3[sayi].status==false)){
                    counterGarden=counterGarden+1;
                    return counterGarden;
                }
                return counterGarden
            }else if(listItemMain[number]==4){
                if((listItem4[sayi].id==0) && (listItem4[sayi].status==false)){
                    counterBanyo=counterBanyo+1;
                    return counterBanyo
                }   
                if((listItem4[sayi].id==1) && (listItem4[sayi].status==false)){
                    counterBanyo=counterBanyo+1;
                    return counterBanyo
                }
                if((listItem4[sayi].id==2) && (listItem4[sayi].status==false)){
                    counterBanyo=counterBanyo+1;
                    return counterBanyo;
                }
                return counterBanyo
            }
        })})
        setCounter(counterKitchen)
        setRCounter(counterRoom)
        setGCounter(counterGarden)
        setBCounter(counterBanyo)
        return counterKitchen;
    }
    console.log(counterKitchen,'ssssssssssssssssss')

    return(
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.pageHeader}>
                <Text style={styles.headerTxt}>Aktif İş Sayıları</Text>
                <Image style={styles.imgPlansHeader} source={require('../../../assets/plansHeaderImg.jpg')}></Image>
            </View>
            <View style={styles.pageBody}>
                <View style={styles.cardPlan}>
                    <Text style={styles.cardTxtHeader}>Evcil Hayvan</Text>
                    <View style={styles.cardDetail}>
                    <Text style={styles.cardTxt}>* Küçük Dostumuz Seni Bekliyor.. *</Text>
                    <Text style={styles.cardTxt}>Aktif Plan Sayısı: {patCategoryDetail.length}</Text>
                    </View>
                </View>
                <View style={styles.cardPlan}>
                    <Text style={styles.cardTxtHeader}>Kitap Listen</Text>
                    <View style={styles.cardDetail}>
                        <Text style={styles.cardTxt}>* Galiba bir kaç sayfa okunmamış.. *</Text>
                        <Text style={styles.cardTxt}>Aktif Plan Sayısı: {bookCategoryDetail.length}</Text>
                    </View>
                </View>
                <View style={styles.cardPlan}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.cardTxtHeader}>Ev İşleri</Text>
                    <TouchableOpacity onPress={()=>handleWorkName()}>
                        <View style={styles.btnHomeWork}>
                            <Text style={styles.btnTxt}>Yenile</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={styles.cardDetail}>
                        <Text style={styles.cardTxt}>* Ev ahıra dönmüş olabilir.. *</Text>
                        <View style={styles.txtHomeWork}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.cardTxt}>* Mutfaktaki İş Sayısı: </Text>
                            <Text style={[styles.cardTxt,{fontWeight:'bold'}]}>{counter}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.cardTxt}>* Salondaki İş Sayısı: </Text>
                            <Text style={[styles.cardTxt,{fontWeight:'bold'}]}>{rCounter}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.cardTxt}>* Bahçedeki İş Sayısı: </Text>
                            <Text style={[styles.cardTxt,{fontWeight:'bold'}]}>{gCounter}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.cardTxt}>* Banyodaki İş Sayısı: </Text>
                            <Text style={[styles.cardTxt,{fontWeight:'bold'}]}>{bCounter}</Text>
                            </View>
                            
                            
                            
                        </View>
                        
                    </View>
                </View>
            </View>
            </View>
            
            
        </ScrollView>
        
    )
}



export default Plans;