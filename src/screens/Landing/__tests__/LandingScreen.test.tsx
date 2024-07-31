import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/NavigationTypes'; 
import { StackNavigationProp  } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import LandingScreen from '../LandingScreen';

type LandingScreenNavigationProp  = StackNavigationProp<RootStackParamList, 'Landing'>;

type LandingScreenRouteProp = RouteProp<RootStackParamList, 'Landing'>;

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = jest.fn();
  return Reanimated;
});

// Mock react-native-reanimated-carousel
jest.mock('react-native-reanimated-carousel', () => {
  return {
    __esModule: true,
    default: ({ children } : any) => <>{children}</>, // Mock the default export as a functional component
  };
});

describe('LandingScreen', () => {

  let navigationMock: Partial<LandingScreenNavigationProp >;

  let routeMock: LandingScreenRouteProp;

  beforeEach(() => {
    
    navigationMock = {
      navigate: jest.fn(),
      goBack: jest.fn()
    } as any;

    routeMock = {
      key: 'Landing',
      name: 'Landing',
      params: undefined, // or provide specific params if your route uses them
    };

  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('navigates to the Dashboard screen when "Log In" button is pressed', () => {
    const { getByText } = render(
      <NavigationContainer>
        <LandingScreen navigation={navigationMock as LandingScreenNavigationProp }  route={routeMock} />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Log In'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('Dashboard');
  });

  it('displays the correct language options', () => {
    const { getByText } = render(
      <NavigationContainer>
        <LandingScreen navigation={navigationMock as LandingScreenNavigationProp }  route={routeMock} />
      </NavigationContainer>
    );

    expect(getByText('NL')).toBeTruthy();
    expect(getByText('DE')).toBeTruthy();
    expect(getByText('EN')).toBeTruthy();
    expect(getByText('ER')).toBeTruthy();
  });

});
