import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const Traks = () => {
  return (
    <View>
      <Text style={styles.textCategories}>Треки</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textCategories: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 15,
  },
});
