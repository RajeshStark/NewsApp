import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MyStack from './src/Navigation/Stack';

const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAAB6C',
    secondary: '#fff',
    background: '#000',
    text: '#D6D6D6',
    onSurface: '#D6D6D6',
  }

};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAAB6C',
    secondary: '#000',
    background: '#fff',
    text: 'grey',
    onSurface: '',
  }
};

export default function Main() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <MyStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
