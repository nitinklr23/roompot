import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Home: undefined;
  Dashboard: undefined;
  navigation: any;
};


export type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;