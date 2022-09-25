import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Heading2 = ({ children = 'heading2', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.heading2, ...style }}>{children}</Text>
  );
}

export { Heading2 };
