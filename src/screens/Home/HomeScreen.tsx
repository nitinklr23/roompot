import React, { useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';

const HEADER_HEIGHT = 200;
const COLLAPSED_HEADER_HEIGHT = 80;

const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, COLLAPSED_HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT - COLLAPSED_HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: HEADER_HEIGHT, opacity: headerOpacity }]}>
              <ImageBackground
                  resizeMode="cover"
                  source={{ uri: 'https://cdn.roompot.com/assets/imgs/holidayparks/the-netherlands/limburg-nl/weerterbergen/park-header/1536x629/2060055.jpg' }}
                  style={styles.backgroundImage}
               >
                <View style={{'flex': 1, 'justifyContent': 'center', 'width': '100%'}}>
                  <Text>Test</Text>
                </View>
               </ImageBackground>
           
      </Animated.View>
      <ScrollView
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
      >
        <View style={styles.content}>
          {[...Array(30).keys()].map(i => (
            <Text key={i} style={styles.contentText}>Item {i + 1}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover', // or 'contain'
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    textAlign: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  contentText: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default App;
