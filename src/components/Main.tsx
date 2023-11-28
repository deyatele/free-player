import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Tabs} from './Tabs';
import {useState, useEffect} from 'react';
import {Settings} from './Settings';
import {useAppDispatch} from '../hooks/hooksState';
import {fethTracks} from '../state/tracksMP3/tracksMP3Slice';

export const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fethTracks());
  }, []);
  const {width} = useWindowDimensions();
  const [page, setPage] = useState(0);
  const changeCursor = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageCount = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (page !== pageCount) setPage(pageCount);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        style={{}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 35}}
        contentOffset={{x: page * 10, y: 0}}>
        {Tabs.map((tabEl, indx) => {
          return (
            <TouchableOpacity key={indx}>
              <Text style={styles.textCategories}>{tabEl.name}</Text>
              {page === indx && <View style={styles.cursor} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={changeCursor}>
        {Tabs.map((tabEl, indx) => {
          const Tab = tabEl.tab;
          return (
            <View key={indx} style={{width: width - 20, height:'90%'}}>
              {/* Решить  с высотой */}
              <Settings />
              <Tab />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textCategories: {
    fontSize: 18,
    color: 'white',
  },
  cursor: {
    height: 6,
    width: 20,
    backgroundColor: '#1f52e0',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 5,
  },
});
