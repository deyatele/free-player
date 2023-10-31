import React from 'react';

import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.app]}>
      <Header />
      <ScrollView>
        <View>
          <Text style={{ color: 'white' }}>...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex:1,
    // borderWidth:2,
    // borderColor:'red'

  },
});

export default App;
