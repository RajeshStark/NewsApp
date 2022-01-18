import { Dimensions, Platform } from "react-native";

//Screen Constatnts
const SCREEN_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height <= 550 ? 667 : Dimensions.get('window').height;
const SCREEN_WIDTH = 375;

const { height, width } = Dimensions.get("window");

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
const  scale =  function(units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

export function wp(percentage: number) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

export function hp(percentage: number) {
  const value = (percentage * height) / 100;
  return Math.round(value);
}

const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

const device = {height, width}

export { verticalScale, scale, device };
