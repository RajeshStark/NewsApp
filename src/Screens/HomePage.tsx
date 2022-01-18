import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { IconButton } from 'react-native-paper'

export default function HomePage() {
    
    return (
        <SafeAreaView>
            <Text>HomePage Yaaa</Text>
            <IconButton
                icon="home"
                color='red'

            />
        </SafeAreaView>
    )
}
