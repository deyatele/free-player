import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from './components/Header';
import {Traks} from './components/Traks';
import {Performers} from './components/Performers';
import {Albums} from './components/Albums';
import {Folders} from './components/Folders';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.app]}>
      <ScrollView>
        <Header />
        <ScrollView
          horizontal={true}
          style={styles.categories}
          showsHorizontalScrollIndicator={false}>
          <Traks />
          <Performers />
          <Albums />
          <Folders />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    // borderWidth:2,
    // borderColor:'red'
  },
  categories: {
    marginRight: 30,
  },
  textCategories: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 15,
  },
});

export default App;
