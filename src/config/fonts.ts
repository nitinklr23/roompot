
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

import { useFonts } from 'expo-font';


const useCustomFonts = () => {

  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  return fontsLoaded;
};

const fonts = {
  regular: 'Quicksand_400Regular',
  bold: 'Quicksand_700Bold',
  medium: 'Quicksand_500Medium',
  light: 'Quicksand_300Light',
  semiBold: 'Quicksand_600SemiBold'
};

export { fonts, useCustomFonts };
