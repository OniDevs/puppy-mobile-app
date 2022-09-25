import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Heading3 = ({ children = 'heading3', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.heading3, ...style }}>{children}</Text>
  );
}

export { Heading3 };
