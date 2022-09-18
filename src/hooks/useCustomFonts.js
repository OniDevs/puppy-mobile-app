import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { type } from '../theme/fonts';

const useCustomFonts = ({ SplashScreen }) => {

  const [isFontsLoaded] = useFonts({
    [type.montserratBold.name]: type.montserratBold.value,
    [type.montserratSemiBold.name]: type.montserratSemiBold.value,
    [type.montserratMedium.name]: type.montserratMedium.value,
    [type.montserratRegular.name]: type.montserratRegular.value,
  });

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  return {
    isFontsLoaded,
    onLayoutRootView
  }
};

export { useCustomFonts };
