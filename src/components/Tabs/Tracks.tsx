import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../hooks/hooksState';
import {TrackCard} from '../TrackCard';

export const Traks = () => {
  const {loading, tracksCollection} = useAppSelector(state => state.tracks);

  if (loading)
    return (
      <View>
        <Text>Идет сканирование файлов...</Text>
      </View>
    );
    
  
  if(!("result" in tracksCollection)) return null
  const {result} = tracksCollection;
 

  return (
    <>
      <FlatList
        data={result}
        renderItem={({item}) => <TrackCard item={item} />}
      />
      <View style={{marginBottom: 10}}><Text>hjhjhj</Text></View>
    </>
  );
};

const styles = StyleSheet.create({
  textCategories: {
    fontSize: 18,
    color: 'white',
  },
});
