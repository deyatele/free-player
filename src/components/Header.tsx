import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../assets/settings-white.png')}
          style={styles.settingImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.search}>
        <Image
          source={require('../assets/search.png')}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>
          Поиск треков, плейлистов и артистов
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  search: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555555',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    overflow: 'hidden',
  },
  settingImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchText: {
    color: '#bbbbbb',
  },
});
