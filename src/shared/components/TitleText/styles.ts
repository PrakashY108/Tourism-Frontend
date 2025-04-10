
import {StyleSheet, TextStyle} from 'react-native';
import { Colors } from '../../themes/colors';

interface style {
  text1: TextStyle;
}

const styles = StyleSheet.create<style>({
  text1: {color: Colors.black},
});

export default styles;
