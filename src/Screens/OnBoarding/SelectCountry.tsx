import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { requestLocationPermission } from '../../Utils/PermissionFunction';
import * as RNLocalize from "react-native-localize";

export default function SelectCountry() {
    const [Country, setCountry] = useState<string>()

    useEffect(() => {
        requestLocationPermission()
            .then((res) => {
                console.log({ res });
                if (res === 'yes') {
                    console.log(RNLocalize.getLocales());
                    const country = RNLocalize.getLocales();
                    const Code = country[0].countryCode;
                    setCountry(Code)
                }

            })
    }, [])

 

    return (
        <View>
            <Text>select country {Country}</Text>
        </View>
    );
}
