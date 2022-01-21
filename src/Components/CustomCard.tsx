import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { wp } from '../Utils/Scale';


type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,
    WebScreen: object | undefined
}

type NavProps = NativeStackNavigationProp<RootStackParamsList>

export default function CustomCard({ data }: any) {
    // console.log(data);
    const navigation : NavProps = useNavigation()
    const { colors } = useTheme();

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('WebScreen', {
            data : data
        })}
            style={{
                backgroundColor: colors.background,
                width: wp(95), borderRadius: 3, margin: 10, flexDirection: 'row',
                borderWidth: 0.05,
                borderColor: '#000'
            }}>
            {data.media !== '' ?
                <Image source={{ uri: data.media }}
                    style={{ height: 100, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                />
                :
                <View  style={{ backgroundColor: colors.background,height: 100, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}/>
            }
            <Text style={{ fontSize: 18, width: wp(100) - 130, margin: 5, color: colors.text }}>{data.title}</Text>
        </TouchableOpacity>
    );
}
