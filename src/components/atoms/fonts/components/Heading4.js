import * as React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Heading4 = ({ children = 'heading4' }) => {
  const { themeStyles } = useTheme();

  return (
    <Text style={themeStyles.textStyles.heading4}>{children}</Text>
  );
}

export { Heading4 };
