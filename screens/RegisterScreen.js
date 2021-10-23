/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {auth} from '../firebase'

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('https://image.freepik.com/free-vector/cute-avocado-cat-cartoon-character-animal-fruit-isolated_138676-3184.jpg');

  useLayoutEffect(() => {
    navigation.setOptions({
     headerBackTitle: "Back"
    })
  }, [navigation])

  const submit = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.updateProfile({
        displayName: name,
        photoURL: imageUrl
      })
    })
    .catch(error => alert(error.message));
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{marginBottom: 50}}>
        Create a meowTalk account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name**"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Input
          placeholder="Email**"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password**"
          type="text"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Input
          placeholder="Profile Picture Url (optional)"
          type="text"
          value=""
          onChangeText={(text) => setImageUrl(text)}
        />

      </View>
      <Button buttonStyle={styles.button} onPress={submit} title ="Register" />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    backgroundColor: '#718355',
    borderColor: '#718355',
    borderWidth: 5,
    width: 200,
    margin: 5,
  }
});
