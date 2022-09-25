import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Body2 = ({ children = 'body2', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.body2, ...style }}>{children}</Text>
  );
}

export { Body2 };
