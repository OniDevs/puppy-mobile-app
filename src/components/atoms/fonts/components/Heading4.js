import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Heading4 = ({ children = 'heading4', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.heading4, ...style }}>{children}</Text>
  );
}

export { Heading4 };
