import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const widthDevice = Dimensions.get('window').width;

export const isIOS = Platform.OS === 'ios';

export const hasNotch = DeviceInfo.hasNotch();

export const getMarginTopHeaderBar = () => {
  console.log('xxx hasNotch', hasNotch)
  let marginTop = 0;
  if (isIOS) {
    if (hasNotch) {
      marginTop = 40;
    } else {
      marginTop = 30;
    }
  } else {
    if (hasNotch) {
    } else {
      marginTop = 20;
    }
  }

  return marginTop;
};
