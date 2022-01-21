import 'react-native-get-random-values';
import { View, Text } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { hp, wp } from '../Utils/Scale';

type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,
    WebScreen: { data: Readonly<string> } | undefined
}

type Props = NativeStackScreenProps<RootStackParamsList, 'WebScreen'>

export default function WebScreen({ navigation, route }: Props) {
    const { data } : any = route.params;
    console.log("data web", data);


    return (
        <View style={{flex: 1}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <IconButton
                    icon={'arrow-left'}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{fontSize: 18, fontWeight:'700'}}>{data.author}</Text>
            </View>
            <WebView
                source={{ uri: data.link }}
                // style={{flex: 1}}
                style={{ width: wp(100), height: hp(90) }}
                androidHardwareAccelerationDisabled={false}
            />
        </View>
    );
}
