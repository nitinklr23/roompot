import { StyleSheet } from 'react-native';
import { colors } from '../config/colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
});

export default globalStyles;
