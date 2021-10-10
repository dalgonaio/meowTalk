/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import {AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import {auth, db} from "../firebase"


const Home = ({navigation}) => {

  const signOutUser = () => {
    auth.signOut().then(()=>{
      navigation.replace('Login')
    })
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meow Talk",
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTitleStyle: {
        color: "#354A18",
      },
      headerTintColor: "black",
      headerLeft: () => (
      <View style ={{marginLeft: 20}} >
        <TouchableOpacity onPress={signOutUser}
        activeOpacity={0.5}>
        <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} />
        </TouchableOpacity>
      </View>),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight:20,
        }} >
        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AddChat')}
        activeOpacity={0.5}>
          <SimpleLineIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
        </View>
    ),
    });
  }, [navigation])


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
