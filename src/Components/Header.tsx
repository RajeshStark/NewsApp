import { View, Text } from 'react-native';
import React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import { PrimaryColors } from '../Utils/colors';

type Props = {
    title: string;
    goBack?: () => void;
}

export default function Header({ title, goBack }: Props) {
    return (
        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: '#000', fontWeight: '700' }}>{title}</Text>
            
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <IconButton
                icon={'magnify'}
            />

            <IconButton
                icon={'cog'}
            />
            </View>
        </View>
    );
}
