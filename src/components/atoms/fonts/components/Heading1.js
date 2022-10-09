import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Heading1 = ({ children = 'heading1', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.heading1, ...style }}>{children}</Text>
  );
}

export { Heading1 };
