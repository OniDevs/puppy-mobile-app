import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Label = ({ children = 'label' }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={themeStyles.textStyles.label}>{children}</Text>
  );
}

export { Label };
