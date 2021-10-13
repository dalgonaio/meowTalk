/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {AndDesign, FontAwesome, Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const ChatScreen = ({navigation, route}) => {
  const [input, setInput] = useState("")
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            rounded
            source={{
              uri: 'https://image.freepik.com/free-vector/cute-avocado-cat-cartoon-character-animal-fruit-isolated_138676-3184.jpg',
            }}
          />
          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              fontWeight: '800',
            }}
          >
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent:"space-between",
          width: 80,
          marginRight: 20,
        }}>
          <TouchableOpacity>
          <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
      <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
        <StatusBar style="light" />

      <KeyboardAvoidingView
      behavior = {Platform.OS === "ios"? "padding": "height"}
      style={styles.container}
      keyboardVerticalOffset={90}
      >
<>
<ScrollView>
{/* Chat goes here */}
</ScrollView>
<View style={styles.footer} >
  <TextInput
  value={input}
  onChangeText={(text)=>setInput(text)}
  placeholder="meowTalk Message"
   styles={styles.textInput} />
  </View>
</>
      </KeyboardAvoidingView>

      </SafeAreaView>

  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {},
  footer: {},
  textInput: {}
});
