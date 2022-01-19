import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Searchbar, useTheme } from 'react-native-paper';
import { PrimaryColors } from '../Utils/colors';
import { hp, wp } from '../Utils/Scale';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GetSearchData } from '../Utils/Services';
import CustomCard from '../Components/CustomCard';

type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,

}

type Props = NativeStackScreenProps<RootStackParamsList, 'SearchScreen'>

export default function SearchScreen({navigation}: Props) {
    const [search, setSearch] = useState('');
    const [data, setData] = useState<Array<object>>()
    const { colors } = useTheme();

    const SearchData = (txt : string) => {
        setSearch(txt);
        GetSearchData(txt)
        .then((res) => {
            setData(res.articles)
        })
        .catch((err) => {
            console.log(err);
            
        })

    }
    return (
        <SafeAreaView style={{ backgroundColor: colors.background, height: hp(100), width: wp(100) }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.background} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <IconButton
                    icon={'arrow-left'}
                    onPress={() => navigation.goBack()}
                />
                <Searchbar
                    placeholder="Search"
                    onChangeText={(txt) => SearchData(txt)}
                    value={search}
                    style={{zIndex: 10,width: wp(80), backgroundColor: colors.background, color: colors.text}}
                />
            </View>

            <FlatList
                    data={data}
                    style={{marginBottom: 20, marginTop: 10}}
                    renderItem={({ item }): any =>
                        <CustomCard data={item} />
                    }
                    keyExtractor={(item: any) => item._id}
                />
        </SafeAreaView>
    );
}
