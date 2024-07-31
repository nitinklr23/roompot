import React, { useState, useCallback, useMemo, useRef } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Button, Modal, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'

import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';

import ActivitiesScreen from '../screens/Activity/ActivitiesScreen';

import FacilitiesScreen from '../screens/Facility/FacilitiesScreen';

import MyBottomSheet from '../components/common/BottomSheet/BottomSheet'

import MapScreen from '../screens/Map/MapScreen';

import { EvilIcons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';


type RootTabParamList = {
  Home: undefined;
  Map: undefined;
  Activities: undefined;
  Facilities: undefined;
  More: undefined;
};

interface TabButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator: React.FC = () => {

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const tabBarHeight = 80;

  const TabButton: React.FC<TabButtonProps> = ({ onPress, children }) => {
    return (
      <TouchableOpacity
        style={styles.tabButton}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.tabContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#56aaae', 
            tabBarInactiveTintColor: '#636363',
            tabBarLabelStyle: {
              fontSize: 14, // Custom font size for the tab labels
            },
            tabBarButton: (props) => (
              <TabButton
                {...props}
                onPress={(event) => {
                  if (props.onPress) {
                    setBottomSheetVisible(false);
                    props.onPress(event); // Call props.onPress with the event
                  }
                }}
              />
            ),
          })}
      >
        <Tab.Screen name="Home" 
         component={HomeScreen} 
         options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => ( <AntDesign name="home" color={color} size={size} /> )
        }}/>
        <Tab.Screen 
            name="Map" 
            component={MapScreen}
            options={{
              tabBarLabel: 'Map',
              tabBarIcon: ({ color, size }) => ( <Feather name="map" color={color} size={size} /> )
            }} 
        />
        <Tab.Screen 
          name="Activities" 
          component={ActivitiesScreen} 
          options={{
            tabBarLabel: 'Activities',
            tabBarIcon: ({ color, size }) => ( <Entypo name="calendar" color={color} size={size} /> )
          }} 
        />
        <Tab.Screen 
            name="Facilities" 
            component={FacilitiesScreen} 
            options={{
              tabBarLabel: 'Facilities',
              tabBarIcon: ({ color, size }) => ( <EvilIcons name="star" color={color} size={size} /> )
            }}
        />
        <Tab.Screen 
            name="More" 
            component={FacilitiesScreen} 
            options={{
              tabBarLabel: 'More',
              tabBarIcon: ({ color, size }) => ( <Feather name="more-horizontal" color={color} size={size} /> )
            }}
            listeners={() => ({
              tabPress: (e) => {
                setBottomSheetVisible(!isBottomSheetVisible);
                e.preventDefault();
              }
            })}
        />
        </Tab.Navigator>
        { isBottomSheetVisible && <MyBottomSheet bottomInset={tabBarHeight}></MyBottomSheet> }
    </View>
  );
};



const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
