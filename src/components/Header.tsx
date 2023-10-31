import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React from 'react';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/settings-white.png')}
        style={styles.searchImage}
      />
      <TouchableNativeFeedback>
        <View style={styles.search}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>
            Поиск треков, плейлистов и артистов
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#555555',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
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
