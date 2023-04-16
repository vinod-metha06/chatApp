
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ChatScreen = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
 

  const handleSend = () => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sent: true,
    };
    setMessages([newMessage,...messages]);
   
    setText('');
  };
  console.log(messages)
  const renderItem = ({ item }) => {
    const isSent = item.sent;
    return (
      <View style={[styles.bubble, isSent ? styles.sentBubble : styles.receivedBubble]}>
        <Text style={[styles.text, isSent ? styles.sentText : styles.receivedText]}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        inverted={true}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
  receivedBubble: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderBottomRightRadius: 0,
  },
  receivedText: {
    color: '#000',
  },
  sentBubble: {
    backgroundColor: '#1e90ff',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 0,
  },
  sentText: {
    color: '#fff',
  },
});

export default ChatScreen;
