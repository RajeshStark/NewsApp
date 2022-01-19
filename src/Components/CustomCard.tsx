import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
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

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('WebScreen', {
            data : data.link
        })}
            style={{
                width: wp(95), borderRadius: 3, margin: 10, flexDirection: 'row',
                borderWidth: 0.05,
                borderColor: '#000'
            }}>
            {data.media !== '' ?
                <Image source={{ uri: data.media }}
                    style={{ height: 100, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                />
                :
                <View  style={{ backgroundColor: 'grey',height: 100, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}/>
            }
            <Text style={{ fontSize: 18, width: wp(100) - 120, margin: 5 }}>{data.title}</Text>
        </TouchableOpacity>
    );
}
