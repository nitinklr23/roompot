import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../config/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle; 
}

const Button: React.FC<ButtonProps> = ({ title, style, textStyle, ...props }) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  } as ViewStyle,
  text: {
    color: 'white',
    textAlign: 'center',
  } as TextStyle,
});

export default Button;
