import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../../contexts/user';

const Settings = props => {
  const gotoEditScreen = () => {
    props.navigation.navigate('EditProfileScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.myProfilePicture}
        source={{uri: 'https://avatars.githubusercontent.com/u/107312837?v=4'}}
      />
      <UserInfo />
      <TouchableOpacity style={styles.button} onPress={gotoEditScreen}>
        <Text style={styles.button_text}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={null}>
        <Text style={styles.button_text}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={null}>
        <Text style={styles.logoutText}>Logout!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const UserInfo = () => {
  return (
    <UserContext.Consumer>
      {value => (
        <View style={styles.userinfo_container}>
          <View style={styles.userinfo_name_div}>
            <Text style={styles.userinfo_name_text}>{value.user.name}</Text>
            <Text style={styles.userinfo_surname_text}>{value.user.surname}</Text>
          </View>
          <Text style={styles.userinfo_username_text}>{value.user.username}</Text>
          <View style={styles.userinfo_phone_div}>
            <Text style={styles.userinfo_countrycode_text}>{value.user.countryCode}</Text>
            <Text style={styles.userinfo_phonenumber_text}>{value.user.phoneNumber}</Text>
          </View>
        </View>
      )}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myProfilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  button: {
    width: '60%',
    height: '8%',
    backgroundColor: '#7df9ff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button_text: {
    fontSize: 20,
    color: 'white',
  },
  logoutButton: {
    width: '60%',
    height: '8%',
    backgroundColor: 'red',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 20,
    color: 'white',
  },
  userinfo_container: {
    width: '50%',
    height: '18%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  userinfo_name_div: {
    flexDirection: 'row',
  },
  userinfo_name_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  userinfo_surname_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  userinfo_username_text: {
    fontSize: 20,
  },
  userinfo_phone_div: {
    flexDirection: 'row',
    marginTop: 5,
  },
  userinfo_countrycode_text: {
    fontSize: 20,
  },
  userinfo_phonenumber_text: {
    fontSize: 20,
    marginLeft: 5,
  },
});

export default Settings;
