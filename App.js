/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

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
      <Stack.Navigator screenOptions={globalScreenOptions}>
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
      </Stack.Navigator>

      {/* <View style={styles.container}>
      <Text>Hello World-Lupin!</Text>
      <StatusBar style="auto" />
    </View> */}
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
