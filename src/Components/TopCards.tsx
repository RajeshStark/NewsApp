import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import { hp, wp } from '../Utils/Scale';


type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,
    WebScreen: object | undefined
}

type NavProps = NativeStackNavigationProp<RootStackParamsList>

export default function TopCard({ data }: any) {
    // console.log(data);
    const navigation: NavProps = useNavigation()
    const { colors } = useTheme();

    return (
        <>
            {data.media !== '' ?
                <TouchableOpacity
                    onPress={() => navigation.navigate('WebScreen', {
                        data: data
                    })}
                    style={{
                        backgroundColor: colors.background,
                        width: wp(90), borderRadius: 10, margin: 10,
                    }}>

                    <ImageBackground source={{ uri: data.media }}
                        style={{ height: hp(30), width: wp(90)}}
                        imageStyle={{borderRadius: 10}}
                        blurRadius={1}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', width: wp(100) - 130, margin: 5, color: '#fff', backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>{data.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                :
                null
            }
        </>
    );
}
