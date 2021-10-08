/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import {Button, Input, Image} from "react-native-elements"
import { StatusBar } from 'expo-status-bar'


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const signIn = () => {}

  return (
    <KeyboardAvoidingView behavior = "padding" style={styles.container}>
      <StatusBar style= "light" />
      <Image
      source = {{
        uri:"https://images.unsplash.com/photo-1621944276209-ec3dc5136f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1214&q=80",
      }}
      style = {{width: 175,
        height: 175,
      marginTop:10,
      marginBottom:10,
      marginRight:10,
      marginLeft:10,
      borderRadius:50,
      padding: 10}}
      />
      <View style = {styles.inputContainer}>
        <Input placeholder="Email"
        autoFocus type="Email"
        value={email}
        onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password"
        secureTextEntry
        type="password"
        value={password}
        onChangeText={(text) => setPassword(text)} />
      </View>
      <Button buttonStyle={styles.button} onPress={signIn}title="Login"  />
      <Button buttonStyle={styles.button} title="Register" />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  )
}

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
},
});

export default LoginScreen

