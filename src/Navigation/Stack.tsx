import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Screens/HomePage";
import SplashScreen from "../Screens/SplashScreen";
import SelectCountry from "../Screens/OnBoarding/SelectCountry";
import MyTabs from "./TopBar";
import SearchScreen from "../Screens/SearchScreen";

type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function MyStack() {
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 3000);
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
                        
                    </>
            }
        </Stack.Navigator>
    )
}