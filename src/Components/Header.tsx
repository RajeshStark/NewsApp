import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, IconButton, useTheme } from 'react-native-paper';
import { PrimaryColors, AppThemeColor, Black } from '../Utils/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
    title: string;
}

type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined
}

type NavProps = NativeStackNavigationProp<RootStackParamsList>

export default function Header({ title }: Props) {
    const navigation : NavProps = useNavigation()
    const { colors } = useTheme();
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <AntDesign name="appstore-o" size={25} color={Black} />
            {/* <View> */}
            <Text style={{ fontSize: 22, color: AppThemeColor, fontWeight: '700', alignSelf: 'center', justifyContent: 'center' }}>{title}</Text>   
            {/* <View style={{height: 3, backgroundColor: '#E00430', width: title.length * 5, marginVertical: 5, borderRadius: 5 }} />          */}
            {/* </View> */}
            <IconButton
            color={Black}
            style={{alignSelf: 'flex-end'}}
                icon={'magnify'}
                onPress={() => navigation.navigate('SearchScreen')}
            />
        </View>
    );
}
