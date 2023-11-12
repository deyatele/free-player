import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Header} from './components/Header';
import {Main} from './components/Main';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.app]}>
      <ScrollView>
        <Header />
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    margin: 10,
  },
  categories: {rowGap: 20},
  textCategories: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 15,
  },
});

export default App;
