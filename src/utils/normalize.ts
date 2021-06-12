import {Dimensions, PixelRatio} from 'react-native';
const {width} = Dimensions.get('window');

const guidelineBaseWidth = 375;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default (size: number) => {
  const newSize = moderateScale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
