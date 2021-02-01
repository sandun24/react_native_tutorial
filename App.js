import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('Sandun');
  const [age, setAge] = useState('42');

  const changeName = (val) => {
    setName(val);
  }

  const changeAge = (val) => {
    setAge(val);
  }


  return (
    <View style={styles.container}>
      <Text>Enter name </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. sandun perera'
        onChangeText={changeName}
         />
      <Text>Enter age </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 24'
        onChangeText={changeAge}
         />
      <Text>{name} is {age} years old</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
