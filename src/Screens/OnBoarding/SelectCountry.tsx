import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { requestLocationPermission } from '../../Utils/PermissionFunction';
import * as RNLocalize from "react-native-localize";

export default function SelectCountry() {

    useEffect(() => {
        requestLocationPermission()
            .then((res) => {
                console.log({ res });
                if (res === 'yes') {
                    console.log(RNLocalize.getLocales());
                }

            })
    }, [])

 

    return (
        <View>
            <Text>hi</Text>
        </View>
    );
}
