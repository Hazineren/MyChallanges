import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainPageScreen from "../pages/MainPage";
import ProfileScreen from "../pages/Profile/Profile";
import PlansScreen from "../pages/Plans/Plans";
import AnimalDetailScreen from "../pages/AnimalDetailPage/AnimalDetailPage";
import BooksDetailPage from "../pages/BooksDetailPage/BooksDetailPage";
import GameDetailPage from "../pages/GameDetailPage/GameDetailPage";
import HomeDetailPage from "../pages/HomeDetailPage/HomeDetailPage";
import PlantPage from "../pages/PlantPage/PlantPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="MainsPage" component={MainPageScreen}></Stack.Screen>
            <Stack.Screen name="AnimalDetailPage" component={AnimalDetailScreen} options={{
                    title:'Plans for Animals',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'orange'},
                    headerStyle:{backgroundColor:'#5c007a'},
                    headerTintColor:'orange'
                }}></Stack.Screen>
            <Stack.Screen name="BooksDetailPage" component={BooksDetailPage} options={{
                    title:'Plans for Books',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'orange'},
                    headerStyle:{backgroundColor:'#5c007a'},
                    headerTintColor:'orange'
                }}></Stack.Screen>
            <Stack.Screen name="GameDetailPage" component={GameDetailPage} options={{
                    title:'Valorant Details',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'orange'},
                    headerStyle:{backgroundColor:'#3e2723'},
                    headerTintColor:'orange'
                }}></Stack.Screen>
            <Stack.Screen name="HomeDetailPage" component={HomeDetailPage} options={{
                    title:'Home Details',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'#000063'},
                    headerStyle:{backgroundColor:'#9e00c5'},
                    headerTintColor:'#000063'
                }}></Stack.Screen> 
                <Stack.Screen name="PlantDetailPage" component={PlantPage} options={{
                    title:'Plant Details',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'#000063'},
                    headerStyle:{backgroundColor:'#4db6ac'},
                    headerTintColor:'#000063'
                }}></Stack.Screen>   
        </Stack.Navigator>
    )

}


const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{backgroundColor:'#1c313a'},
        tabBarInactiveTintColor:'#fff',
        tabBarActiveTintColor:'yellow'}}>
            <Tab.Screen options={{headerStyle:{backgroundColor:'#1c313a'},
                                 headerTintColor:'#ffcdd2', headerTitleAlign:'center',
                                 headerTitle:'Categorys', tabBarIcon: ({color,size}) => (
                                    <Ionicons name='home-outline' color={color} size={size}></Ionicons>
                                 )}}
                                 name="MainPage" component={MainStack}></Tab.Screen>
            <Tab.Screen name="ProfilePage" component={ProfileScreen} options={{tabBarIcon:({color,size})=>(
                <Ionicons name="person-outline" color={color} size={size}></Ionicons>
            )}}></Tab.Screen>
            <Tab.Screen name="PlansPage" component={PlansScreen} options={{tabBarIcon:({color,size})=>(
                <Ionicons name="grid-outline" color={color} size={size}></Ionicons>
            )}}></Tab.Screen>
        </Tab.Navigator>
    )

}


export default TabNavigator;