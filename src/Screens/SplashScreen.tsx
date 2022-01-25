import React, {useEffect} from 'react'
import { View, Text, StatusBar } from 'react-native'
import { AppThemeColor, PrimaryColors } from '../Utils/colors'
import { hp, wp } from '../Utils/Scale'

export default function SplashScreen() {

    return (
        <View style={{
            backgroundColor: AppThemeColor, 
            height: hp(100), width: wp(100),
            alignItems:'center',
            justifyContent:'center'
            }}>
            <StatusBar hidden/>
            <Text style={{fontSize: 36, fontWeight:'bold', color:PrimaryColors.white}}>News App</Text>
        </View>
    )
}
