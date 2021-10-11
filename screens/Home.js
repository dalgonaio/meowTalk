/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import {AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import {auth, db} from "../firebase"


const Home = ({navigation}) => {
  const [chats, setChats] = useState([])

  const signOutUser = () => {
    auth.signOut().then(()=>{
      navigation.replace('Login')
    })
  };

  useEffect( ()=> {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot)=> {
      setChats(snapshot.docs.map(doc=> ({
        id: doc.id,
        data: doc.data(),
      })))
    });
    return unsubscribe;
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meow Talk",
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTitleStyle: {
        color: "#354A18",
      },
      headerTintColor: "white",
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
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {chats.map(({id, data: {chatName}})=> (
          <CustomListItem key ={id} id={id} chatName={chatName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
  }
})
