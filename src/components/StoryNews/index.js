import React, {useRef, createRef} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
} from 'react-native';

import CreateStoryComponent from './CreateStoryComponent';
import Story from './Story';
import {stories} from './storiesData';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const StoryNews = () => {
  const scrollStories = createRef();
  const x = useRef(new Animated.Value(0)).current;

  const onScrollEndDrag = (e) => {
    const {contentOffset} = e.nativeEvent;
    if (contentOffset.x < 50) {
      scrollStories.current.scrollToIndex({
        animated: true,
        index: 0,
        viewOffset: 120,
      });
    } else if (contentOffset.x < 100) {
      scrollStories.current.scrollToIndex({
        animated: true,
        index: 0,
        viewOffset: 0,
      });
    }
  };

  const renderItemStories = ({item, index}) => {
    return <Story content={item} id={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Facebook Stories</Text>
      </View>
      <View style={styles.storiesContainer}>
        <AnimatedFlatList
          data={stories}
          ref={scrollStories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 112}}
          keyExtractor={(item) => String(item?.id)}
          scrollEventThrottle={16}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
            useNativeDriver: false,
          })}
          onScrollEndDrag={onScrollEndDrag}
          renderItem={renderItemStories}
        />
        <CreateStoryComponent x={x} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  titleContainer: {
    backgroundColor: '#323232',
    padding: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  storiesContainer: {
    backgroundColor: '#323232',
    paddingVertical: 12,
    marginTop: 12,
  },
});

export default StoryNews;
