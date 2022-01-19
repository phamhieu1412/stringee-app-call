import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
      {/* <Text>asd</Text> */}
    </View>
  );
};

export default App;
