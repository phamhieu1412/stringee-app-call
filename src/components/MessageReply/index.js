import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,useWindowDimensions
} from "react-native";
// import { DataStore } from "@aws-amplify/datastore";
// import { User } from "../../src/models";
// import { Auth, Storage } from "aws-amplify";
// import { S3Image } from "aws-amplify-react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AudioPlayer from "../AudioPlayer";
// import { Message as MessageModel } from "../../src/models";

const MessageReply = (props) => {
  const { message: propMessage } = props;

  const [message, setMessage] = useState(propMessage);

  const [user, setUser] = useState();
  const [isMe, setIsMe] = useState(null);
  const [soundURI, setSoundURI] = useState(null);

  const { width } = useWindowDimensions();

  // useEffect(() => {
  //   DataStore.query(User, message.userID).then(setUser);
  // }, []);

  useEffect(() => {
    setMessage(propMessage);
  }, [propMessage]);

  // useEffect(() => {
  //   if (message.audio) {
  //     Storage.get(message.audio).then(setSoundURI);
  //   }
  // }, [message]);

  // useEffect(() => {
  //   const checkIfMe = async () => {
  //     if (!user) {
  //       return;
  //     }
  //     const authUser = await Auth.currentAuthenticatedUser();
  //     setIsMe(user.id === authUser.attributes.sub);
  //   };
  //   checkIfMe();
  // }, [user]);

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
        { width: soundURI ? "75%" : "auto" },
      ]}
    >
      <View style={styles.row}>
        {message.image && (
          <View style={{ marginBottom: message.content ? 10 : 0 }}>
            {/* <S3Image
              imgKey={message.image}
              style={{ width: width * 0.65, aspectRatio: 4 / 3 }}
              resizeMode="contain"
            /> */}
          </View>
        )}
        {/* {soundURI && <AudioPlayer soundURI={soundURI} />} */}
        {!!message.content && (
          <Text style={{ color: isMe ? "black" : "white" }}>
            {message.content}
          </Text>
        )}

        {isMe && !!message.status && message.status !== "SENT" && (
          <Ionicons
            name={
              message.status === "DELIVERED" ? "checkmark" : "checkmark-done"
            }
            size={16}
            color="gray"
            style={{ marginHorizontal: 5 }}
          />
        )}
      </View>
    </View>
  );
};


export default MessageReply;