import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

export const Albums = (props: Props) => {
  return (
    <View>
      <Text style={styles.textCategories}>Альбомы</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textCategories: {
      fontSize: 18,
      color: 'white',
      marginHorizontal: 15,
    },
  });
  
