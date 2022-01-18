import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import CountryPicker, {CountryCode, Country} from 'react-native-country-picker-modal'

export default function SelectCountry() {
    const [countryCode, setCountryCode] = useState<CountryCode>('FR')
    const [country, setCountry] = useState<Country>()
    const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
        false,
    )
    const [withFlag, setWithFlag] = useState<boolean>(true)
    const [withEmoji, setWithEmoji] = useState<boolean>(true)
    const [withFilter, setWithFilter] = useState<boolean>(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
    const [withCallingCode, setWithCallingCode] = useState<boolean>(false)
    const onSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }

    return (
        <View>
            <CountryPicker
                {...{
                    countryCode,
                    withFilter,
                    withFlag,
                    withCountryNameButton,
                    withAlphaFilter,
                    withCallingCode,
                    withEmoji,
                    onSelect,
                }}
                visible
            />
        </View>
    );
}
