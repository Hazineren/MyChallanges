import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './Details.styles'

function Details({route}){
const {id,} = route.params;


    return(
        <View>
            <Text>{id}</Text>
        </View>
    )
}



export default Details;