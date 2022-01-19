import React from 'react';
import {StyleSheet, Animated, TouchableOpacity, View} from 'react-native';
import {compose} from 'recompose';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';

import {withSelfMeasure} from '../../utils/selfMeasureBehavior';
import buildTransform from '../../utils/buildTransform';
import {getMarginTopHeaderBar} from '../../utils';

const marginTopHeaderLocal = getMarginTopHeaderBar();

const AnimatedImage = ({
  animationRange,
  onLayoutSetMeasurements,
  elementX,
  elementY,
  elementHeight,
  elementWidth,
  distance,
}) => {
  const animateImage = buildTransform(
    animationRange,
    elementX,
    elementY,
    elementHeight,
    elementWidth,
    35,
    marginTopHeaderLocal,
    0.7,
  );
  const animateOpacity = {
    opacity: animationRange.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };
  // console.log('xxx distance', distance);
  {
    /* <AnimatedImage animationRange={animationRange} distance={40} />
      <AnimatedImage animationRange={animationRange} distance={80} />
      <AnimatedImage animationRange={animationRange} distance={120} />
      <AnimatedImage animationRange={animationRange} distance={160} /> */
  }
  return (
    <Animated.View
      style={[styles.container, animateImage]}
      onLayout={(event) => onLayoutSetMeasurements(event)}>
      <TouchableOpacity
        style={styles.blockAction}
        onPress={() => alert('xxx 1')}>
        <View style={styles.iconBlock}>
          <MaterialIcons name="login-variant" size={28} />
        </View>
        <Animated.Text style={[styles.textBlock, animateOpacity]}>
          NẠP TIỀN
        </Animated.Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.blockAction}
        onPress={() => alert('xxx 2')}>
        <View style={styles.iconBlock}>
          <MI name="money" size={28} />
        </View>
        <Animated.Text style={[styles.textBlock, animateOpacity]}>
          RÚT TIỀN
        </Animated.Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.blockAction}
        onPress={() => alert('xxx 3')}>
        <View style={styles.iconBlock}>
          <MaterialIcons name="barcode-scan" size={28} />
        </View>
        <Animated.Text style={[styles.textBlock, animateOpacity]}>
          MÃ THANH TOÁN
        </Animated.Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.blockAction}
        onPress={() => alert('xxx 4')}>
        <View style={styles.iconBlock}>
          <MaterialIcons name="credit-card-scan-outline" size={28} />
        </View>
        <Animated.Text style={[styles.textBlock, animateOpacity]}>
          QUÉT MÃ
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '100%',
    // backgroundColor: 'aqua',
    paddingHorizontal: 15,
    marginTop: 25,
  },
  blockAction: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'purple',
    width: 80,
  },
  iconBlock: {
    padding: 7,
    borderRadius: 14,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    marginBottom: 10,
  },
  textBlock: {
    fontWeight: 'bold',
    color: '#C2FFF9',
    fontSize: 14,
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

const enhance = compose(withSelfMeasure);

export default enhance(AnimatedImage);
