import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { buttonStyles, textStyles } from '../styles';
import colors from './colors';

const PuppyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  themeStyles: {
    textStyles: {
      ...textStyles
    },
    buttonStyles: {
      ...buttonStyles
    },
  }
};

const PuppyThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colors
  },
  themeStyles: {
    textStyles: {
      ...textStyles
    },
    buttonStyles: {
      ...buttonStyles
    },
  }
};

export { PuppyTheme, PuppyThemeDark };
