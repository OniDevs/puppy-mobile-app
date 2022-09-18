import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Caption = ({ children = 'caption' }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={themeStyles.textStyles.caption}>{children}</Text>
  );
}

export { Caption };
