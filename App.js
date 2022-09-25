import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native';
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
        <Pressable
          style={({ pressed }) => [{
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 24,
            paddingRight: 24,
            height: 40,
            backgroundColor: '#112620'
          }]}>
          <Label style={{ selectable: false, color: '#F4F5F6' }}>{'Press Me'}</Label>
        </Pressable>
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
