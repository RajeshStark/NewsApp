import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { useTheme } from 'react-native-paper'
import CustomCard from '../Components/CustomCard'
import Header from '../Components/Header'
import TopCard from '../Components/TopCards'
import MyTabs from '../Navigation/TopBar'
import { PrimaryColors, AppThemeColor, Black, White } from '../Utils/colors'
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
    const [data, setData] = useState<Array<object>>([]);
    const [topData, setTopData] = useState<Array<object>>([]);
    const [category, setCategory] = useState('news')
    const { colors } = useTheme();

    useEffect(() => {
        GetData(category)
            .then((res) => {
                const top = res.articles.splice(0, 9);
                setTopData(top);
                setData(res.articles);

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
                    style={{ height: 50, paddingHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }): any =>
                        <TouchableOpacity onPress={() => setCategory(item.value)}
                            style={{ margin: 10, height: 50, }}>
                            <Text style={{ fontSize: 18, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 5, fontWeight: '600', textTransform: 'capitalize', letterSpacing: 1, alignSelf: 'center',
                            color: category === item.value ? AppThemeColor : '#808080'
                             }}>
                                {item.value}
                            </Text>
                            <View style={{ height: 3, left: 8, backgroundColor: category === item.value ? AppThemeColor : White, width: item.value.length * 5 }} />
                        </TouchableOpacity>
                    }
                />
            </View>

            <FlatList
                nestedScrollEnabled
                data={['']}
                renderItem={(item) =>
                    <>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Black, paddingHorizontal: 30, paddingVertical: 10 }}>Top {category === 'news' ? 'news' : category + ' stories'} </Text>
                        <View style={{paddingHorizontal: 20}}>
                            <FlatList
                                data={topData}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{ marginBottom: 20 }}
                                renderItem={({ item }): any =>
                                    <TopCard data={item} />
                                }
                                keyExtractor={(item: any) => item._id}
                            />
                        </View>

                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Black, paddingHorizontal: 30, paddingVertical: 10 }}>Latest {category === 'news' ? '' : category} News</Text>
                        <View style={{ paddingHorizontal: 20, overflow: 'hidden' }}>
                            <FlatList
                                data={data}
                                style={{ paddingVertical: 20, }}
                                renderItem={({ item }): any =>
                                    <CustomCard data={item} />
                                }
                                keyExtractor={(item: any) => item._id}
                            />
                        </View>
                    </>
                }
            />


        </SafeAreaView>
    )
}
