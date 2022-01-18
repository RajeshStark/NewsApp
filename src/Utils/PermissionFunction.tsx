import { PermissionsAndroid, Alert } from "react-native";

type Props = {
    title: string;
    message: string
}

export async function requestLocationPermission() 
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'News App',
        'message': 'We detecting your country to show you related news'
      } 
    ) 
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return 'yes'
    } else {
      return 'no'
    }
  } catch (err) {
    console.warn(err)
  }
}