import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './../types/NavigationTypes'; 
import { Dimensions } from 'react-native';
import { colors } from '../config/colors';
import Button from '../components/Button';
import { fonts } from './../config/fonts';


type LandingScreenProps = StackScreenProps<RootStackParamList, 'Landing'>;

const SCREEN_WIDTH = Dimensions.get('window').width;


const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  
  const slides = [
    {
      title: 'What is there to do today?',
      desc: 'Browse the activities at the park and in the surrounding area'
    },
    {
      title: 'Reception in your pocket!',
      desc: 'All the important information for a wonderful holiday'
    },
    {
      title: 'Feeling like something tasty?',
      desc: 'Pick your favourite from the menu'
    }
  ]

  const [slideIndex, setSlideIndex] = React.useState(0);

 
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
          <View style={styles.carousel}>
            <Carousel<{ title: string, desc: string }>
              data={slides}
              loop
              renderItem = {({item}) => (
                <View style={styles.slide}>
                  <Text style={styles.slideText}>{item.title}</Text>
                  <Text style={styles.slideDesc}>{item.desc}</Text>
                </View>
              )}
              onProgressChange={(_, absoluteProgress) => {
                setSlideIndex(Math.round(absoluteProgress));
              }}
              width={SCREEN_WIDTH}
            />
          </View>
          <View style={styles.dot}>
                <AnimatedDotsCarousel
                    length={slides.length}
                    currentIndex={slideIndex}
                    maxIndicators={slides.length}
                    interpolateOpacityAndColor={false}
                    activeIndicatorConfig={{
                      color: colors.black,
                      margin: 3,
                      opacity: 1,
                      size: 12,
                    }}
                    inactiveIndicatorConfig={{
                      color: colors.black,
                      margin: 3,
                      borderColor: colors.black,
                      borderWidth: 1,
                      opacity: 0.5,
                      size: 12,
                    }}
                    decreasingDots={[
                      {
                      config: { 
                        color: colors.black,
                        margin: 3,
                        opacity: 0.5,
                        size: 12,
                      },
                      quantity: 1,
                      },
                      {
                      config: { 
                        color: colors.black,
                        margin: 3,
                        borderColor: colors.black,
                        borderWidth: 1,
                        opacity: 1,
                        size: 12,
                      },
                      quantity: 1,
                      },
                    ]}
                />
          </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomContainer}>
          <View style={styles.bs}>
            <Text style={styles.welcomeText}>Welcome To Roompot</Text>
          </View>
          <View style={styles.bs}>
              <Button 
                title='Log In'
                style={{
                  ...styles.loginBtn,
                }}
                textStyle={styles.buttonText} 
                onPress={() => navigation.navigate('Dashboard')}>
            </Button>
          </View>
          <View style={styles.bs}>
              <Button 
                  title='Find Your Park'
                  style={{
                    ...styles.findBtn,
                  }}
                  textStyle={
                    { ...styles.buttonText,
                      ...styles.blueTxt
                    }
                  } 
                  onPress={() => {}}>
              </Button>
          </View>
          <View style={styles.bs}>
            <View style={styles.langContainer}>
              <Text style={styles.lnTxt}>NL</Text>
              <Text style={styles.lnTxt}>DE</Text>
              <Text style={{
                ...styles.lnTxt,
                ...styles.blueTxt
              }}>EN</Text>
              <Text style={styles.lnTxt}>ER</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 0.6,
    backgroundColor: '#E0F0EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 200
  },
  dot: {
    height: 25, 
    justifyContent: 'center', 
    alignContent: 'center',
    marginTop: 10
  },
  slide: {
    height: 200,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideText: {
    fontSize: 36,
    color: colors.black,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.semiBold
  },
  slideDesc: {
    fontSize: 18,
    color: '#292929',
    textAlign: 'center',
    fontFamily: fonts.medium
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  bs: {
    flex: 1, 
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  welcomeText: {
    fontSize: 24,
    color: colors.black,
    lineHeight: 32,
    fontWeight: 'bold',
    fontFamily: fonts.bold
  },
  loginBtn: {
    backgroundColor: '#f16d22', 
    paddingVertical: 5,
    paddingHorizontal: 25,
    height: 50,
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 3,
    width: '90%',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  findBtn: {
    borderColor: '#56aaae',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    height:50,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 3,
    width: '90%',
    shadowRadius: 3,
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: fonts.semiBold,
    fontWeight: 'bold',
  },

  lnTxt: {
    fontFamily: fonts.semiBold,
    fontWeight: 'bold',
    fontSize: 16
  },

  blueTxt: {
    color: '#56aaae'
  },

  langContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10
  },
  
});

export default LandingScreen;
