import React from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const CreateStoryComponent = ({x}) => {
  const color = x.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(69, 69, 69)', 'rgb(50, 50, 50)'],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={[
          styles.createStoryContainer,
          {
            borderTopRightRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [8, 80],
              extrapolate: 'clamp',
            }),
            borderBottomRightRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [8, 80],
              extrapolate: 'clamp',
            }),
            backgroundColor: color,
            transform: [
              {
                scaleX: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.45],
                  extrapolate: 'clamp',
                }),
              },
              {
                scaleY: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.25],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -100],
                  extrapolateRight: 'clamp',
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Image
        source={{uri: 'https://i.pravatar.cc/300?img=12'}}
        resizeMode="cover"
        style={[
          styles.profile_avatar,
          {
            borderTopLeftRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [8, 65],
              extrapolate: 'clamp',
            }),
            borderTopRightRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [8, 65],
              extrapolate: 'clamp',
            }),
            borderBottomLeftRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 65],
              extrapolate: 'clamp',
            }),
            borderBottomRightRadius: x.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 65],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                scaleX: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.25],
                  extrapolate: 'clamp',
                }),
              },
              {
                scaleY: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.217],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: x.interpolate({
                  inputRange: [0, 30, 60, 100],
                  outputRange: [0, -30, -80, -170],
                  extrapolateRight: 'clamp',
                }),
              },
              {
                translateY: x.interpolate({
                  inputRange: [0, 30, 60, 100],
                  outputRange: [0, 10, 40, 125],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.plus,
          {
            borderColor: color,
            transform: [
              {
                scale: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.5],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -65],
                  extrapolateRight: 'clamp',
                }),
              },
              {
                translateY: x.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -45],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <Text style={[styles.plusIcon]}>+</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.createStoryTxtContainer,
          {
            opacity: x.interpolate({inputRange: [0, 30], outputRange: [1, 0]}),
            transform: [
              {
                scale: x.interpolate({
                  inputRange: [0, 30],
                  outputRange: [1, 0.9],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: x.interpolate({
                  inputRange: [0, 30],
                  outputRange: [0, -30],
                  extrapolateRight: 'clamp',
                }),
              },
              {
                translateY: x.interpolate({
                  inputRange: [0, 30],
                  outputRange: [0, -25],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <Text style={styles.createStoryTxt}>Criar story</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  createStoryContainer: {
    height: 170,
    width: 100,
    borderRadius: 8,
    position: 'absolute',
    top: 12,
    left: 10,
    backgroundColor: '#454545',
  },
  profile_avatar: {
    height: 115,
    width: 100,
    position: 'absolute',
    top: 12,
    left: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  plus: {
    backgroundColor: '#3b5998',
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    position: 'absolute',
    left: 48,
    top: 115,
    borderWidth: 2,
  },
  plusIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: -3,
    left: 4,
  },
  createStoryTxtContainer: {
    width: 100,
    left: 10,
    position: 'absolute',
    bottom: 20,
  },
  createStoryTxt: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CreateStoryComponent;
