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
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
     headerBackTitle: "Back"
    })
  }, [navigation])

  const checkPhoto = ()=> {
    if (imageUrl ===""){setImageUrl("https://ichef-bbci-co-uk.cdn.ampproject.org/i/s/ichef.bbci.co.uk/news/800/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg")}
  };

  const submit = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(checkPhoto())
    .then((userCredential) => {
      userCredential.user.updateProfile({
        displayName: name,
        photoURL: imageUrl || "https://ichef-bbci-co-uk.cdn.ampproject.org/i/s/ichef.bbci.co.uk/news/800/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg"
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
          value={imageUrl}
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
