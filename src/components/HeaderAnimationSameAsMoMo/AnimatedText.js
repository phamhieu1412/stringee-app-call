import React from 'react';
import {
  StyleSheet,
  Animated,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {compose} from 'recompose';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {withSelfMeasure} from '../../utils/selfMeasureBehavior';
import buildTransform from '../../utils/buildTransform';
import {widthDevice, getMarginTopHeaderBar, isIOS} from '../../utils';

const marginTopHeaderLocal = getMarginTopHeaderBar();

const AnimatedText = ({
  animationRange,
  onLayoutSetMeasurements,
  elementX,
  elementY,
  elementHeight,
  elementWidth,
}) => {
  // const animateText = buildTransform(
  //   animationRange,
  //   elementX,
  //   elementY,
  //   elementHeight,
  //   elementWidth,
  //   20,
  //   70,
  //   0.7,
  // );
  const animateOpacity = {
    opacity: animationRange.interpolate({
      inputRange: [0, 0.4, 0.6, 0.8, 1],
      outputRange: [1, 0.4, 0.1, 0, 0],
    }),
  };
  const animateOpacityIconSearch = {
    opacity: animationRange.interpolate({
      inputRange: [0, 0.4, 0.6, 0.8, 1],
      outputRange: [0, 0, 0, 0.4, 1],
    }),
  };

  return (
    <Animated.View
      // style={[styles.container, animateText, animateOpacity]}
      style={[styles.container]}
      onLayout={(event) => onLayoutSetMeasurements(event)}>
      {/* This is Animated Text */}
      <View style={styles.leftHeaderBar}>
        <Animated.View
          style={[
            {
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 10,
              marginRight: 7,
              borderWidth: 1,
              borderColor: '#dbdbdb',
            },
            animateOpacityIconSearch,
          ]}>
          <TouchableOpacity onPress={() => alert('xxx 0')}>
            <IonIcons name="search" size={18} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            styles.leftHeaderBar,
            animateOpacity,
            {
              transform: [
                {
                  scaleX: animationRange.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.5, 0.1],
                  }),
                },
              ],
            },
          ]}>
          <IonIcons
            name="search"
            size={18}
            style={{position: 'absolute', top: 5, left: 4}}
          />
          <TextInput
            placeholder="Tìm kiếm"
            placeholderTextColor="#c1b9a5"
            style={[
              styles.inputLeftHeader,
              {
                width: '85%',
              },
            ]}
          />
        </Animated.View>
      </View>

      {/* Right header bar */}
      <View style={styles.rightHeaderBar}>
        <View style={styles.notificationRightHeader}>
          <MaterialIcons name="bell-outline" size={24} />
        </View>
        <View style={styles.avatarRightHeader}>
          <Image
            source={{
              uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/169A8/production/_120248529_gettyimages-157037529.jpg',
            }}
            style={styles.imageAvatar}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 7,
    // backgroundColor: 'yellow',
    marginTop: marginTopHeaderLocal, // khoang cách tới phần lồi lên của notch
  },
  leftHeaderBar: {
    width: widthDevice * 0.77,
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },
  inputLeftHeader: {
    borderWidth: 1,
    paddingVertical: isIOS ? 5 : 2,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    color: 'white',
  },
  rightHeaderBar: {
    flexGrow: 1,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatarRightHeader: {
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    width: 25,
    height: 25,
  },
  imageAvatar: {
    width: 23,
    height: 23,
    borderRadius: 15,
  },
});

const enhance = compose(withSelfMeasure);

export default enhance(AnimatedText);
