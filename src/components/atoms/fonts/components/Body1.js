import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Body1 = ({ children = 'body1', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.body1, ...style }}>{children}</Text>
  );
}

export { Body1 };
