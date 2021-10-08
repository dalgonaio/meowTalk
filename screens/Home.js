/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import {auth, db} from "../firebase"


const Home = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meow Talk",
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTitleStyle: {
        color: "#354A18"
      },
      headerTintColor: "black",
      headerLeft: () => (
      <View style ={{marginLeft: 20}} >
        <TouchableOpacity >
        <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} />
        </TouchableOpacity>
      </View>),
    });
  }, [])


  return (
    <SafeAreaView>
      <ScrollView>
      <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
