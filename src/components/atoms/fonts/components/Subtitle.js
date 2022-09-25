import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Subtitle = ({ children = 'subtitle', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.subtitle, ...style }}>{children}</Text>
  );
}

export { Subtitle };
