import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { fontFamily } from './src/utils/fonts';
import { textStyles } from './src/utils/styles';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    [fontFamily.montserratBold.name]: fontFamily.montserratBold.value,
    [fontFamily.montserratSemiBold.name]: fontFamily.montserratSemiBold.value,
    [fontFamily.montserratMedium.name]: fontFamily.montserratMedium.value,
    [fontFamily.montserratRegular.name]: fontFamily.montserratRegular.value,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Text style={textStyles.heading1}>heading1</Text>
      <Text style={textStyles.heading2}>heading2</Text>
      <Text style={textStyles.heading3}>heading3</Text>
      <Text style={textStyles.heading4}>heading4</Text>
      <Text style={textStyles.subtitle}>subtitle</Text>
      <Text style={textStyles.label}>label</Text>
      <Text style={textStyles.body1}>body1</Text>
      <Text style={textStyles.body2}>body2</Text>
      <Text style={textStyles.caption}>caption</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    ...textStyles.heading1
  }
});
