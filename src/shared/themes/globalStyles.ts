import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from './colors';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/responsiveDimensions';
import {fontSize} from './fontSize';
import Font from './fonts';

interface styles {
  container: ViewStyle;
  containerBgWhite: ViewStyle;
  rowCenter: ViewStyle;
  fdRow: ViewStyle;
  marginLeft10: ViewStyle;
  marginLeft20: ViewStyle;
  marginRight10: ViewStyle;
  marginRight20: ViewStyle;
  shadowButton: ViewStyle;
  borderButton: ViewStyle;
  errorText: TextStyle;
  marginHorizontal10: ViewStyle;
  marginHorizontal20: ViewStyle;
  marginHorizontal30: ViewStyle;
  marginHorizontal40: ViewStyle;
  paddingHorizontal10: ViewStyle;
  paddingHorizontal20: ViewStyle;
  paddingHorizontal30: ViewStyle;
  paddingHorizontal40: ViewStyle;
  paddingVertical10: ViewStyle;
  paddingVertical20: ViewStyle;
  paddingVertical30: ViewStyle;
  paddingVertical40: ViewStyle;
  marginVertical5: ViewStyle;
  marginVertical10: ViewStyle;
  marginVertical20: ViewStyle;
  marginVertical30: ViewStyle;
  marginVertical40: ViewStyle;
  textButton: TextStyle;
  textBlack: TextStyle;
  textWhite: TextStyle;
  caption_10_400: TextStyle;
  caption_10_500: TextStyle;
  caption_11_400: TextStyle;
  caption_12_400: TextStyle;
  caption_12_500: TextStyle;
  caption_12_800: TextStyle;
  caption_14_400: TextStyle;
  caption_14_500: TextStyle;
  caption_14_600: TextStyle;
  caption_14_700: TextStyle;
  caption_14_800: TextStyle;
  caption_16_500: TextStyle;
  caption_16_700: TextStyle;
  caption_18_500: TextStyle;
  caption_18_600: TextStyle;
  caption_18_700: TextStyle;
  caption_20_700: TextStyle;
  caption_24_700: TextStyle;
  caption_24_900: TextStyle;
  caption_20_900: TextStyle;
  caption_22_900: TextStyle;
  caption_28_700: TextStyle;
}
const globalStyles = StyleSheet.create<styles>({
  container: {
    flex: 1,
  },
  containerBgWhite: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rowCenter: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  fdRow: {flexDirection: 'row',gap:heightPixel(5),alignItems:"center"},

  marginLeft10: {marginLeft: pixelSizeHorizontal(10)},
  marginLeft20: {marginLeft: pixelSizeHorizontal(20)},

  marginRight10: {marginRight: pixelSizeHorizontal(10)},
  marginRight20: {marginRight: pixelSizeHorizontal(20)},

  marginHorizontal10: {marginHorizontal: pixelSizeHorizontal(10)},
  marginHorizontal20: {marginHorizontal: pixelSizeHorizontal(20)},
  marginHorizontal30: {marginHorizontal: pixelSizeHorizontal(30)},
  marginHorizontal40: {marginHorizontal: pixelSizeHorizontal(40)},

  paddingHorizontal10: {paddingHorizontal: pixelSizeHorizontal(10)},
  paddingHorizontal20: {paddingHorizontal: pixelSizeHorizontal(20)},
  paddingHorizontal30: {paddingHorizontal: pixelSizeHorizontal(30)},
  paddingHorizontal40: {paddingHorizontal: pixelSizeHorizontal(40)},
  paddingVertical10: {paddingVertical: pixelSizeVertical(10)},
  paddingVertical20: {paddingVertical: pixelSizeVertical(20)},
  paddingVertical30: {paddingVertical: pixelSizeVertical(30)},
  paddingVertical40: {paddingVertical: pixelSizeVertical(40)},

  marginVertical5: {marginVertical: pixelSizeVertical(5)},
  marginVertical10: {marginVertical: pixelSizeVertical(10)},
  marginVertical20: {marginVertical: pixelSizeVertical(20)},
  marginVertical30: {marginVertical: pixelSizeVertical(30)},
  marginVertical40: {marginVertical: pixelSizeVertical(40)},

  shadowButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: heightPixel(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.white,
    width: '94%',
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: '3%',
  },
  borderButton: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: heightPixel(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.primary,
    width: '94%',
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: '3%',
  },
  textButton: {
    color: Colors.white,
    fontSize: fontSize.font_20,
    fontFamily: Font.inter_extra_bold_800,
  },
  textBlack: {
    color: Colors.black,
    fontSize: fontSize.font_20,
    fontFamily: Font.inter_extra_bold_800,
  },
  textWhite: {
    color: Colors.white,
    fontSize: fontSize.font_24,
    fontFamily: Font.inter_extra_bold_800,
  },
  errorText: {
    color: Colors.red,
    marginTop: heightPixel(10),
    marginLeft: pixelSizeHorizontal(5),
    marginRight: pixelSizeHorizontal(10),
  },
  caption_10_400: {
    fontSize: fontSize.font_10,
    fontFamily: Font.inter_semi_bold_600,
  },
  caption_10_500: {
    fontSize: fontSize.font_10,
    fontFamily: Font.inter_medium_500,
  },
  caption_11_400: {
    fontSize: fontSize.font_11,
    fontFamily: Font.inter_regular_400,
  },
  caption_12_400: {
    fontSize: fontSize.font_12,
    fontFamily: Font.inter_regular_400,
  },
  caption_12_500: {
    fontSize: fontSize.font_12,
    fontFamily: Font.inter_medium_500,
  },
  caption_12_800: {
    fontSize: fontSize.font_12,
    fontFamily: Font.inter_extra_bold_800,
  },
  caption_14_400: {
    fontSize: fontSize.font_14,
    fontFamily: Font.inter_regular_400,
  },
  caption_14_500: {
    fontSize: fontSize.font_14,
    fontFamily: Font.inter_medium_500,
  },
  caption_14_600: {
    fontSize: fontSize.font_14,
    fontFamily: Font.inter_semi_bold_600,
  },
  caption_14_700: {
    fontSize: fontSize.font_14,
    fontFamily: Font.inter_bold_700,
  },
  caption_14_800: {
    fontSize: fontSize.font_14,
    fontFamily: Font.inter_extra_bold_800,
  },
  caption_16_500: {
    fontSize: fontSize.font_16,
    fontFamily: Font.inter_medium_500,
  },
  caption_16_700: {
    fontSize: fontSize.font_16,
    fontFamily: Font.inter_bold_700,
  },
  caption_18_500: {
    fontSize: fontSize.font_18,
    fontFamily: Font.inter_medium_500,
  },
  caption_18_600: {
    fontSize: fontSize.font_18,
    fontFamily: Font.inter_semi_bold_600,
  },
  caption_18_700: {
    fontSize: fontSize.font_18,
    fontFamily: Font.inter_bold_700,
  },
  caption_20_700: {
    fontSize: fontSize.font_20,
    fontFamily: Font.inter_bold_700,
  },
  caption_24_700: {
    fontSize: fontSize.font_24,
    fontFamily: Font.inter_bold_700,
  },
  caption_24_900: {
    fontSize: fontSize.font_24,
    fontFamily: Font.inter_black_900,
  },
  caption_22_900: {
    fontSize: fontSize.font_22,
    fontFamily: Font.inter_black_900,
  },
  caption_20_900: {
    fontSize: fontSize.font_20,
    fontFamily: Font.inter_black_900,
  },
  caption_28_700: {
    fontSize: fontSize.font_28,
    fontFamily: Font.inter_bold_700,
  },
});
export default globalStyles;
