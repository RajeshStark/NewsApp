import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AppThemeColor, Black } from '../Utils/colors';
import { hp, wp } from '../Utils/Scale';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
                <View
                    style={{
                        backgroundColor: colors.background,
                        width: wp(80), borderRadius: 15, margin: 10, height: hp(22), overflow: 'hidden'
                    }}>

                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: data.media }}
                        style={{ height: hp(22), width: wp(80), alignItems: 'center', justifyContent: 'center' }}
                        imageStyle={{ borderBottomLeftRadius: 10 }}
                        blurRadius={1}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('WebScreen', {
                                data: data
                            })}
                            style={{ width: wp(70), height: hp(8), backgroundColor: '#dc143c', bottom: 10, position: 'absolute', borderRadius: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: hp(8), width: wp(70) - 50, alignSelf: 'flex-start', paddingHorizontal: 5 }}>
                                <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>{data.title}</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: hp(8), width: wp(12), alignSelf: 'flex-end' }}>
                                <AntDesign name="rightcircleo" size={25} color='#fff' />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                :
                null
            }
        </>
    );
}
