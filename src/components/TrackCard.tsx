import {View, Text} from 'react-native';
import React from 'react';
import { StatResult } from '../interface';

interface TrackCardProps {
  item: StatResult;
}

export const TrackCard = ({item}: TrackCardProps) => {
  return (
    <View
      key={item.path}
      style={{borderColor: '#eeeeee', borderWidth: 1, marginBottom: 5}}>
      <Text>Имя: {item.name ? item.name : item.path.split('/').at(-1)}</Text>
      <Text>Размер: {item.size}</Text>
      <Text>Путь: {item.path}</Text>
    </View>
  );
};
