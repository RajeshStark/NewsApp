import React from 'react';
import { FlatList, Alert, TouchableOpacity, Text, View } from 'react-native';
import { PrimaryColors } from '../Utils/colors';


const data = [
  { value: 'news' },
  { value: 'sport' },
  { value: 'tech' },

]

export default function MyTabs() {
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }): any =>
        <TouchableOpacity onPress={() => Alert.alert(item.value)}
        style={{margin: 10}}>
          <Text style={{fontSize: 16, color: 'grey'}}>
            {item.value}
          </Text>
          <View style={{height: 3, backgroundColor: PrimaryColors.Primary, width: 40}} />
        </TouchableOpacity>
      }
    />
  );
}