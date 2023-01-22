import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'
import Rater from '../components/Rater/Rater';
import Generator from '../components/Generator/Generator';

const homeName = "Home";
const raterName = "Rater";
const generatorName = "Generator";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === raterName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (rn === generatorName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } 

                    return <IonIcons name={iconName} size={size} color={color}/>
                }
            })}>

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={raterName} component={Rater}/>
            <Tab.Screen name={generatorName} component={Generator}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}