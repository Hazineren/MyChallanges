import {} from 'react-native'
import * as React from 'react'
import LoginPageScreen from './src/pages/LoginPage/LoginPage'
import SignUpPage from './src/pages/SignUpPage/SignUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigation/TabNavigator';
import { AppContextWrapper } from './src/contex/AppContex';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <AppContextWrapper>
   <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='LoginPage' component={LoginPageScreen}/>
          <Stack.Screen name='SignUpPage' component={SignUpPage}></Stack.Screen>
          <Stack.Screen name='MainPage' component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  </AppContextWrapper>
 


    //<LoginPageScreen/>
  )
}

export default App;