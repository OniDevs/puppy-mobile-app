import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { textStyles } from '../styles';

const PuppyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  themeStyles: {
    textStyles: {
      ...textStyles
    }
  }
};

const PuppyThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
  themeStyles: {
    textStyles: {
      ...textStyles
    }
  }
};

export { PuppyTheme, PuppyThemeDark };
