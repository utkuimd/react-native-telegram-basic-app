import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ContactList from '../../components/ContactList';
import ContactListSeparator from '../../components/ContactListSeparator';
import contacts_list from '../../contacts-list.json';
import IconFeather from 'react-native-vector-icons/Feather';

const Contacts = props => {
  const renderContactList = ({item}) => (
    <ContactList contact={item} gotoUserChat={goToUserChat} />
  );
  const renderSeparator = () => <ContactListSeparator />;

  const goToUserChat = id => {
    contacts_list.map(contact => {
      if (contact.id === id) {
        const userObject = {
          profilePicture: contact.profilePictureURL,
          firstName: contact.firstName,
          lastName: contact.lastName,
          lastSeen: contact.lastSeen,
          id: contact.id,
        };
        props.navigation.navigate('UserChatScreen', {userObject});
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sortText}>Sort</Text>
        <Text style={styles.contactsText}>Contacts</Text>
        <IconFeather name="plus" size={30} color="#1F51FF" />
      </View>
      <FlatList
        data={contacts_list}
        renderItem={renderContactList}
        ItemSeparatorComponent={renderSeparator}
      />
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#e9e9e9',
  },
  sortText: {
    color: '#1F51FF',
    fontSize: 20,
  },
  contactsText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default Contacts;
