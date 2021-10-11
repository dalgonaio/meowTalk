/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Home from './screens/Home';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#718355'},
  headerTitleStyle: {color: '#FFFFFF'},
  //tint color of icons
  headerTintColor: '#ebf7de',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{
            title: 'Login',
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            title: 'Register',
          }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            title: 'Home',
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
        />
      <Stack.Screen
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
