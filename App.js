import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('Sandun');
  const [person, setPerson] = useState({name: 'mario', age: '45'});

  const clickHandler = () => {
    setName('perera');
    setPerson({name: 'lassi', age: 85});
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My name is {person.name} and Im {person.age} years old</Text>
      <View style={styles.buttonContainer}>
        <Button title='update' onPress={clickHandler}/>
      </View>
      <StatusBar style="auto" />
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
   
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },

  boldtext: {
    fontWeight: 'bold'
  },

  buttonContainer: {
    marginTop: 20
  }
});
