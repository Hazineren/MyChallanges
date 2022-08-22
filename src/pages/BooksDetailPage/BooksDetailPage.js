import React, { useState } from "react";
import { TouchableOpacity, View,Text, FlatList, Modal, TextInput,Image, Alert } from 'react-native';
import styles from './BooksDetailPage.styles'
import CardBookDetail from "../../Cards/CardBookDetail";
import {AppContext} from '../../contex/AppContex';


const ModalPopup = ({visible,children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    React.useEffect(()=>{
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
}





function BooksDetailPage(){
    const [bookCategory, setBookCategory] = useState()
    const [bookName, setBookName] = useState()
    const [bookAuthor, setBookAuthor] = useState()
    const [bookPage, setBookPage] = useState()
    const [unReadPage, setUnReadPage] = useState()

    const [isRender, setIsRender] = useState(false)
    const [isModalVisible, setisModalVisible] = useState(false);
    const [inputText, setInputText] = useState()
    const [editItem, setEditItem] = useState()

    const {bookCategoryDetail, setBookCategoryDetail}=React.useContext(AppContext);

    const [visible, setVisible] = useState(false)
    
    

    const onPressItem=(item)=>{
        setisModalVisible(true);
        setInputText(item.unReadPage)
        setEditItem(item.bookName)
    }

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

    const handleEditItem = (editItem)=>{
        const newData = bookCategoryDetail?.map(item=>{
            if(item.bookName == editItem){
                item.unReadPage = item.bookPage - inputText;
                return item;
            }
            return item;
        })
        setBookCategoryDetail(newData)
        setIsRender(!isRender)
    }
    const onPressSaveEdit=()=>{
        handleEditItem(editItem);
        setisModalVisible(false);
    }



    const renderBookCardDetail = ({item,index}) =><CardBookDetail  book={item} onSelected={()=>onPressItem(item)} onClose={() => {completeTask(index)}}></CardBookDetail>

    return(
        <View style={styles.container}>
            <ModalPopup visible={visible}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>setVisible(false)}>
                        <Image style={{height:50, width:50}} source={require('../../../assets/x.png')}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'black', alignSelf:'center'}}>Kitap Bilgilerini Giriniz</Text>
                    </View>
                    <TextInput onChangeText={setBookCategory} style={styles.txtInput} placeholder='Kitap Kategorisi'></TextInput>
                    <TextInput onChangeText={setBookName} style={styles.txtInput} placeholder='Kitap İsmi'></TextInput>
                    <TextInput onChangeText={setBookAuthor} style={styles.txtInput} placeholder='Kitap Yazarı'></TextInput>
                    <TextInput onChangeText={setBookPage} style={styles.txtInput} placeholder='Toplam Sayfa Sayısı'></TextInput>
                    <TouchableOpacity onPress={()=>{
                        if (!bookCategory || !bookName || !bookAuthor || !bookPage) {
                            Alert.alert('Uyarı !!','Bilgi alanları boş bırakılamaz!');
                            return;
                        } 
                        
                        setBookCategoryDetail([...bookCategoryDetail, {bookCategory:bookCategory, bookName:bookName,
                        bookAuthor:bookAuthor, bookPage:bookPage, unReadPage:bookPage}]);
                        setBookCategory(''), setBookAuthor(''), setBookName(''),setBookPage(''),setVisible(!visible)
                    }}>
                        <View style={styles.btnItemKaydet}>
                            <Text style={styles.btnKaydetTxt}>Kaydet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ModalPopup>
            <View style={styles.topContainer}>
                <Text style={styles.heyName}>Hey, Eren!</Text>
                <Text style={styles.checkYour}>Check your</Text>
                <View style={styles.topContainerBottomRow}>
                    <Text style={styles.planTxt}>Plan's for Books</Text>
                    <TouchableOpacity onPress={()=>setVisible(true)}>
                        <View style={styles.btnAdd}>
                            <Text style={styles.btnTxt}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList numColumns={2} data={bookCategoryDetail} renderItem={renderBookCardDetail} extraData={isRender}></FlatList>
            <Modal transparent visible={isModalVisible} onRequestClose={()=>setisModalVisible(false)}>
                        <View style={styles.modalBackGround}>
                        <View style={styles.modalContainer}>
                            <View style={{alignItems:'center'}}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={()=>setisModalVisible(false)}>
                                <Image style={{height:50, width:50}} source={require('../../../assets/x.png')}/>
                                </TouchableOpacity>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'black', alignSelf:'center'}}>Okunan Sayfa Sayısını giriniz</Text>
                            </View>
                                <TextInput onChangeText={(text) => setInputText(text)} style={styles.txtInput} defaultValue={inputText}></TextInput>
                                <TouchableOpacity onPress={() => onPressSaveEdit()} style={styles.touchableSave}>
                                <View style={styles.btnItemKaydet}>
                                    <Text style={styles.btnKaydetTxt}>Kaydet</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        </View>
                        
            </Modal>
        </View>
    );
}
export default BooksDetailPage;