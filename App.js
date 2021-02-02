import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shawn', key: '1'},
    { name: 'paul', key: '2'},
    { name: 'joun', key: '3'},
    { name: 'peter', key: '4'},
    { name: 'mark', key: '5'},
    { name: 'sandun', key: '6'},
    { name: 'don', key: '7'},
  ]);

  return (
    <View style={styles.container}>
      
      <FlatList
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}  
      />
      {/* <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
   
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
