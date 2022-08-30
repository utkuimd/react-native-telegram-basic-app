import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const ContactListSeparator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.transparent}></View>
      <View style={styles.nonTransparent}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  transparent: {
    width: 95,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  nonTransparent: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d2d2d2',
  },
});

export default ContactListSeparator;
