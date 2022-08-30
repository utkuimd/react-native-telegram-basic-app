import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contacts from './pages/contacts/Contacts';
import Chats from './pages/chats/Chats';
import Settings from './pages/settings/Settings';
import UserChat from './pages/userchat/UserChat';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ContactStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContactScreen" component={Contacts} />
      <Stack.Screen name="UserChatScreen" component={UserChat} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={Chats} />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Contacts" component={ContactStack} />
        <Tab.Screen name="Chats" component={ChatStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
