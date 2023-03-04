import React from 'react';
import {Dimensions, PixelRatio, Text} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const ResponsiveFont = fontSize => {
  const scale = Math.min(deviceWidth / 320, deviceHeight / 640);
  const responsiveFont = PixelRatio.roundToNearestPixel(fontSize * scale);
  return responsiveFont;
};
