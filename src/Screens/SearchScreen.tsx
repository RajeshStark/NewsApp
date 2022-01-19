import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Searchbar } from 'react-native-paper';
import { PrimaryColors } from '../Utils/colors';
import { hp, wp } from '../Utils/Scale';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,

}

type Props = NativeStackScreenProps<RootStackParamsList, 'SearchScreen'>

export default function SearchScreen({navigation}: Props) {
    const [search, setSearch] = useState('')
    return (
        <SafeAreaView style={{ backgroundColor: PrimaryColors.white, height: hp(100), width: wp(100) }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={PrimaryColors.white} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <IconButton
                    icon={'arrow-left'}
                    onPress={() => navigation.goBack()}
                />
                <Searchbar
                    placeholder="Search"
                    onChangeText={(txt) => setSearch(txt)}
                    value={search}
                    style={{width: wp(80)}}
                />
            </View>
        </SafeAreaView>
    );
}
