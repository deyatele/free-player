import {View, Text} from 'react-native';
import React from 'react';
import RNFS from 'react-native-fs';

interface TrackCardProps {
  card: RNFS.StatResult;
}

export const TrackCard = ({card}:TrackCardProps) =>{
  return (
    <View>
      <Text>{card.name}</Text>
      <Text>{card.path}</Text>
    </View>
  );
}
