import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { PuppyTheme, PuppyThemeDark } from './src/theme/themes';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Subtitle,
  Label,
  Body1,
  Body2,
  Caption
} from './src/components/atoms/fonts';
import { useCustomFonts } from './src/hooks/useCustomFonts';
import { PuppyButton } from './src/components/atoms/PuppyButton/';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const scheme = useColorScheme();
  const { isFontsLoaded, onLayoutRootView } = useCustomFonts({ SplashScreen });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={scheme === 'dark' ? PuppyThemeDark : PuppyTheme}>{
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text>Open up App.js to start working on your app!!!: {scheme}</Text>
        <Heading1 />
        <Heading2 />
        <Heading3 />
        <Heading4 />
        <Subtitle />
        <Label />
        <Body1 />
        <Body2 />
        <Caption />
        <PuppyButton rightIcon={'arrow-right'}>
          {'Click Me'}
        </PuppyButton>
        <PuppyButton themeStyle='secondary' leftIcon={'arrow-left'}>
          {'Click Me'}
        </PuppyButton>
        <PuppyButton themeStyle='iconPrimary' rightIcon={'chevron-right'} isIconButton={true}>
          {'Click Me'}
        </PuppyButton>
        <PuppyButton themeStyle='whiteBase'>
          {'Click Me'}
        </PuppyButton>
        <PuppyButton themeStyle='primaryRectangle'>
          {'Click Me'}
        </PuppyButton>
        <StatusBar style="auto" />
      </View>
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
