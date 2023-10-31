import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from './components/Header';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <Header />
      <ScrollView>
        <View>
          <Text>...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
});

export default App;
