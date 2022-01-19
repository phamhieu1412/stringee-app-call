import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {StringeeClient} from 'stringee-react-native';
// import FCM from 'react-native-fcm';
// import {FCMEvent} from 'react-native-fcm';

const user1 =
  'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS3NNMVdQT3lwYTJvSWxnYWRtWDFuMnBhdkRCWE5WeVdqLTE2NDEzNjc1MjciLCJpc3MiOiJTS3NNMVdQT3lwYTJvSWxnYWRtWDFuMnBhdkRCWE5WeVdqIiwiZXhwIjoxNjQxNDEwNzI3LCJ1c2VySWQiOiJ1c2VyX2lkXzEifQ.EqDm-NmMgVkU6aOvgU20oodHOzco1aUBg8iz8S6GEG4';
const user2 =
  'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS3NNMVdQT3lwYTJvSWxnYWRtWDFuMnBhdkRCWE5WeVdqLTE2NDEzNjk0NTMiLCJpc3MiOiJTS3NNMVdQT3lwYTJvSWxnYWRtWDFuMnBhdkRCWE5WeVdqIiwiZXhwIjoxNjQxNDEyNjUzLCJ1c2VySWQiOiJ1c2VyX2lkXzIifQ.j1Rb3fuUJN2mqm5j6i978hG1I7MqpRWFzZDuvZ7Hg94';

const iOS = Platform.OS === 'ios' ? true : false;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myUserId: '',
      callToUserId: '',
      hasConnected: false,
    };

    this.clientEventHandlers = {
      onConnect: this._clientDidConnect, // The client connects to Stringee server
      onDisConnect: this._clientDidDisConnect, // The client disconnects from Stringee server
      onFailWithError: this._clientDidFailWithError, // The client fails to connects to Stringee server
      onRequestAccessToken: this._clientRequestAccessToken, // Access token is expired. A new access token is required to connect to Stringee server
      onIncomingCall: this._callIncomingCall, // IncomingCall event
      // onIncomingCall2: this._callIncomingCall2, // IncomingCall2 event
      // onCustomMessage: this._clientReceiveCustomMessage, // Receive custom message
    };
  }

  async componentDidMount() {
    await this.refs.client.connect(user1);
    this.setState({clientId: this.refs.client.getId()});
    console.log('xxxx getId', this.refs.client.getId());
  }

  // Connection
  _clientDidConnect = ({userId}) => {
    console.log('xxx _clientDidConnect - ' + userId);
    this.setState({
      myUserId: userId,
      hasConnected: true,
    });

    // if (!iOS) {
    //   AsyncStorage.getItem('isPushTokenRegistered').then((value) => {
    //     if (value !== 'true') {
    //       FCM.getFCMToken().then((token) => {
    //         this.refs.client.registerPush(
    //           token,
    //           true,
    //           true,
    //           (result, code, desc) => {
    //             if (result) {
    //               AsyncStorage.multiSet([
    //                 ['isPushTokenRegistered', 'true'],
    //                 ['token', token],
    //               ]);
    //             }
    //           },
    //         );
    //       });
    //     }
    //   });

    //   FCM.on(FCMEvent.RefreshToken, (token) => {
    //     this.refs.client.registerPush(
    //       token,
    //       true,
    //       true,
    //       (result, code, desc) => {},
    //     );
    //   });
    // }
  };

  _clientDidDisConnect = () => {
    console.log('xxx _clientDidDisConnect');
    this.setState({
      myUserId: '',
      hasConnected: false,
    });
  };

  _clientDidFailWithError = () => {
    console.log('xxx _clientDidFailWithError');
  };

  _clientRequestAccessToken = () => {
    console.log('xxx _clientRequestAccessToken');
    // Token để kết nối tới Stringee server đã hết bạn. Bạn cần lấy token mới và gọi connect lại ở đây
    // this.refs.client.connect("NEW_TOKEN");
  };

  // Call events
  _callIncomingCall = ({
    callId,
    from,
    to,
    fromAlias,
    toAlias,
    callType,
    isVideoCall,
    customDataFromYourServer,
  }) => {
    console.log(
      'xxx IncomingCallId',
      callId,
      from,
      to,
      fromAlias,
      toAlias,
      isVideoCall,
      callType,
      customDataFromYourServer,
    );

    this.props.navigation.navigate('Call', {
      clientId: this.state.clientId,
      callId: callId,
      from: from,
      to: to,
      isOutgoingCall: false,
      isVideoCall: isVideoCall,
    });
  };

  // Action
  _onVoiceCallButtonPress = () => {
    console.log('xxx _onVoiceCallButtonPress');
    Keyboard.dismiss();
    if (this.state.callToUserId != '' && this.state.hasConnected) {
      this.props.navigation.navigate('Call', {
        clientId: this.state.clientId,
        from: this.state.myUserId,
        to: this.state.callToUserId,
        isOutgoingCall: true,
        isVideoCall: false,
      });
    }
  };

  _onVideoCallButtonPress = () => {
    Keyboard.dismiss();
    console.log('xxx _onVideoCallButtonPress');
    if (this.state.callToUserId != '' && this.state.hasConnected) {
      this.props.navigation.navigate('Call', {
        from: this.state.myUserId,
        to: this.state.callToUserId,
        isOutgoingCall: true,
        isVideoCall: true,
      });
    }
  };

  _onMapButtonPress = () => {
    this.props.navigation.navigate('Map');
  };

  _onStoryButtonPress = () => {
    this.props.navigation.navigate('StoryNews');
  };

  _onHeaderAnimationButtonPress = () => {
    this.props.navigation.navigate('HeaderAnimationSameAsMoMo');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native wrapper for Stringee mobile SDK!
        </Text>

        <Text style={styles.info}>Logged in as: {this.state.myUserId}</Text>

        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          autoCapitalize="none"
          value={this.state.callToUserId}
          placeholder="Make a call to userId"
          onChangeText={(text) => this.setState({callToUserId: text})}
        />

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onVoiceCallButtonPress}>
            <Text style={styles.text}>Voice Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this._onVideoCallButtonPress}>
            <Text style={styles.text}>Video Call</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onMapButtonPress}>
            <Text style={styles.text}>Map</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this._onStoryButtonPress}>
            <Text style={styles.text}>StoryNews</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onHeaderAnimationButtonPress}>
            <Text style={styles.text}>HeaderAsMoMo</Text>
          </TouchableOpacity>
        </View>

        {this.state.clientId !== null && (
          <StringeeClient
            ref="client"
            eventHandlers={this.clientEventHandlers}
            clientId={this.state.clientId}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'red',
  },

  text: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },

  input: {
    height: 35,
    width: 280,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#ECECEC',
  },

  button: {
    width: 120,
    height: 40,
    marginTop: 40,
    paddingTop: 10,
    // paddingBottom: ,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  buttonView: {
    width: 280,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
