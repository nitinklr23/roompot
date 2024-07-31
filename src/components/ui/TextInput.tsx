import React, { forwardRef } from 'react';
import { TextInput as RNTextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';


interface TextInputPropsWithIcon extends TextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

// Create a functional component with forwardRef
const TextInput = forwardRef<RNTextInput, TextInputPropsWithIcon>(
  ({ icon, error, touched, ...otherProps }, ref) => {
    const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 48,
          borderRadius: 8,
          borderColor: validationColor,
          borderWidth: StyleSheet.hairlineWidth,
          padding: 8
        }}
      >
        <View style={{ padding: 8 }}>
          <Icon name={icon as any} color={validationColor} size={16} />
        </View>
        <View style={{ flex: 1 }}>
          <RNTextInput
            ref={ref}
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(34, 62, 75, 0.7)"
            {...otherProps}
          />
        </View>
      </View>
    );
  }
);

export default TextInput;
