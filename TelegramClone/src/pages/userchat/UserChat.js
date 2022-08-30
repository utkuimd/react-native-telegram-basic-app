import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const UserChat = props => {
  const userObject = props.route.params.userObject;
  return (
    <SafeAreaView>
      <Text>{userObject.firstName}</Text>
    </SafeAreaView>
  );
};

export default UserChat;
