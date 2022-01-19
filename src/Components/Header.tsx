import { View, Text } from 'react-native';
import React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import { PrimaryColors } from '../Utils/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    title: string;
    goBack?: () => void;
}

type RootStackParamsList = {
    Splash: undefined;
    HomePage: undefined;
    SelectCountry: undefined,
    SearchScreen: undefined,

}

type NavProps = NativeStackNavigationProp<RootStackParamsList>

export default function Header({ title, goBack }: Props) {
    const navigation : NavProps = useNavigation()
    return (
        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: '#000', fontWeight: '700' }}>{title}</Text>
            
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <IconButton
                icon={'magnify'}
                onPress={() => navigation.navigate('SearchScreen')}
            />

            <IconButton
                icon={'cog'}
            />
            </View>
        </View>
    );
}
