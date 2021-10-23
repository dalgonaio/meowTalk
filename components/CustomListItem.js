/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {db} from '../firebase';

const CustomListItem = ({id, chatName, enterChat}) => {
  const [messages, setMessages] = useState([]);

  useEffect( ()=> {
    const unsubscribe = db
    .collection("chats")
    .doc(id)
    .collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot)=> {
      setMessages(snapshot.docs.map(doc=>
        doc.data(),
      ));
    });
    return unsubscribe;
  }, [])

  return (
    <View >
      <ListItem onPress={()=>enterChat(id, chatName)}
      key ={id}
      topDivider
      bottomDivider>
        <Avatar
          rounded
          source={{
            uri: messages?.[0]?.photoURL || "https://imgur.com/KEGkbQu",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight: '800', color: '#354A18'}}>{chatName}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
          style={{color: '#354A18'}}>
            {messages?.[0]?.message}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default CustomListItem;

