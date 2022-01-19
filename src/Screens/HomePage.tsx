import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Alert } from 'react-native'
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
        <SafeAreaView style={{ backgroundColor: PrimaryColors.white, height: hp(100), width: wp(100) }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={PrimaryColors.white} />
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
                            <Text style={{ fontSize: 16, color: category === item.value ? PrimaryColors.Primary : 'grey', }}>
                                {item.value}
                            </Text>
                            <View style={{ height: 3, backgroundColor: category === item.value ? PrimaryColors.Primary : '#fff', width: 40 }} />
                        </TouchableOpacity>
                    }
                />
            </View>

            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }): any =>
                        <CustomCard data={item} />
                    }
                    keyExtractor={(item: any) => item._id}
                />
            </View>


        </SafeAreaView>
    )
}
