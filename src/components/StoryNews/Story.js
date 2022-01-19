import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import overlay from '../../assets/images/overlayStory.png';

const Story = ({content, id}) => {
  return (
    <View>
      <Image
        source={{uri: `https://picsum.photos/id/${id * 10}/500/500`}}
        style={styles.imageStory}
        resizeMode="cover"
      />
      <Image source={overlay} style={styles.overlay} resizeMode="cover" />
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: `https://i.pravatar.cc/150?img=${id}`}}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{content?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStory: {
    height: 170,
    width: 100,
    backgroundColor: '#ccc',
    marginLeft: 5,
    borderRadius: 8,
  },
  overlay: {
    height: 170,
    width: 100,
    marginLeft: 5,
    borderRadius: 8,
    position: 'absolute',
  },
  avatarContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    position: 'absolute',
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    left: 12,
    top: 12,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  name: {
    color: '#FFF',
    position: 'absolute',
    bottom: 12,
    left: 24,
    fontSize: 12,
    fontWeight: 'bold',
    width: 70,
  },
});

export default Story;
