import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Caption = ({ children = 'caption', style }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={{ ...themeStyles.textStyles.caption, ...style }}>{children}</Text>
  );
}

export { Caption };
