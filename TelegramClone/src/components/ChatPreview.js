import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import user_list from '../contacts-list.json';

const ChatPreview = ({receiverID}) => {
  const userTakeMessage = user_list.find(user => user.id === receiverID);
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={{uri: userTakeMessage.profilePictureURL}}
      />
      <View style={styles.userName}>
        <Text style={styles.firstName}>{userTakeMessage.firstName}</Text>
        <Text style={styles.lastName}>{userTakeMessage.lastName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userName: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
  },
  firstName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  lastName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
});

export default ChatPreview;
