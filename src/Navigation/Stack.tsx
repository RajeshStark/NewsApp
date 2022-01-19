import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Screens/HomePage";
import SplashScreen from "../Screens/SplashScreen";
import SelectCountry from "../Screens/OnBoarding/SelectCountry";
import MyTabs from "./TopBar";
import SearchScreen from "../Screens/SearchScreen";
import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";
import WebScreen from "../Screens/WebScreen";


type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,
    WebScreen: { data: Readonly<string> } | undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function MyStack() {
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if (state.isConnected) {
                setTimeout(() => {
                    setSplash(false)
                }, 3000);
            }
            else {
                Alert.alert('Please Turn On Internet')
            }
        });



    }, [])

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {
                splash ?
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    :
                    <>
                        <Stack.Screen name="HomePage" component={HomePage} />
                        <Stack.Screen name="SelectCountry" component={SelectCountry} />
                        <Stack.Screen name="SearchScreen" component={SearchScreen} />
                        <Stack.Screen name="WebScreen" component={WebScreen} />
                    </>
            }
        </Stack.Navigator>
    )
}