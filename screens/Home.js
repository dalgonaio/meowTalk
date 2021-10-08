/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'


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
      headerTintColor: "black"
    })
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
