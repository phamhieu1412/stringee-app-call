import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import CallScreen from '../screens/CallScreen';
// import ContactsScreen from '../screens/ContactsScreen';
// import CallingScreen from '../screens/CallingScreen';
// import IncomingCallScreen from '../screens/IncomingCallScreen';
// import LoginScreen from '../screens/LoginScreen';

import HomeScreen from '../screens/HomeScreen/index';
import CallScreen from '../screens/HomeScreen/CallScreen';
import MapScreen from '../screens/MapScreen';
import StoryNews from '../components/StoryNews';
import HeaderAnimationSameAsMoMo from '../components/HeaderAnimationSameAsMoMo';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Call"
          component={CallScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StoryNews"
          component={StoryNews}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeaderAnimationSameAsMoMo"
          component={HeaderAnimationSameAsMoMo}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Call" component={CallScreen} />
          <Stack.Screen name="Calling" component={CallingScreen} />
          <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
