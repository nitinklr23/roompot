import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './../../types/NavigationTypes'; 
import { Dimensions } from 'react-native';
import { colors } from '../../config/colors';
import Button from '../../components/ui/Button';
import styles from './Styles'

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
          <View style={styles.dot} testID= 'animated-dot'>
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



export default LandingScreen;
