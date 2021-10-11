/* eslint-disable no-unused-vars */
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Avatar } from 'react-native-elements';

const ChatScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      title: 'su.da.su.da',
      headerTitleAlign: 'left',
      headerTitle: ()=> (
        <View style ={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Avatar rounded source={{
            uri: 'https://image.freepik.com/free-vector/cute-avocado-cat-cartoon-character-animal-fruit-isolated_138676-3184.jpg'}} />
          <Text style={{
            color: "white",
            marginLeft: 10,
            fontWeight: "800",
          }}>{route.params.chatName}</Text>
        </View>
      )
    });
  }, [navigation]);
  return (
    <View>
      <Text>hello from chat screen {route.params.chatName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
