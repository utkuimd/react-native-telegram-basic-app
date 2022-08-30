import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ContactList from '../../components/ContactList';
import ContactListSeparator from '../../components/ContactListSeparator';
import contacts_list from '../../contacts-list.json';

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
        };
        props.navigation.navigate('UserChatScreen', {userObject});
      }
    });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={contacts_list}
        renderItem={renderContactList}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

export default Contacts;
