import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.page}>
      <MapView
        style={{flex: 1}}
        mapType="satelliteFlyover"
        initialRegion={{
          latitude: 20.982221,
          longitude: 105.781834,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        userInterfaceStyle="dark"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',

    borderRadius: 10,

    position: 'absolute',
    right: 10,
    top: 100,
  },
});

export default MapScreen;
