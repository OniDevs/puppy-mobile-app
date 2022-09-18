import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { type } from './src/theme/fonts';
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

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    [type.montserratBold.name]: type.montserratBold.value,
    [type.montserratSemiBold.name]: type.montserratSemiBold.value,
    [type.montserratMedium.name]: type.montserratMedium.value,
    [type.montserratRegular.name]: type.montserratRegular.value,
  });
  const scheme = useColorScheme();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={scheme === 'dark' ? PuppyThemeDark : PuppyTheme}>{
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Heading1 />
        <Heading2 />
        <Heading3 />
        <Heading4 />
        <Subtitle />
        <Label />
        <Body1 />
        <Body2 />
        <Caption />
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
