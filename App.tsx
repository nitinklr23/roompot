import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import AppNavigator from './navigations/AppNavigator';
import { Entypo } from '@expo/vector-icons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { useCustomFonts } from './config/fonts';

import * as SplashScreen from 'expo-splash-screen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetProvider } from './context/BottomSheetContext'; // Adjust path as necessary




import { RootStackParamList } from './types/NavigationTypes'; 

const Stack = createNativeStackNavigator<RootStackParamList>();


SplashScreen.preventAutoHideAsync();


export default function App() {

  const fontsLoaded = useCustomFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing" >
              <Stack.Screen name="Landing" component={LandingScreen}  options={{ headerShown: false }}/>
              <Stack.Screen name="Login" 
                component={LoginScreen}  
                options={({ navigation }): NativeStackNavigationOptions  => ({
                  presentation: 'modal',
                  headerTitle: '', 
                  headerStyle: {
                    backgroundColor: '#ffffff',
                  },
                  headerShadowVisible: false, // applied here
                  headerBackTitleVisible: false,
                  headerRight: () => (
                    <Entypo name="cross" size={24} color="black" onPress={() => navigation.goBack()}/>
                  ),
                })}
              />
              <Stack.Screen name="Dashboard" component={AppNavigator}  options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    </GestureHandlerRootView>
  );
}
