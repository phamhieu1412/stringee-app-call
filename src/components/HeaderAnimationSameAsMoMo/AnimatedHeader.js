import React from 'react';
import {StyleSheet, View, Animated, ImageBackground, Image} from 'react-native';

import AnimatedText from './AnimatedText';
import AnimatedImage from './AnimatedImage';

const HeaderBackground = ({animationRange}) => {
  const animateHeader = {
    transform: [
      {
        translateY: animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100],
        }),
      },
    ],
  };

  // return <Animated.View style={[styles.headerBackground, animateHeader]} />;
  return (
    <Animated.View style={[styles.headerBackground, animateHeader]}>
      <ImageBackground
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/169A8/production/_120248529_gettyimages-157037529.jpg',
        }}
        resizeMode="cover"
        style={styles.headerBackground}
      />
    </Animated.View>
  );
};

const AnimatedHeader = ({animationRange}) => (
  <View style={styles.container}>
    <HeaderBackground animationRange={animationRange} />
    <Animated.View style={styles.containerAnimation}>
      <AnimatedText animationRange={animationRange} />
      <AnimatedImage animationRange={animationRange} />
    </Animated.View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 3,
    width: '100%',
  },
  containerAnimation: {
    position: 'absolute',
    flex: 1,
    zIndex: 2,
    height: 200, // bằng height của HeaderPlaceholder
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  headerBackground: {
    position: 'absolute',
    flex: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 2,
  },
});

export default AnimatedHeader;
