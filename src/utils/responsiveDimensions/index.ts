import {Dimensions, PixelRatio} from 'react-native';

const getResponsiveDimensions = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');
  const widthBaseScale = SCREEN_WIDTH / 414;
  const heightBaseScale = SCREEN_HEIGHT / 896;

  return {
    widthPixel: (size: any) =>
      Math.round(PixelRatio.roundToNearestPixel(size * widthBaseScale)),
    heightPixel: (size: any) =>
      Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale)),
    fontPixel: (size: any) =>
      Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale)),
    pixelSizeVertical: (size: any) => heightPixel(size), //use on margin and padding
    pixelSizeHorizontal: (size: any) => widthPixel(size), //use on margin and padding
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
  };
};

export const {
  widthPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} = getResponsiveDimensions();
