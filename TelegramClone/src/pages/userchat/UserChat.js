import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {MessageContext} from '../../contexts/messages';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMatCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const UserChat = props => {
  const userObject = props.route.params.userObject;

  const {allMessage, setAllMessage} = useContext(MessageContext);
  const [messageId, setMessageId] = useState(0);
  const [messageText, setMessageText] = useState('');

  const userMessage = allMessage.filter(
    message => message.receiverId === userObject.id,
  );

  const sendMessage = () => {
    setMessageId(messageId + 1);
    setAllMessage([
      ...allMessage,
      {
        messageId: messageId,
        receiverId: userObject.id,
        messageText: messageText,
      },
    ]);
    setMessageText('');
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*--------HEADER---------*/}
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={goBack}>
          <IconFeather name="chevron-left" size={40} color="#1F51FF" />
          <Text style={styles.goBack_text}>Back</Text>
        </TouchableOpacity>
        <View style={styles.userDetails}>
          <View style={styles.userName}>
            <Text style={styles.firstName}>{userObject.firstName}</Text>
            <Text style={styles.lastName}>{userObject.lastName}</Text>
          </View>
          <Text style={styles.lastSeen}>{userObject.lastSeen}</Text>
        </View>
        <Image
          style={styles.profilePicture}
          source={{uri: userObject.profilePicture}}
        />
      </View>
      {/*--------BODY---------*/}
      <View style={styles.body}>
        {userMessage.map(message => {
          return (
            <View
              style={styles.sendedMessage}
              key={message.messageId.toString()}>
              <Text style={styles.sendedMessage_text}>
                {message.messageText}
              </Text>
            </View>
          );
        })}
      </View>
      {/*--------FOOTER---------*/}
      <View style={styles.footer}>
        <IconFeather name="paperclip" size={30} color="#949494" />
        <View style={styles.sendMessage}>
          <TextInput
            placeholder="Message"
            value={messageText}
            onChangeText={setMessageText}
            style={{maxWidth: '80%'}}
          />
          <IconFeather name="pocket" size={25} color="#949494" />
        </View>
        <IconMatCommunity
          name={messageText === '' ? 'microphone-outline' : 'send'}
          size={30}
          color="#949494"
          onPress={messageText !== '' ? sendMessage : null}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack_text: {
    color: '#1F51FF',
    fontSize: 18,
  },
  userDetails: {
    alignItems: 'center',
  },
  userName: {
    flexDirection: 'row',
  },
  firstName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  lastName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  lastSeen: {
    fontSize: 16,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  body: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  sendedMessage: {
    maxWidth: '80%',
    backgroundColor: '#8cff40',
    marginRight: 15,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
  },
  sendedMessage_text: {
    fontSize: 20,
    color: 'black',
  },
  footer: {
    width: '100%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  sendMessage: {
    //width: '50%',
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  message: {
    fontSize: 16,
  },
});

export default UserChat;
