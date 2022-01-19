import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { wp } from '../Utils/Scale';

export default function CustomCard({ data }: any) {
    console.log(data.media);

    return (
        <TouchableOpacity
            style={{
                width: wp(95), borderRadius: 3, margin: 10, flexDirection: 'row',
                borderWidth: 0.05,
                borderColor: '#000'
            }}>
            <Image source={{ uri: data.media }}
                style={{ height: 100, width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
            />
            <Text style={{ fontSize: 18, width: wp(100) - 120, margin: 5 }}>{data.title}</Text>
        </TouchableOpacity>
    );
}
