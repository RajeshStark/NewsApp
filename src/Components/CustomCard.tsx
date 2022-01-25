import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { wp } from '../Utils/Scale';
import { PrimaryColors, AppThemeColor, Black, White } from '../Utils/colors'

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
                // backgroundColor: colors.background,
                width: wp(90), 
                borderRadius: 5, 
                flexDirection: 'row',
                
                paddingVertical: 10, 
                marginVertical: 10,                
                backgroundColor: '#dcdcdc'
            }}>
            {data.media !== '' ?
                <Image source={{ uri: data.media }}
                    style={{ height: 90, width: 80, paddingHorizontal: 5, alignSelf: 'center', borderRadius: 5, marginHorizontal: 10 }}
                />
                :
                <View  style={{ backgroundColor: AppThemeColor ,height: 100, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}/>
            }
            <Text style={{ fontSize: 16, width: wp(100) - 150, paddingHorizontal: 5, color: Black, alignSelf: 'center', }}>{data.title}</Text>
        </TouchableOpacity>
    );
}
