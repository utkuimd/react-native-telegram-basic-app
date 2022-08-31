import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMatCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const UserChat = props => {
  const userObject = props.route.params.userObject;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textDiv}>
        <Text style={styles.text}>{userObject.firstName}</Text>
        <IconFeather name="paperclip" size={25} />
        <IconFeather name="pocket" size={25} />
        <IconMatCommunity name="microphone-outline" size={25} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default UserChat;
