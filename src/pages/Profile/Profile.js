import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './Profile.styles'

function Profile(){
    
    const [image, setImage] = useState(null)
    const [images, setImages]=useState(null);

    const pickSingleWithCamera=(cropping, mediaType = 'photo') =>{
        ImagePicker.openCamera({
          cropping: cropping,
          width: 500,
          height: 500,
          includeExif: true,
          mediaType,
        })
          .then((image) => {
            console.log('received image', image);
            setImage({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            })
            setImages(null)
          })
          .catch((e) => alert(e));
      }
      const pickSingle=(cropit, circular = false, mediaType) =>{
        ImagePicker.openPicker({
          width: 500,
          height: 500,
          cropping: cropit,
          cropperCircleOverlay: circular,
          sortOrder: 'none',
          compressImageMaxWidth: 1000,
          compressImageMaxHeight: 1000,
          compressImageQuality: 1,
          compressVideoPreset: 'MediumQuality',
          includeExif: true,
          cropperStatusBarColor: 'white',
          cropperToolbarColor: 'white',
          cropperActiveWidgetColor: 'white',
          cropperToolbarWidgetColor: '#3498DB',
        })
          .then((image) => {
            console.log('received image', image);
            setImage({
                  uri: image.path,
                  width: image.width,
                  height: image.height,
                  mime: image.mime,
                });
            setImages(null);
          })
          .catch((e) => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
          });
      }

    const renderAsset=(image) =>{
        // if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
        //   return this.renderVideo(image);
        // }
    
        return renderImage(image);
    }

    const renderImage=(image)=> {
        return (
          <Image
            style={{ width: 300, height: 300 }}
            source={image}
          />
        );
      }

    return(
        <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../../../assets/bgProfile.jpg')}></Image>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => pickSingle(false)}>
                    <Image style={styles.profileImg} source={image ? image:require('../../../assets/logo.jpg')}/> 
                </TouchableOpacity>
                
                <Text style={styles.txtName}>Eren Hazine</Text>
                <Text style={styles.txtBook}>İstanbul,Türkiye</Text>
            </View>
        </View>
    )
}



export default Profile;