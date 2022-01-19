import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Searchbar } from 'react-native-paper';
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
        <SafeAreaView style={{ backgroundColor: PrimaryColors.white, height: hp(100), width: wp(100) }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={PrimaryColors.white} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <IconButton
                    icon={'arrow-left'}
                    onPress={() => navigation.goBack()}
                />
                <Searchbar
                    placeholder="Search"
                    onChangeText={(txt) => SearchData(txt)}
                    value={search}
                    style={{width: wp(80)}}
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
