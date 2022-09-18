import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Subtitle = ({ children = 'subtitle' }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={themeStyles.textStyles.subtitle}>{children}</Text>
  );
}

export { Subtitle };
