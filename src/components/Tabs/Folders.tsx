import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Settings} from '../Settings';
import RNFS from 'react-native-fs';
import {TrackCard} from '../TrackCard';

export const Folders = ({cards}: any) => {
  return (
    <View>
      {cards && cards.map((card: RNFS.StatResult) => <TrackCard card={card} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  textCategories: {
    fontSize: 18,
    color: 'white',
  },
});
