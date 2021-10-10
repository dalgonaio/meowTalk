/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Stylesheet, View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'

const AddChatScreen = () => {
  useLayoutEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input])


  return (
    <View>
      <Text>Hello from add chat!</Text>
    </View>
  )
}

export default AddChatScreen

const styles = Stylesheet.create({
  container: {}
})
