import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CardBookDetail.styles'

function CardBookDetail({book,onSelected,onClose}) {
    const [isActive, setIsActive] = useState(true);

    const changeStyle=()=>{
        console.log('you just clicked');

        setIsActive(!isActive)
    }
  return (
    <View style={{padding:15,
        width:'47.5%',
        margin:5,
        borderRadius:15,backgroundColor: isActive?'#9c64a6':'gray'}}>
        <View style={styles.headerCard}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
        <Image style={{height:35, width:35}} source={require('../../../assets/x.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSelected}>
            <View style={{alignSelf:'flex-end',
                backgroundColor:isActive?'#ffc4ff':'gray',
                padding:10,
                borderRadius:10}}>
                <Text style={styles.btnDuzenleTxt}>Düzenle</Text>
            </View>
        </TouchableOpacity>
        </View>
        
        <View style={styles.bookHeader}>
            <Image style={styles.bookImage} source={require('../../../assets/books.png')}/>
            <View style={styles.bookInfo}>
                <Text style={styles.bookName}>{book.bookName}</Text>
                <Text style={styles.bookAuthor}>{book.bookAuthor}</Text>
                <Text style={styles.bookCategory}>{book.bookCategory}</Text>
            </View>
        </View>
        <View style={styles.bottomInfo}>
            <Text style={styles.bookPage}>Toplam Sayfa: {book.bookPage}</Text>
            <Text style={styles.unReadPage}>Kalan Sayfa: {isActive? book.unReadPage:'0'}</Text>
            <TouchableOpacity onPress={changeStyle}>
                <View style={{padding:10,
                    paddingHorizontal:25,
                    alignSelf:'center',
                    marginTop:5,
                    borderRadius:10,backgroundColor: isActive?'#b2fab4' : 'gray'}}>
                    <Text style={styles.btnOkunduTxt}>Okundu</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default CardBookDetail