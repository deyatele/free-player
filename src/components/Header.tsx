import { Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React from 'react';

export const Header = () => {
  return (
    <View style={[styles.container]}>
      <Image source={require('../assets/settings-white.png')} style={styles.searchImage} />
      <TouchableOpacity>
        <View style={styles.search}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
          <Text style={styles.searchText}>Поиск треков, плейлистов и артистов</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    marginBottom: 20,
    marginVertical:20
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#555555',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    overflow:'hidden'
  },
  searchImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchText: {
    color: '#bbbbbb',
  },
});
