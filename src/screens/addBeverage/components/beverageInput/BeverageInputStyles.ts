import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    borderWidth: 0
  },

  beverageInput: {
    flex: 1,
    height: 50,
  },
});

const beverageInputBase = styles.baseStyle;

const beverageInput = [styles.baseStyle, styles.beverageInput];

export { beverageInputBase, beverageInput };
