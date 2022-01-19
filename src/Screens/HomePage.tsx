import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Alert } from 'react-native'
import { useTheme } from 'react-native-paper'
import CustomCard from '../Components/CustomCard'
import Header from '../Components/Header'
import MyTabs from '../Navigation/TopBar'
import { PrimaryColors } from '../Utils/colors'
import { hp, wp } from '../Utils/Scale'
import { GetData } from '../Utils/Services'


const categoryData = [
    { value: 'news' },
    { value: 'sport' },
    { value: 'tech' },
    { value: 'world' },
    { value: 'finance' },
    { value: 'politics' },
    { value: 'economics' },
    { value: 'entertainment' },
    { value: 'beauty' },
    { value: 'travel' },
    { value: 'music' },
    { value: 'food' },
    { value: 'science' }
]


export default function HomePage() {
    const [data, setData] = useState<Array<object>>();
    const [category, setCategory] = useState('news')
    const { colors } = useTheme();

    useEffect(() => {
        GetData(category)
            .then((res) => {
                // console.log(res);
                setData(res.articles)
            })
            .catch((err) => {
                console.log({ err });

            })
    }, [category])


    return (
        <SafeAreaView style={{ backgroundColor: colors.background, height: hp(100), width: wp(100) }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.background} />
            <Header title='News App' />
            <View>
                <FlatList
                    data={categoryData}
                    style={{ height: 50 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }): any =>
                        <TouchableOpacity onPress={() => setCategory(item.value)}
                            style={{ margin: 10, height: 50, }}>
                            <Text style={{ fontSize: 16, color: category === item.value ? colors.primary : colors.text, }}>
                                {item.value}
                            </Text>
                            <View style={{ height: 3, backgroundColor: category === item.value ? colors.primary : colors.background, width: 40 }} />
                        </TouchableOpacity>
                    }
                />
            </View>

            <View>
                <FlatList
                    data={data}
                    style={{marginBottom: 20}}
                    renderItem={({ item }): any =>
                        <CustomCard data={item} />
                    }
                    keyExtractor={(item: any) => item._id}
                />
            </View>


        </SafeAreaView>
    )
}
