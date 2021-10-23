/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {db} from '../firebase';

const AddChatScreen = ({navigation}) => {
  const [thisChatName, setThisChatName] = useState('');

  const createChat = async () => {
    try {
      await db.collection('chats').add({
        chatName: thisChatName,
      });
      navigation.goBack();
    } catch (error) {
      alert(error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
      headerBackTitle: 'Chats',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        type="text"
        value={thisChatName}
        onChangeText={(text) => setThisChatName(text)}
        leftIcon={<Icon name="wechat" type="antdesign" size={24} color="#718355" />}
      />
      <Button buttonStyle={styles.button} disabled={!thisChatName} onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    height: "100%",
  },
  button: {
    backgroundColor: '#718355',
    borderColor: '#718355',
    borderWidth: 5,
    width: 200,
    margin: 5,
  },
});
